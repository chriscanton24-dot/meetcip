import { useState, useEffect } from 'react'
import '../wizard/WizardSteps.css'

interface Step6Props {
  onBack: () => void
  onComplete: () => void
  wizardData: any
}

const Step8_TestAndGoLive: React.FC<Step6Props> = ({ onBack, onComplete, wizardData }) => {
  const [testCallMade, setTestCallMade] = useState(false)
  const [callLogs, setCallLogs] = useState<any[]>([])
  const [isActivating, setIsActivating] = useState(false)
  const [twilioNumber, setTwilioNumber] = useState('')

  useEffect(() => {
    // Fetch assigned Twilio number
    const fetchNumber = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/onboarding/get-phone-number`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          },
          body: JSON.stringify({
            business_id: localStorage.getItem('business_id')
          })
        })
        
        const data = await response.json()
        if (data.is_assigned) {
          setTwilioNumber(data.phone_number)
        } else {
          setTwilioNumber('No phone number assigned yet')
        }
      } catch (error) {
        console.error('Error fetching phone number:', error)
        setTwilioNumber('Error loading phone number')
      }
    }

    fetchNumber()
  }, [])

  const handleTestCall = () => {
    alert(`Please call ${twilioNumber} to test your AI receptionist!`)
    setTestCallMade(true)
  }

  const handleActivate = async () => {
    setIsActivating(true)
    
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/onboarding/activate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          business_id: localStorage.getItem('business_id')
        })
      })

      if (response.ok) {
        const data = await response.json()
        alert(`🎉 ${data.message}`)
        onComplete()
      } else {
        const errorData = await response.json()
        alert(`Failed to activate: ${errorData.detail || 'Please contact support.'}`)
      }
    } catch (error) {
      console.error('Activation error:', error)
      alert('Error activating service. Please try again.')
    } finally {
      setIsActivating(false)
    }
  }

  return (
    <div className="wizard-step">
      <div className="step-header-content">
        <h1>🎉 Test & Go Live!</h1>
        <p className="step-description">
          Test your AI receptionist and activate your service
        </p>
      </div>

      <div className="step-form">
        <div className="success-box">
          <h2>✅ Your AI Receptionist is Ready!</h2>
          <p>Here's your MeetCIP phone number:</p>
          <div className="phone-number-display">
            {twilioNumber || 'Loading...'}
          </div>
        </div>

        <div className="test-section">
          <h3>Step 1: Test Your AI</h3>
          <p>Call the number above to test how your AI receptionist answers calls.</p>
          
          <button
            type="button"
            className="btn-test"
            onClick={handleTestCall}
          >
            📞 I'm Ready to Test Call
          </button>

          {testCallMade && (
            <div className="test-checklist">
              <p><strong>✅ What to test:</strong></p>
              <ul>
                <li>Does the AI answer with your business greeting?</li>
                <li>Does it correctly answer questions about your services?</li>
                <li>Does it capture caller information properly?</li>
                <li>Is the voice quality clear?</li>
              </ul>
            </div>
          )}
        </div>

        {callLogs.length > 0 && (
          <div className="call-logs-section">
            <h3>Recent Test Calls</h3>
            <div className="call-logs">
              {callLogs.map((log, idx) => (
                <div key={idx} className="call-log-item">
                  <p><strong>Call #{idx + 1}</strong></p>
                  <p>Duration: {log.duration}s</p>
                  <p>Status: {log.status}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="activation-section">
          <h3>Step 2: Activate MeetCIP</h3>
          <p>Once you're happy with the test call, activate your service to start handling real customer calls.</p>

          <div className="info-box">
            <p><strong>What happens when you activate:</strong></p>
            <ul>
              <li>✅ Your AI receptionist goes live immediately</li>
              <li>✅ You'll receive email notifications for every call</li>
              <li>✅ Call transcripts will appear in your dashboard</li>
              <li>✅ You can modify settings anytime in your dashboard</li>
            </ul>
          </div>

          {wizardData?.phoneSetup?.setup_type === 'forward' && (
            <div className="forwarding-instructions">
              <h4>📲 Forwarding Instructions</h4>
              <p>To forward calls from <strong>{wizardData.phoneSetup.existing_number}</strong> to MeetCIP:</p>
              <ol>
                <li>On your phone, dial: <code>*72{twilioNumber}</code></li>
                <li>Wait for confirmation tone</li>
                <li>Hang up - your calls are now forwarded!</li>
              </ol>
              <p className="form-hint">To cancel forwarding, dial <code>*73</code></p>
            </div>
          )}
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
            className="btn-primary btn-activate"
            onClick={handleActivate}
            disabled={isActivating}
          >
            {isActivating ? '🚀 Activating...' : '🚀 Activate MeetCIP'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Step8_TestAndGoLive