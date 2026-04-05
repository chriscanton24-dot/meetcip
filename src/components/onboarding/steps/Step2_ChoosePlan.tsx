import React, { useState, useEffect } from 'react'
import '../wizard/WizardSteps.css'
import './PricingCards.css'

// ─── TYPES ───────────────────────────────────────────────────────────────────

interface Step2Props {
  onNext: (data: any) => void
  onBack: () => void
  initialData?: any
}

// Matches backend PlanResponse Pydantic model (BUILD+FIN-STRIPE-0002)
interface PlanResponse {
  tier_key: string
  tier_name: string
  monthly_price: number
  annual_price: number
  calls_per_month: number
  calls_display: string
  stripe_price_id_monthly: string | null
  stripe_price_id_annual: string | null
}

// ─── CONSTANTS ────────────────────────────────────────────────────────────────

// VITE_API_URL confirmed live in Vercel (verified April 4, 2026 screenshot)
const BACKEND_URL = import.meta.env.VITE_API_URL || 'https://ai-answering-service-cloud.onrender.com'

// Static feature copy by tier_key.
// Prices and call counts are intentionally EXCLUDED here — they come from the API.
// This is UI copy only — does not violate SSOT Golden Rule.
const PLAN_FEATURES: Record<string, string[]> = {
  starter: [
    'AI receptionist answers calls 24/7',
    'Bilingual support (English & Spanish)',
    'Email notifications for every call',
    'Full call transcripts',
    'Standard support',
    'Single phone number'
  ],
  professional: [
    'Everything in Starter',
    'Advanced AI receptionist',
    'Email & SMS notifications',
    'Call transcripts & recordings',
    'Priority support (24h response)',
    'Up to 3 phone numbers',
    'Custom AI training',
    'Basic analytics'
  ],
  business: [
    'Everything in Professional',
    'Multi-user account (up to 3 users)',
    'Up to 5 phone numbers',
    'Dedicated support (4h response)',
    'Advanced analytics',
    'CRM integration'
  ]
}

// Static badge labels by tier_key (promotional copy — not a business fact)
const PLAN_BADGES: Record<string, string> = {
  professional: 'MOST POPULAR',
  business: 'BEST VALUE'
}

// ─── COMPONENT ────────────────────────────────────────────────────────────────

