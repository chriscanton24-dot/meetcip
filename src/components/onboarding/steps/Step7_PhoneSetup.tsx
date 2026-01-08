
import { useState } from 'react'
import '../wizard/WizardSteps.css'

interface Step7Props {
  onNext: (data: any) => void
  onBack: () => void
  initialData?: any
}

const Step7_PhoneSetup: React.FC<Step7Props> = ({ onNext, onBack, initialData = {} }) => {
  const [existingNumber, setExistingNumber] = useState(initialData.existing_number || '')
  const [forwardingInstructions, setForwardingInstructions] = useState(initialData.forwarding_type || 'always')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleNext = async () => {
    setIsSubmitting(true)
    setError('')

    try {
      const requestData = {
        business_id: localStorage.getItem('business_id'),
        option: 'forward',
        existing_number: existingNumber
      }

      // Call backend API to assign phone number
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/onboarding/assign-phone`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(requestData)
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.detail || 'Failed to assign phone number')
      }

      const result = await response.json()

      // Save data and move to next step
      const wizardData = {
        setup_type: 'forward',
        phone_number: result.phone_number,
        webhook_url: result.webhook_url,
        existing_number: existingNumber,
        forwarding_type: forwardingInstructions
      }

      onNext(wizardData)
    } catch (err: any) {
      console.error('Phone setup error:', err)
      setError(err.message || 'Failed to set up phone number. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const isValid = existingNumber.trim().length >= 10

  return (
    <div className="wizard-step">
      <div className="step-header-content">
        <h1>📞 Phone Number Setup</h1>
        <p className="step-description">
          Enter your business phone number to connect with MeetCIP
        </p>
      </div>

      <div className="step-form">
        {error && (
          <div className="error-banner">
            ⚠️ {error}
          </div>
        )}

        <div className="info-box">
          <h3>📲 Forward Your Existing Number</h3>
          <p>Keep your current phone number and forward calls to MeetCIP when you need AI assistance.</p>
          <ul>
            <li>✅ Keep your existing number</li>
            <li>✅ Choose when to forward (after hours, busy, always)</li>
            <li>✅ No change to business cards/marketing</li>
          </ul>
        </div>

        <div className="form-section">
          <label className="form-label required">Your Business Phone Number</label>
          <input
            type="tel"
            className="form-input"
            placeholder="(210) 555-1234"
            value={existingNumber}
            onChange={(e) => setExistingNumber(e.target.value)}
          />
          <p className="form-hint">
            We'll provide forwarding instructions in the next step
          </p>
        </div>

        <div className="form-section">
          <label className="form-label">When should calls forward to MeetCIP?</label>
          <div className="radio-group">
            <label className="radio-item">
              <input
                type="radio"
                name="forwarding"
                checked={forwardingInstructions === 'always'}
                onChange={() => setForwardingInstructions('always')}
              />
              <div>
                <strong>Always (24/7)</strong>
                <p>All calls go to MeetCIP</p>
              </div>
            </label>

            <label className="radio-item">
              <input
                type="radio"
                name="forwarding"
                checked={forwardingInstructions === 'after_hours'}
                onChange={() => setForwardingInstructions('after_hours')}
              />
              <div>
                <strong>After Hours Only</strong>
                <p>Forward when you're closed</p>
              </div>
            </label>

            <label className="radio-item">
              <input
                type="radio"
                name="forwarding"
                checked={forwardingInstructions === 'busy'}
                onChange={() => setForwardingInstructions('busy')}
              />
              <div>
                <strong>When Busy</strong>
                <p>Forward when you can't answer</p>
              </div>
            </label>
          </div>
        </div>

        <div className="step-actions">
          <button
            type="button"
            className="btn-secondary"
            onClick={onBack}
            disabled={isSubmitting}
          >
            Back
          </button>
          <button
            type="button"
            className="btn-primary"
            onClick={handleNext}
            disabled={!isValid || isSubmitting}
          >
            {isSubmitting ? '⏳ Setting up...' : 'Continue'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Step7_PhoneSetup
