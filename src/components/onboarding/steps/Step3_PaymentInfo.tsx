import React, { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import {
  Elements,
  CardElement,
  useStripe,
  useElements
} from '@stripe/react-stripe-js'
import '../wizard/WizardSteps.css'
import './PaymentForm.css'

// ─── STRIPE INIT ─────────────────────────────────────────────────────────────
// GAP 1 FIX: ?? '' removes the hardcoded 'pk_test_...' fallback entirely.
// VITE_STRIPE_PUBLISHABLE_KEY confirmed present in Vercel (all environments, added Jan 8).
// CRITICAL: This is the publishable key ONLY — safe to expose in frontend.
// The secret key is NEVER referenced here or anywhere in any frontend file.
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY ?? '')

// ─── TYPES ────────────────────────────────────────────────────────────────────

interface Step3Props {
  onNext: (data: any) => void
  onBack: () => void
  initialData?: any
}

interface BillingDetails {
  name: string
  email: string
  address_line1: string
  address_city: string
  address_state: string
  address_zip: string
  address_country: string
}

// ─── INNER FORM COMPONENT ────────────────────────────────────────────────────

const PaymentForm: React.FC<Step3Props> = ({ onNext, onBack, initialData = {} }) => {
  const stripe = useStripe()
  const elements = useElements()
  const [isProcessing, setIsProcessing] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const [billingDetails, setBillingDetails] = useState<BillingDetails>({
    name: initialData.account?.full_name || '',
    email: initialData.account?.email || '',
    address_line1: '',
    address_city: '',
    address_state: '',
    address_zip: '',
    address_country: 'US'
  })

  // ── Derive wizard state from Step 2 output ──────────────────────────────────
  // Supports both initialData.step2?.xxx (wizard accumulator) and initialData.xxx (flat)
  // Field names updated to match Step2 rewrite output:
  //   tier_name (was plan_name), monthly_price (was price), calls_per_month (was calls)
  const tierName = initialData.step2?.tier_name || initialData.tier_name || initialData.plan?.plan_name || 'Selected Plan'
  const billingInterval: 'monthly' | 'annual' = initialData.step2?.billing_interval || initialData.billing_interval || 'monthly'
  const monthlyPrice: number = initialData.step2?.monthly_price || initialData.monthly_price || 0
  const annualPrice: number = initialData.step2?.annual_price || initialData.annual_price || 0
  const callsPerMonth: number = initialData.step2?.calls_per_month || initialData.calls_per_month || 0
  const selectedPlan: string = initialData.step2?.plan || initialData.plan || ''

  // GAP 3 FIX: display price computed from billing interval — not static monthly
  const displayPrice: number = billingInterval === 'annual' ? annualPrice : monthlyPrice
  const annualSavings: number = (monthlyPrice * 12) - annualPrice

  // ── Card element style ───────────────────────────────────────────────────────

  const cardElementOptions = {
    style: {
      base: {
        fontSize: '16px',
        color: '#424770',
        '::placeholder': { color: '#aab7c4' },
        fontFamily: '"DM Sans", system-ui, sans-serif'
      },
      invalid: {
        color: '#ef4444',
        iconColor: '#ef4444'
      }
    },
    hidePostalCode: false
  }

  // ── Submit handler ───────────────────────────────────────────────────────────

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!stripe || !elements) return

    setIsProcessing(true)
    setErrorMessage('')

    // GA4 checkout event
    if ((window as any).gtag) {
      (window as any).gtag('event', 'checkout_started', {
        plan_tier: selectedPlan,
        billing_interval: billingInterval,
        price: displayPrice
      })
    }

    try {
      const cardElement = elements.getElement(CardElement)
      if (!cardElement) {
        throw new Error('Card element not found')
      }

      // Create payment method with Stripe
      const { error: pmError, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
        billing_details: {
          name: billingDetails.name,
          email: billingDetails.email,
          address: {
            line1: billingDetails.address_line1,
            city: billingDetails.address_city,
            state: billingDetails.address_state,
            postal_code: billingDetails.address_zip,
            country: billingDetails.address_country
          }
        }
      })

      if (pmError) {
        setErrorMessage(pmError.message || 'Payment method creation failed')
        setIsProcessing(false)
        return
      }

      // Call backend to create subscription
      // VITE_API_URL confirmed live in Vercel (verified April 4, 2026)
      const API_URL = import.meta.env.VITE_API_URL || 'https://ai-answering-service-cloud.onrender.com'

      const response = await fetch(`${API_URL}/api/payments/create-subscription`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          payment_method_id: paymentMethod.id,
          email: billingDetails.email,
          name: billingDetails.name,
          plan: selectedPlan,
          // GAP 2 FIX: billing_interval now included — backend selects correct Stripe price ID
          billing_interval: billingInterval
          // business_id INTENTIONALLY REMOVED: backend derives customer_business_id from JWT
          // See BUILD+FIN-STRIPE-0002 Finding D fix — JWT-only for all protected endpoints
        })
      })

      // 401 handled specifically — distinct from payment failure
      if (response.status === 401) {
        throw new Error('Your session has expired. Please log in again and retry.')
      }

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.detail || 'Subscription creation failed. Please try again.')
      }

      const result = await response.json()

      // Handle 3D Secure if required
      if (result.requires_action) {
        const { error: confirmError } = await stripe.confirmCardPayment(result.client_secret)
        if (confirmError) {
          throw new Error(confirmError.message || '3D Secure authentication failed')
        }
      }

      // Success — pass forward. Note: plan fallback to '' (no hardcoded 'professional' default)
      onNext({
        payment_method_id: paymentMethod.id,
        subscription_id: result.subscription_id,
        customer_id: result.customer_id,
        billing_details: billingDetails,
        plan: selectedPlan,
        billing_interval: billingInterval
      })

    } catch (error: any) {
      console.error('Payment error:', error)
      setErrorMessage(error.message || 'An error occurred. Please try again.')
    } finally {
      setIsProcessing(false)
    }
  }

  const handleInputChange = (field: keyof BillingDetails, value: string) => {
    setBillingDetails(prev => ({ ...prev, [field]: value }))
  }

  // ── Render ───────────────────────────────────────────────────────────────────

  return (
    <div className="wizard-step payment-step">
      <div className="step-header">
        <span className="step-icon">💳</span>
        <h2>Payment Information</h2>
        <p>Secure payment powered by Stripe</p>
      </div>

      {/* ── Order summary — fully dynamic from wizard state ───────────────────
          GAP 3 FIX: price, period label, renewal copy, and savings callout
          are all conditional on billingInterval. No static monthly assumptions.
      ──────────────────────────────────────────────────────────────────────── */}
      <div className="plan-summary">
        <div className="summary-header">
          <h3>Order Summary</h3>
        </div>
        <div className="summary-content">
          <div className="summary-row">
            <span className="summary-label">{tierName} Plan</span>
            <span className="summary-value">
              ${displayPrice.toFixed(0)}{billingInterval === 'annual' ? '/year' : '/month'}
            </span>
          </div>
          <div className="summary-row">
            <span className="summary-label">Calls Included</span>
            <span className="summary-value">
              {callsPerMonth > 0 ? `${callsPerMonth} calls/month` : 'See plan details'}
            </span>
          </div>
          <div className="summary-row total">
            <span className="summary-label">Total Due Today</span>
            <span className="summary-value total-amount">
              ${displayPrice.toFixed(0)}
            </span>
          </div>
        </div>

        {/* Annual savings callout — only shown when annual billing selected */}
        {billingInterval === 'annual' && annualSavings > 0 && (
          <div className="summary-savings">
            <p>✅ You're saving ${annualSavings.toFixed(0)}/year vs monthly billing.</p>
          </div>
        )}

        <div className="summary-note">
          {/* GAP 3 FIX: renewal copy is dynamic — not static "each month" */}
          {billingInterval === 'annual' ? (
            <p>💡 Your {tierName} subscription renews annually.</p>
          ) : (
            <p>💡 Your {tierName} subscription renews monthly. Cancel anytime.</p>
          )}
        </div>
      </div>

      {/* ── Payment form ──────────────────────────────────────────────────────── */}
      <form onSubmit={handleSubmit} className="payment-form">
        <div className="form-section">
          <h3>Billing Information</h3>

          <div className="form-row">
            <div className="form-group">
              <label>Full Name *</label>
              <input
                type="text"
                value={billingDetails.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                required
                placeholder="John Smith"
              />
            </div>

            <div className="form-group">
              <label>Email *</label>
              <input
                type="email"
                value={billingDetails.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                required
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div className="form-group">
            <label>Billing Address *</label>
            <input
              type="text"
              value={billingDetails.address_line1}
              onChange={(e) => handleInputChange('address_line1', e.target.value)}
              required
              placeholder="123 Main Street"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>City *</label>
              <input
                type="text"
                value={billingDetails.address_city}
                onChange={(e) => handleInputChange('address_city', e.target.value)}
                required
                placeholder="San Antonio"
              />
            </div>

            <div className="form-group">
              <label>State *</label>
              <input
                type="text"
                value={billingDetails.address_state}
                onChange={(e) => handleInputChange('address_state', e.target.value)}
                required
                placeholder="TX"
                maxLength={2}
              />
            </div>

            <div className="form-group">
              <label>ZIP Code *</label>
              <input
                type="text"
                value={billingDetails.address_zip}
                onChange={(e) => handleInputChange('address_zip', e.target.value)}
                required
                placeholder="78238"
                maxLength={10}
              />
            </div>
          </div>
        </div>

        <div className="form-section">
          <h3>Card Information</h3>
          <div className="form-group card-element-group">
            <label>Card Details *</label>
            <div className="card-element-wrapper">
              <CardElement options={cardElementOptions} />
            </div>
            <p className="help-text">
              <span className="lock-icon">🔒</span>
              Your payment information is encrypted and secure
            </p>
          </div>
        </div>

        {errorMessage && (
          <div className="error-message" role="alert">
            <span className="error-icon">⚠️</span>
            {errorMessage}
          </div>
        )}

        <div className="security-badges">
          <div className="badge">
            <span className="badge-icon">🔒</span>
            <span className="badge-text">SSL Encrypted</span>
          </div>
          <div className="badge">
            <img src="/stripe-badge.png" alt="Powered by Stripe" className="stripe-badge" />
          </div>
          <div className="badge">
            <span className="badge-icon">✓</span>
            <span className="badge-text">PCI Compliant</span>
          </div>
        </div>

        <div className="wizard-actions">
          <button
            type="button"
            onClick={onBack}
            className="btn-secondary"
            disabled={isProcessing}
          >
            Back
          </button>
          <button
            type="submit"
            className="btn-primary"
            disabled={!stripe || isProcessing}
          >
            {isProcessing ? (
              <>
                <span className="spinner" />
                Processing...
              </>
            ) : (
              // Button label reflects billing interval — not static monthly
              <>
                Pay ${displayPrice.toFixed(0)}{billingInterval === 'annual' ? '/yr' : '/mo'} & Continue
              </>
            )}
          </button>
        </div>
      </form>

      <div className="payment-guarantee">
        <p>
          <strong>Money-Back Guarantee:</strong> Try MeetCIP CRM + AI risk-free for 30 days.
          If you're not satisfied, we'll refund your payment—no questions asked.
        </p>
      </div>
    </div>
  )
}

// ─── WRAPPER WITH STRIPE ELEMENTS PROVIDER ───────────────────────────────────

const Step3_PaymentInfo: React.FC<Step3Props> = (props) => {
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm {...props} />
    </Elements>
  )
}

export default Step3_PaymentInfo
