import { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import {
  Elements,
  CardElement,
  useStripe,
  useElements
} from '@stripe/react-stripe-js'
import '../wizard/WizardSteps.css'
import './PaymentForm.css'

// Initialize Stripe (you'll need to add your publishable key)
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || 'pk_test_...')

interface Step3Props {
  onNext: (data: any) => void
  onBack: () => void
  initialData?: any
}

const PaymentForm: React.FC<Step3Props> = ({ onNext, onBack, initialData }) => {
  const stripe = useStripe()
  const elements = useElements()
  const [isProcessing, setIsProcessing] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [billingDetails, setBillingDetails] = useState({
    name: initialData.account?.full_name || '',
    email: initialData.account?.email || '',
    address_line1: '',
    address_city: '',
    address_state: '',
    address_zip: '',
    address_country: 'US'
  })

  const cardElementOptions = {
    style: {
      base: {
        fontSize: '16px',
        color: '#424770',
        '::placeholder': {
          color: '#aab7c4',
        },
        fontFamily: '"DM Sans", system-ui, sans-serif',
      },
      invalid: {
        color: '#ef4444',
        iconColor: '#ef4444'
      },
    },
    hidePostalCode: false
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!stripe || !elements) {
      return
    }

    setIsProcessing(true)
    setErrorMessage('')

    try {
      // Get the CardElement
      const cardElement = elements.getElement(CardElement)
      if (!cardElement) {
        throw new Error('Card element not found')
      }

      // Create payment method
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
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000'
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
          plan: initialData.step2?.plan || initialData.plan?.plan || 'professional',
          business_id: localStorage.getItem('business_id') || 1
        })
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.detail || 'Subscription creation failed')
      }

      const result = await response.json()

      // Handle 3D Secure if required
      if (result.requires_action) {
        const { error: confirmError } = await stripe.confirmCardPayment(
          result.client_secret
        )
        
        if (confirmError) {
          throw new Error(confirmError.message || '3D Secure authentication failed')
        }
      }

      // Success!
      onNext({
        payment_method_id: paymentMethod.id,
        subscription_id: result.subscription_id,
        customer_id: result.customer_id,
        billing_details: billingDetails
      })

    } catch (error: any) {
      console.error('Payment error:', error)
      setErrorMessage(error.message || 'An error occurred. Please try again.')
    } finally {
      setIsProcessing(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setBillingDetails(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="wizard-step payment-step">
      <div className="step-header">
        <span className="step-icon">💳</span>
        <h2>Payment Information</h2>
        <p>Secure payment powered by Stripe</p>
      </div>

      {/* Plan Summary */}
      <div className="plan-summary">
        <div className="summary-header">
          <h3>Order Summary</h3>
        </div>
        <div className="summary-content">
          <div className="summary-row">
  	    <span className="summary-label">{initialData.step2?.plan_name || initialData.plan?.plan_name || 'Selected'} Plan</span>
  	    <span className="summary-value">${initialData.step2?.price || initialData.plan?.price || 0}/month</span>
	</div>
          <div className="summary-row">
            <span className="summary-label">Calls Included</span>
            <span className="summary-value">
  	      {typeof (initialData.step2?.calls || initialData.plan?.calls) === 'number' 
    	      ? `${initialData.step2?.calls || initialData.plan?.calls} calls/month`
              : 'Unlimited calls'}
            </span>
          </div>
          <div className="summary-row total">
            <span className="summary-label">Total Due Today</span>
            <span className="summary-value total-amount">${initialData.step2?.price || initialData.plan?.price || 0}</span>
          </div>
        </div>
        <div className="summary-note">
          <p>💡 Your subscription will renew automatically each month. Cancel anytime.</p>
        </div>
      </div>

      {/* Payment Form */}
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
          <div className="error-message">
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
                <span className="spinner"></span>
                Processing...
              </>
            ) : (
              <>
                Pay ${initialData.step2?.price || initialData.plan?.price || 0} & Continue
              </>
            )}
          </button>
        </div>
      </form>

      <div className="payment-guarantee">
        <p>
          <strong>Money-Back Guarantee:</strong> Try MeetCIP risk-free for 30 days. 
          If you're not satisfied, we'll refund your payment—no questions asked.
        </p>
      </div>
    </div>
  )
}

// Wrapper component with Stripe Elements provider
const Step3_PaymentInfo: React.FC<Step3Props> = (props) => {
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm {...props} />
    </Elements>
  )
}

export default Step3_PaymentInfo
