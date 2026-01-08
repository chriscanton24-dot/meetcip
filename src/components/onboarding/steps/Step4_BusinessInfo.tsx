import { useState } from 'react'
import '../wizard/WizardSteps.css'

interface Step2Props {
  onNext: (data: any) => void
  onBack: () => void
  initialData?: any
}

const Step4_BusinessInfo: React.FC<Step2Props> = ({ onNext, onBack, initialData = {} }) => {
  const [industry, setIndustry] = useState(initialData.industry || '')

  // 11 customer-facing industries (NO MeetCIP)
  const industries = [
    { id: 'hvac', name: 'HVAC', icon: '❄️' },
    { id: 'plumbing', name: 'Plumbing', icon: '🚰' },
    { id: 'electricians', name: 'Electricians', icon: '⚡' },
    { id: 'garage_door', name: 'Garage Door Repair', icon: '🚪' },
    { id: 'water_fire_restoration', name: 'Water/Fire Restoration', icon: '🔥' },
    { id: 'roofing', name: 'Roofing', icon: '🏠' },
    { id: 'foundation_repair', name: 'Foundation Repair', icon: '🏗️' },
    { id: 'landscaping', name: 'Landscaping', icon: '🌳' },
    { id: 'concrete_leveling', name: 'Concrete Leveling', icon: '🛣️' },
    { id: 'fencing', name: 'Fencing', icon: '🪵' },
    { id: 'real_estate', name: 'Real Estate', icon: '🏡' }
  ]

  const handleNext = () => {
    if (!industry) {
      alert('Please select your industry')
      return
    }

    onNext({
      industry
    })
  }

  return (
    <div className="wizard-step">
      <div className="step-header-content">
        <h1>What's Your Industry?</h1>
        <p className="step-description">
          We'll customize your AI receptionist based on your industry
        </p>
      </div>

      <div className="step-form">
        <div className="form-section">
          <label className="form-label required">Select Your Industry</label>
          <div className="industry-grid-simple">
            {industries.map((ind) => (
              <div
                key={ind.id}
                className={`industry-card-simple ${industry === ind.id ? 'selected' : ''}`}
                onClick={() => setIndustry(ind.id)}
              >
                <span className="industry-icon-simple">{ind.icon}</span>
                <span className="industry-name-simple">{ind.name}</span>
                {industry === ind.id && (
                  <span className="checkmark">✓</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {industry && (
          <div className="selection-info">
            <p>
              <strong>Selected:</strong> {industries.find(i => i.id === industry)?.name}
            </p>
            <p className="form-hint">
              We'll configure your AI specifically for {industries.find(i => i.id === industry)?.name.toLowerCase()} businesses
            </p>
          </div>
        )}

        <div className="step-actions">
          <button
            type="button"
            className="btn-secondary"
            onClick={onBack}
          >
            Back
          </button>
          <button
            type="button"
            className="btn-primary"
            onClick={handleNext}
            disabled={!industry}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  )
}

export default Step4_BusinessInfo
