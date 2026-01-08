import { useState } from 'react'
import '../wizard/WizardSteps.css'
import './PricingCards.css'

interface Step2Props {
  onNext: (data: any) => void
  onBack: () => void
  initialData?: any
}

const Step2_ChoosePlan: React.FC<Step2Props> = ({ 
  onNext, 
  onBack, 
  initialData = {} 
}) => {
  const [selectedPlan, setSelectedPlan] = useState(
    initialData.plan || null
  )

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      price: 49,
      calls: 100,
      features: [
        '100 calls per month',
        'Basic AI receptionist',
        'Email notifications',
        'Call transcripts',
        'Standard support',
        'Single phone number'
      ],
      recommended: false,
      badge: null
    },
    {
      id: 'professional',
      name: 'Professional',
      price: 149,
      calls: 500,
      features: [
        '500 calls per month',
        'Advanced AI receptionist',
        'Email & SMS notifications',
        'Call transcripts & recordings',
        'Priority support (24h response)',
        'Up to 3 phone numbers',
        'Custom AI training',
        'Basic analytics'
      ],
      recommended: true,
      badge: 'MOST POPULAR'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 399,
      calls: 'Unlimited',
      features: [
        'Unlimited calls',
        'Enterprise AI receptionist',
        'Multi-channel notifications',
        'Advanced call analytics',
        'Dedicated support (4h response)',
        'Unlimited phone numbers',
        'Advanced AI customization',
        'CRM integration',
        'White-label option',
        'API access'
      ],
      recommended: false,
      badge: 'BEST VALUE'
    }
  ]

  const handleContinue = () => {
    if (!selectedPlan) {
      alert('Please select a plan to continue')
      return
    }

    const plan = plans.find(p => p.id === selectedPlan)
    
    onNext({
      plan: selectedPlan,
      plan_name: plan?.name,
      price: plan?.price,
      calls: plan?.calls
    })
  }

  return (
    <div className="wizard-step">
      <div className="step-header">
        <span className="step-icon">💳</span>
        <h2>Choose Your Plan</h2>
        <p>Select the plan that best fits your business needs</p>
      </div>

      <div className="pricing-cards-container">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`pricing-card ${selectedPlan === plan.id ? 'selected' : ''} ${plan.recommended ? 'recommended' : ''}`}
            onClick={() => setSelectedPlan(plan.id)}
          >
            {plan.badge && (
              <div className="plan-badge">{plan.badge}</div>
            )}
            
            <div className="plan-header">
              <h3>{plan.name}</h3>
              <div className="plan-price">
                <span className="currency">$</span>
                <span className="amount">{plan.price}</span>
                <span className="period">/month</span>
              </div>
              <p className="plan-calls">
                {typeof plan.calls === 'number' 
                  ? `${plan.calls} calls/month` 
                  : `${plan.calls} calls`}
              </p>
            </div>

            <div className="plan-features">
              <ul>
                {plan.features.map((feature, idx) => (
                  <li key={idx}>
                    <span className="checkmark">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <button 
              className={`select-plan-btn ${selectedPlan === plan.id ? 'selected' : ''}`}
              onClick={(e) => {
                e.stopPropagation()
                setSelectedPlan(plan.id)
              }}
            >
              {selectedPlan === plan.id ? '✓ Selected' : 'Select Plan'}
            </button>
          </div>
        ))}
      </div>

      <div className="pricing-notes">
        <p className="note-item">
          <span className="note-icon">💡</span>
          <strong>All plans include:</strong> 24/7 AI answering, bilingual support (English/Spanish), 
          call transcripts, and secure cloud storage
        </p>
        <p className="note-item">
          <span className="note-icon">🔄</span>
          <strong>Flexible:</strong> Change or cancel your plan anytime. No long-term contracts.
        </p>
        <p className="note-item">
          <span className="note-icon">📞</span>
          <strong>Overage:</strong> If you exceed your monthly calls, additional calls are billed 
          at $0.50/call
        </p>
      </div>

      <div className="plan-comparison">
        <button 
          className="comparison-link"
          onClick={() => {
            // Could open a modal or expand a comparison table
            alert('Feature comparison coming soon!')
          }}
        >
          Compare all features →
        </button>
      </div>

      <div className="wizard-actions">
        <button onClick={onBack} className="btn-secondary">
          Back
        </button>
        <button 
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
