import { useState } from 'react'
import '../wizard/WizardSteps.css'

interface Step1Props {
  onNext: (data: any) => void
  initialData?: any
}

const Step1_AccountCreation: React.FC<Step1Props> = ({ onNext, initialData = {} }) => {
  const [fullName, setFullName] = useState(initialData.full_name || '')
  const [email, setEmail] = useState(initialData.email || '')
  const [phone, setPhone] = useState(initialData.phone || '')
  const [password, setPassword] = useState(initialData.password || '')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [agreedToTerms, setAgreedToTerms] = useState(false)
  const [smsConsent, setSmsConsent] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const [errors, setErrors] = useState<{[key: string]: string}>({})

  // Format phone number as user types: (XXX) XXX-XXXX
  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, '').slice(0, 10)
    if (digits.length <= 3) return digits
    if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(formatPhone(e.target.value))
  }

  const validate = () => {
    const newErrors: {[key: string]: string} = {}

    if (!fullName.trim()) {
      newErrors.fullName = 'Full name is required'
    }

    if (!email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Invalid email address'
    }

    // Phone: required if SMS consent checked, optional otherwise
    const phoneDigits = phone.replace(/\D/g, '')
    if (smsConsent && !phone.trim()) {
      newErrors.phone = 'Phone number is required to receive SMS notifications'
    } else if (phone.trim() && phoneDigits.length !== 10) {
      newErrors.phone = 'Please enter a valid 10-digit US phone number'
    }

    if (!password) {
      newErrors.password = 'Password is required'
    } else if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters'
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
    }

    if (!agreedToTerms) {
      newErrors.terms = 'You must agree to the Terms of Service'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = async () => {
    if (!validate()) {
      return
    }

    setIsSubmitting(true)
    setErrors({})

    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000'
      const phoneDigits = phone.replace(/\D/g, '')
      const response = await fetch(`${API_URL}/api/auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          full_name: fullName,
          email: email,
          password: password,
          phone: phoneDigits ? `+1${phoneDigits}` : null,
          sms_consent: smsConsent,
          sms_consent_timestamp: smsConsent ? new Date().toISOString() : null
        })
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.detail || 'Signup failed')
      }

      const data = await response.json()

      localStorage.setItem('token', data.token)
      localStorage.setItem('business_id', data.business_id)
      localStorage.setItem('user_id', data.user_id)

      console.log('✅ Signup successful! Token stored:', {
        token: data.token.substring(0, 20) + '...',
        business_id: data.business_id,
        user_id: data.user_id,
        sms_consent: smsConsent
      })

      onNext({
        full_name: fullName,
        email: email,
        password: password,
        phone: phoneDigits ? `+1${phoneDigits}` : null,
        user_id: data.user_id,
        business_id: data.business_id,
        sms_consent: smsConsent
      })

    } catch (error: any) {
      console.error('Signup error:', error)
      setErrors({
        submit: error.message || 'Signup failed. Please try again.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="wizard-step">
      <div className="step-header-content">
        <h1>Create Your Account</h1>
        <p className="step-description">
          Get started with MeetCIP CRM + AI
        </p>
      </div>

      <div className="step-form">
        {errors.submit && (
          <div className="error-banner">
            ⚠️ {errors.submit}
          </div>
        )}

        <div className="form-section">
          <label className="form-label required">Full Name</label>
          <input
            type="text"
            className={`form-input ${errors.fullName ? 'error' : ''}`}
            placeholder="e.g., John Smith"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            disabled={isSubmitting}
          />
          {errors.fullName && <p className="error-message">{errors.fullName}</p>}
        </div>

        <div className="form-section">
          <label className="form-label required">Email Address</label>
          <input
            type="email"
            className={`form-input ${errors.email ? 'error' : ''}`}
            placeholder="e.g., john@business.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isSubmitting}
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>

        <div className="form-section">
          <label className="form-label">
            Phone Number
            <span style={{ fontSize: '12px', fontWeight: '400', color: '#6b7280', marginLeft: '6px' }}>
              (Required for SMS notifications)
            </span>
          </label>
          <input
            type="tel"
            className={`form-input ${errors.phone ? 'error' : ''}`}
            placeholder="(210) 555-0100"
            value={phone}
            onChange={handlePhoneChange}
            disabled={isSubmitting}
            maxLength={14}
          />
          {errors.phone && <p className="error-message">{errors.phone}</p>}
        </div>

        <div className="form-section">
          <label className="form-label required">Password</label>
          <input
            type="password"
            className={`form-input ${errors.password ? 'error' : ''}`}
            placeholder="Minimum 8 characters"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isSubmitting}
          />
          {errors.password && <p className="error-message">{errors.password}</p>}
        </div>

        <div className="form-section">
          <label className="form-label required">Confirm Password</label>
          <input
            type="password"
            className={`form-input ${errors.confirmPassword ? 'error' : ''}`}
            placeholder="Re-enter your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            disabled={isSubmitting}
          />
          {errors.confirmPassword && <p className="error-message">{errors.confirmPassword}</p>}
        </div>

        {/* SMS Consent — COMPLIANCE-A2P-0002 | Twilio A2P 10DLC Required */}
        <div className="form-section" style={{
          background: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '8px',
          padding: '16px',
          marginBottom: '20px'
        }}>
          <h3 style={{margin: '0 0 12px 0', fontSize: '16px', fontWeight: '600'}}>
            📱 Text Message Notifications (Optional)
          </h3>

          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={smsConsent}
              onChange={(e) => setSmsConsent(e.target.checked)}
              disabled={isSubmitting}
            />
            <span style={{fontSize: '14px', lineHeight: '1.4'}}>
              I agree to receive SMS messages from MeetCIP regarding missed call alerts,
              call summaries, and account notifications. Message frequency varies.
              Message and data rates may apply. Reply STOP to opt out or HELP for help.
              <strong> Consent is not a condition of purchase.</strong> View our{' '}
              <a href="/privacy" target="_blank" rel="noopener noreferrer"
                 style={{color: '#3b82f6', textDecoration: 'underline'}}>
                Privacy Policy
              </a>{' '}
              and{' '}
              <a href="/terms" target="_blank" rel="noopener noreferrer"
                 style={{color: '#3b82f6', textDecoration: 'underline'}}>
                Terms & Conditions
              </a>.
            </span>
          </label>

          <p style={{
            fontSize: '12px',
            color: '#6b7280',
            margin: '8px 0 0 24px',
            fontStyle: 'italic'
          }}>
            ℹ️ Text notifications are optional. You can create your account without agreeing to SMS messages.
          </p>
        </div>

        <div className="form-section">
          <label className={`checkbox-label ${errors.terms ? 'error' : ''}`}>
            <input
              type="checkbox"
              checked={agreedToTerms}
              onChange={(e) => setAgreedToTerms(e.target.checked)}
              disabled={isSubmitting}
            />
            <span>
              I agree to the{' '}
              <a href="/terms" target="_blank" rel="noopener noreferrer">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="/privacy" target="_blank" rel="noopener noreferrer">
                Privacy Policy
              </a>
            </span>
          </label>
          {errors.terms && <p className="error-message">{errors.terms}</p>}
        </div>

        <div className="step-actions">
          <div></div>
          <button
            type="button"
            className="btn-primary"
            onClick={handleNext}
            disabled={isSubmitting}
          >
            {isSubmitting ? '⏳ Creating Account...' : 'Create Account & Continue'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Step1_AccountCreation
