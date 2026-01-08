import { useState, useEffect } from 'react'
import '../wizard/WizardSteps.css'

interface Step3Props {
  onNext: (data: any) => void
  onBack: () => void
  initialData?: any
}

const Step5_LegalDisclosure: React.FC<Step3Props> = ({ onNext, onBack, initialData = {} }) => {
  const [agreedToDisclosure, setAgreedToDisclosure] = useState(false)
  const [ipAddress, setIpAddress] = useState('')
  const [timestamp, setTimestamp] = useState('')

  useEffect(() => {
    // Capture IP address and timestamp for legal record
    const now = new Date().toISOString()
    setTimestamp(now)
    
    // In production, you'd get actual IP from server
    // For now, we'll log it client-side
    fetch('https://api.ipify.org?format=json')
      .then(res => res.json())
      .then(data => setIpAddress(data.ip))
      .catch(() => setIpAddress('Unable to capture'))
  }, [])

  const handleNext = () => {
    if (!agreedToDisclosure) {
      alert('You must acknowledge the call recording disclosure to continue.')
      return
    }

    onNext({
      legal_disclosure_agreed: true,
      legal_disclosure_ip: ipAddress,
      legal_disclosure_timestamp: timestamp
    })
  }

  return (
    <div className="wizard-step">
      <div className="step-header-content">
        <h1>⚠️ Call Recording Disclosure</h1>
        <p className="step-description critical">
          CRITICAL: Legal compliance required before activating your AI
        </p>
      </div>

      <div className="step-form">
        <div className="legal-disclosure-box">
          <h2>📞 Call Recording Laws & Your Responsibility</h2>
          
          <div className="disclosure-content">
            <h3>What You Need to Know:</h3>
            <p>
              MeetCIP records and transcribes phone calls on behalf of your business. 
              <strong> You are responsible for complying with all applicable call recording laws.</strong>
            </p>

            <h3>Your Legal Obligations:</h3>
            <ul>
              <li>
                <strong>All-Party Consent States:</strong> In states like California, Florida, 
                Pennsylvania, and others, you must obtain consent from <strong>all parties</strong> 
                before recording.
              </li>
              <li>
                <strong>One-Party Consent States:</strong> In most other states, only one party 
                (you) needs to consent, but best practice is to always notify callers.
              </li>
              <li>
                <strong>Business Requirement:</strong> You must include a call recording 
                disclosure in your AI greeting (e.g., "This call may be recorded for quality assurance").
              </li>
            </ul>

            <h3>What MeetCIP Provides:</h3>
            <ul>
              <li>✅ Tools to customize your AI greeting with disclosure</li>
              <li>✅ Call transcripts and recordings for your business use</li>
              <li>✅ Secure storage and encryption of call data</li>
            </ul>

            <h3>What You Are Responsible For:</h3>
            <ul>
              <li>❌ Ensuring your business complies with federal, state, and local laws</li>
              <li>❌ Including appropriate disclosures in your AI greeting</li>
              <li>❌ Consulting with legal counsel if you are unsure about requirements</li>
            </ul>

            <div className="legal-warning">
              <strong>⚠️ WARNING:</strong> Failure to comply with call recording laws can result 
              in significant fines, lawsuits, and legal liability. MeetCIP is not liable for 
              your compliance with call recording laws.
            </div>

            <h3>Resources:</h3>
            <ul>
              <li>
                <a href="/terms" target="_blank" rel="noopener noreferrer">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/privacy" target="_blank" rel="noopener noreferrer">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/dpa" target="_blank" rel="noopener noreferrer">
                  Data Processing Addendum
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="form-section acknowledgment-section">
          <label className="checkbox-label large">
            <input
              type="checkbox"
              checked={agreedToDisclosure}
              onChange={(e) => setAgreedToDisclosure(e.target.checked)}
            />
            <span>
              <strong>I acknowledge and agree that:</strong>
              <ul>
                <li>My business is responsible for complying with all call recording laws</li>
                <li>I will include appropriate call recording disclosures in my AI greeting</li>
                <li>I have consulted legal counsel or understand my legal obligations</li>
                <li>MeetCIP is not liable for my compliance with recording laws</li>
              </ul>
            </span>
          </label>
        </div>

        <div className="legal-record">
          <p><strong>Legal Record:</strong></p>
          <p>IP Address: {ipAddress || 'Loading...'}</p>
          <p>Timestamp: {timestamp ? new Date(timestamp).toLocaleString() : 'Loading...'}</p>
          <p className="legal-note">
            This acknowledgment will be logged with your IP address and timestamp for legal protection.
          </p>
        </div>

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
            disabled={!agreedToDisclosure}
          >
            I Acknowledge & Continue
          </button>
        </div>
      </div>
    </div>
  )
}

export default Step5_LegalDisclosure
