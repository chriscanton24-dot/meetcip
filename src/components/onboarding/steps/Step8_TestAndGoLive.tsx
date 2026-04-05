import React, { useState, useEffect } from 'react'
import '../wizard/WizardSteps.css'

// ─── TYPES ────────────────────────────────────────────────────────────────────
// NEW-STEP8-A FIX: Renamed Step6Props → Step8Props (was cosmetically incorrect)

interface Step8Props {
  onBack: () => void
  onComplete: () => void
  wizardData: any
}

// ─── COMPONENT ────────────────────────────────────────────────────────────────

const Step8_TestAndGoLive: React.FC<Step8Props> = ({ onBack, onComplete, wizardData }) => {
  const [testCallMade, setTestCallMade] = useState(false)
  const [isActivating, setIsActivating] = useState(false)
  const [twilioNumber, setTwilioNumber] = useState('')
  const [twilioError, setTwilioError] = useState('')
  // NEW-STEP8-C FIX: activationError replaces alert() for all activation failure states
  const [activationError, setActivationError] = useState('')

  // NEW-STEP8-B: callLogs dead code removed (was initialized empty, never populated,
  // the {callLogs.length > 0 && ...} block could never render)

  // ── Fetch assigned Twilio number on mount ────────────────────────────────────
  useEffect(() => {
    const fetchNumber = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/onboarding/get-phone-number`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
              business_id: localStorage.getItem('business_id')
            })
          }
        )

        const data = await response.json()
        if (data.is_assigned) {
          setTwilioNumber(data.phone_number)
        } else {
          setTwilioError('No phone number assigned yet. Please contact support.')
        }
      } catch (error) {
        console.error('Error fetching phone number:', error)
        setTwilioError('Error loading phone number. Please refresh the page.')
      }
    }

    fetchNumber()
  }, [])

  // ── Test call handler ────────────────────────────────────────────────────────
  // NEW-STEP8-C FIX: removed alert() — sets state to show test checklist inline
  const handleTestCall = () => {
    setTestCallMade(true)
  }

  // ── Activate handler with payment verification gate ──────────────────────────
  // CONCERN FIX: Two-phase activation.
  //   Phase 1: Verify active subscription via GET /api/payments/subscription-status
  //   Phase 2: Only if subscription is active, call POST /api/onboarding/activate
  //
  // ⚠️ DEPLOYMENT SEQUENCE REQUIREMENT:
  //   GET /api/payments/subscription-status does not exist in backend-dev yet.
  //   Backend endpoint MUST be deployed to Render BEFORE this frontend deploys to Vercel.
  //   See DEPLOYMENT_GUIDE.md for exact steps and backend code snippet.
  const handleActivate = async () => {
    setIsActivating(true)
    setActivationError('')

    // ── PHASE 1: Payment gate — verify active subscription ────────────────────
    try {
      const statusResponse = await fetch(
        `${import.meta.env.VITE_API_URL}/api/payments/subscription-status`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        }
      )

      // 401: session expired
      if (statusResponse.status === 401) {
        setActivationError('Your session has expired. Please log in again.')
        setIsActivating(false)
        return
      }

      // Non-OK: endpoint error or not yet deployed
      if (!statusResponse.ok) {
        setActivationError(
          'Unable to verify subscription status. Please try again or contact support.'
        )
        setIsActivating(false)
        return
      }

      const statusData = await statusResponse.json()

      // Gate: block activation if subscription is not active
      if (statusData.status !== 'active') {
        setActivationError(
          'An active subscription is required to activate MeetCIP CRM + AI. ' +
          'Please complete payment in the previous step before activating.'
        )
        setIsActivating(false)
        return
      }

    } catch (error) {
      console.error('Subscription status check error:', error)
      setActivationError(
        'Unable to verify subscription status. Please try again or contact support.'
      )
      setIsActivating(false)
      return
    }

    // ── PHASE 2: Subscription confirmed active — proceed with activation ───────
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/onboarding/activate`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          },
          body: JSON.stringify({
            // business_id retained here — /api/onboarding/activate was NOT changed in
            // BUILD+FIN-STRIPE-0002 so it still expects this field (CROSS-4 note)
            business_id: localStorage.getItem('business_id')
          })
        }
      )

      if (response.ok) {
        // NEW-STEP8-C FIX: removed alert() — calls onComplete() directly
        onComplete()
      } else {
        const errorData = await response.json()
        setActivationError(
          `Activation failed: ${errorData.detail || 'Please contact support.'}`
        )
      }
    } catch (error) {
      console.error('Activation error:', error)
      setActivationError('Error activating service. Please try again.')
    } finally {
      setIsActivating(false)
    }
  }

  // ── Render ───────────────────────────────────────────────────────────────────

  return (
    <div className="wizard-step">
      <div className="step-header-content">
        <h1>🎉 Test & Go Live!</h1>
        <p className="step-description">
          Test your AI receptionist and activate your service
        </p>
      </div>

      <div className="step-form">

        {/* Your phone number */}
        <div className="success-box">
          <h2>✅ Your AI Receptionist is Ready!</h2>
          {/* Product name corrected: "MeetCIP CRM + AI" per governance rule */}
          <p>Here's your MeetCIP CRM + AI phone number:</p>
          {twilioError ? (
            <p className="error-text" role="alert">{twilioError}</p>
          ) : (
            <div className="phone-number-display">
              {twilioNumber || 'Loading...'}
            </div>
          )}
        </div>

        {/* Test call section */}
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

        {/* Activation section */}
        <div className="activation-section">
          <h3>Step 2: Activate MeetCIP CRM + AI</h3>
          <p>
            Once you're happy with the test call, activate your service to start
            handling real customer calls.
          </p>

          <div className="info-box">
            <p><strong>What happens when you activate:</strong></p>
            <ul>
              <li>✅ Your AI receptionist goes live immediately</li>
              <li>✅ You'll receive email notifications for every call</li>
              <li>✅ Call transcripts will appear in your dashboard</li>
              <li>✅ You can modify settings anytime in your dashboard</li>
            </ul>
          </div>

          {/* Phone forwarding instructions — conditional on setup type */}
          {wizardData?.phoneSetup?.setup_type === 'forward' && (
            <div className="forwarding-instructions">
              <h4>📲 Forwarding Instructions</h4>
              <p>
                To forward calls from{' '}
                <strong>{wizardData.phoneSetup.existing_number}</strong> to MeetCIP CRM + AI:
              </p>
              <ol>
                <li>On your phone, dial: <code>*72{twilioNumber}</code></li>
                <li>Wait for confirmation tone</li>
                <li>Hang up - your calls are now forwarded!</li>
              </ol>
              <p className="form-hint">To cancel forwarding, dial <code>*73</code></p>
            </div>
          )}

          {/* Inline activation error — replaces alert() for all failure cases */}
          {activationError && (
            <div className="error-message" role="alert">
              <span className="error-icon">⚠️</span>
              {activationError}
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="step-actions">
          <button
            type="button"
            className="btn-secondary"
            onClick={onBack}
            disabled={isActivating}
          >
            Back
          </button>
          <button
            type="button"
            className="btn-primary btn-activate"
            onClick={handleActivate}
            disabled={isActivating}
          >
            {isActivating ? '🚀 Verifying & Activating...' : '🚀 Activate MeetCIP CRM + AI'}
          </button>
        </div>

      </div>
    </div>
  )
}

export default Step8_TestAndGoLive