const Step2_ChoosePlan: React.FC<Step2Props> = ({
  onNext,
  onBack,
  initialData = {}
}) => {
  // Seed from initialData to support Back navigation from Step 3
  const [selectedPlan, setSelectedPlan] = useState<string | null>(
    initialData.plan || null
  )
  const [billingInterval, setBillingInterval] = useState<'monthly' | 'annual'>(
    initialData.billing_interval || 'monthly'
  )
  const [plans, setPlans] = useState<PlanResponse[]>([])
  const [loading, setLoading] = useState(true)
  const [fetchError, setFetchError] = useState('')

  // ── Fetch plans from live backend on mount ──────────────────────────────────
  // GET /api/payments/plans is a PUBLIC endpoint — no JWT required
  // Confirmed live April 4, 2026: https://ai-answering-service-cloud.onrender.com/api/payments/plans
  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await fetch(`${BACKEND_URL}/api/payments/plans`)
        if (!response.ok) {
          throw new Error(`Plan fetch failed: HTTP ${response.status}`)
        }
        const data: PlanResponse[] = await response.json()
        if (!data || data.length === 0) {
          throw new Error('No plans returned from server')
        }
        setPlans(data)
      } catch (err) {
        console.error('Plan fetch error:', err)
        setFetchError('Unable to load plans. Please refresh the page.')
      } finally {
        setLoading(false)
      }
    }
    fetchPlans()
  }, [])

  // ── Helpers ─────────────────────────────────────────────────────────────────

  const getAnnualSavings = (plan: PlanResponse): number =>
    (plan.monthly_price * 12) - plan.annual_price

  const getSavingsPercent = (plan: PlanResponse): number =>
    Math.round((getAnnualSavings(plan) / (plan.monthly_price * 12)) * 100)

  const getMaxSavingsPercent = (): number => {
    if (plans.length === 0) return 0
    return Math.max(...plans.map(p => getSavingsPercent(p)))
  }

  // ── Event handlers ──────────────────────────────────────────────────────────

  const handleSelectPlan = (tierKey: string) => {
    setSelectedPlan(tierKey)
    // GA4 — verify gtag wrapper pattern in codebase before assuming call signature
    if ((window as any).gtag) {
      (window as any).gtag('event', 'plan_selected', {
        plan_tier: tierKey,
        billing_interval: billingInterval
      })
    }
  }

  const handleBillingToggle = (interval: 'monthly' | 'annual') => {
    setBillingInterval(interval)
    // GA4
    if ((window as any).gtag) {
      (window as any).gtag('event', 'billing_interval_selected', {
        billing_interval: interval
      })
    }
  }

  const handleContinue = () => {
    if (!selectedPlan) return
    const plan = plans.find(p => p.tier_key === selectedPlan)
    if (!plan) return

    // GA4
    if ((window as any).gtag) {
      (window as any).gtag('event', 'cta_click', {
        plan_tier: plan.tier_key,
        billing_interval: billingInterval,
        price: billingInterval === 'annual' ? plan.annual_price : plan.monthly_price
      })
    }

    // SSOT-compliant wizard state output — all values from API, no hardcodes
    onNext({
      plan: plan.tier_key,
      tier_name: plan.tier_name,
      billing_interval: billingInterval,
      monthly_price: plan.monthly_price,
      annual_price: plan.annual_price,
      calls_per_month: plan.calls_per_month
    })
  }

  // ── Loading state ────────────────────────────────────────────────────────────

  if (loading) {
    return (
      <div className="wizard-step">
        <div className="step-header">
          <span className="step-icon">💳</span>
          <h2>Choose Your Plan</h2>
          <p>Select the plan that best fits your business needs</p>
        </div>
        <div className="plans-loading">
          <div className="loading-spinner" aria-label="Loading plans" />
          <p>Loading plans...</p>
        </div>
      </div>
    )
  }

  // ── Error state ──────────────────────────────────────────────────────────────

  if (fetchError) {
    return (
      <div className="wizard-step">
        <div className="step-header">
          <span className="step-icon">💳</span>
          <h2>Choose Your Plan</h2>
        </div>
        <div className="plans-error">
          <p className="error-text">{fetchError}</p>
          <button
            type="button"
            className="btn-primary"
            onClick={() => window.location.reload()}
          >
            Refresh Page
          </button>
        </div>
      </div>
    )
  }

  // ── Main render ──────────────────────────────────────────────────────────────

  return (
    <div className="wizard-step">
      <div className="step-header">
        <span className="step-icon">💳</span>
        <h2>Choose Your Plan</h2>
        <p>Select the plan that best fits your business needs</p>
      </div>

      {/* ── Billing toggle ───────────────────────────────────────────────────── */}
      <div className="billing-toggle-container">
        <div className="billing-toggle" role="group" aria-label="Select billing interval">
          <button
            type="button"
            className={`toggle-btn${billingInterval === 'monthly' ? ' active' : ''}`}
            onClick={() => handleBillingToggle('monthly')}
          >
            Monthly
          </button>
          <button
            type="button"
            className={`toggle-btn${billingInterval === 'annual' ? ' active' : ''}`}
            onClick={() => handleBillingToggle('annual')}
          >
            Annual
          </button>
        </div>
        {billingInterval === 'annual' && plans.length > 0 && (
          <span className="save-badge">
            Save up to {getMaxSavingsPercent()}% annually
          </span>
        )}
      </div>

      {/* ── Purchasable plan cards — dynamically from GET /api/payments/plans ── */}
      <div className="pricing-cards-container">
        {plans.map((plan) => {
          const badge = PLAN_BADGES[plan.tier_key] || null
          const isRecommended = plan.tier_key === 'professional'
          const isSelected = selectedPlan === plan.tier_key
          const annualSavings = getAnnualSavings(plan)
          const savingsPercent = getSavingsPercent(plan)
          const features = PLAN_FEATURES[plan.tier_key] || []
          const displayPrice = billingInterval === 'annual'
            ? plan.annual_price.toFixed(0)
            : plan.monthly_price.toFixed(0)

          return (
            <div
              key={plan.tier_key}
              className={`pricing-card${isSelected ? ' selected' : ''}${isRecommended ? ' recommended' : ''}`}
              onClick={() => handleSelectPlan(plan.tier_key)}
            >
              {badge && <div className="plan-badge">{badge}</div>}

              <div className="plan-header">
                <h3>{plan.tier_name}</h3>
                <div className="plan-price">
                  <span className="currency">$</span>
                  <span className="amount">{displayPrice}</span>
                  <span className="period">
                    {billingInterval === 'annual' ? '/year' : '/month'}
                  </span>
                </div>
                {/* Annual savings callout — computed dynamically from API values — never hardcoded */}
                {billingInterval === 'annual' && (
                  <p className="annual-savings-callout">
                    Save ${annualSavings.toFixed(0)}/yr vs monthly ({savingsPercent}% off)
                  </p>
                )}
                {/* calls_display sourced from API — e.g., "300 calls/mo" */}
                <p className="plan-calls">{plan.calls_display}</p>
              </div>

              <div className="plan-features">
                <ul>
                  {features.map((feature, idx) => (
                    <li key={idx}>
                      <span className="checkmark">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button
                type="button"
                className={`select-plan-btn${isSelected ? ' selected' : ''}`}
                onClick={(e) => {
                  e.stopPropagation()
                  handleSelectPlan(plan.tier_key)
                }}
              >
                {isSelected ? '✓ Selected' : 'Select Plan'}
              </button>
            </div>
          )
        })}

        {/* ── Enterprise — STATIC Contact Us card ──────────────────────────────
            GOVERNANCE RULE (permanent): Enterprise is "Contact Us" only.
            Never self-service. Never show dollar amount. Never selectable.
            Enterprise is intentionally excluded from GET /api/payments/plans response.
            Source: SSOT-DB-0002, BUILD+FIN-STRIPE-0003 governance rule 4.
        ─────────────────────────────────────────────────────────────────────── */}
        <div className="pricing-card enterprise-card" aria-label="Enterprise plan — contact required">
          <div className="plan-header">
            <h3>Enterprise</h3>
            {/* NO dollar amount shown for Enterprise — governance rule */}
            <div className="plan-price enterprise-price">
              <span className="enterprise-custom-label">Custom Pricing</span>
            </div>
            <p className="plan-calls">Custom call volume</p>
          </div>

          <div className="plan-features">
            <ul>
              <li><span className="checkmark">✓</span>Everything in Business</li>
              <li><span className="checkmark">✓</span>Dedicated account manager</li>
              <li><span className="checkmark">✓</span>Advanced AI customization</li>
              <li><span className="checkmark">✓</span>White-label option</li>
              <li><span className="checkmark">✓</span>API access</li>
            </ul>
          </div>

          {/*
            ⚠️ DIRECTOR ACTION REQUIRED BEFORE DEPLOY:
            Replace href="#contact" with the actual demo/contact form URL from your codebase.
            Search for: the demo request or contact page link used elsewhere in the site.
          */}
          <a
            href="#contact"
            className="contact-us-btn"
            onClick={(e) => e.stopPropagation()}
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* ── Pricing notes ────────────────────────────────────────────────────── */}
      {/* REMOVED: "$0.50/call overage" — unverified stat, not in authorized_stats (Issue 5) */}
      {/* REMOVED: "No long-term contracts" — contradicts rep annual sales flow (Issue 6) */}
      <div className="pricing-notes">
        <p className="note-item">
          <span className="note-icon">💡</span>
          <strong>All plans include:</strong> 24/7 AI answering, bilingual support (English/Spanish),
          call transcripts, and secure cloud storage
        </p>
        {/* "Cancel anytime" note scoped to monthly only — never shown for annual */}
        {billingInterval === 'monthly' && (
          <p className="note-item">
            <span className="note-icon">🔄</span>
            Cancel monthly plans anytime.
          </p>
        )}
      </div>

      {/* Inline validation — no alert() */}
      {!selectedPlan && (
        <p className="plan-required-hint" role="alert">
          Please select a plan to continue.
        </p>
      )}

      <div className="wizard-actions">
        <button
          type="button"
          onClick={onBack}
          className="btn-secondary"
        >
          Back
        </button>
        <button
          type="button"
          onClick={handleContinue}
          className="btn-primary"
          disabled={!selectedPlan}
        >
          Continue to Payment
        </button>
      </div>
    </div>
  )
}

export default Step2_ChoosePlan
