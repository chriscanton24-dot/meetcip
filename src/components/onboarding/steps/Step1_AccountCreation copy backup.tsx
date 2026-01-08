import { useState } from 'react'
import '../wizard/WizardSteps.css'

interface Step1Props {
  onNext: (data: any) => void
  initialData?: any
}

const Step1_AccountCreation: React.FC<Step1Props> = ({ onNext, initialData = {} }) => {
  const [fullName, setFullName] = useState(initialData.full_name || '')
  const [email, setEmail] = useState(initialData.email || '')
  const [password, setPassword] = useState(initialData.password || '')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [agreedToTerms, setAgreedToTerms] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const [errors, setErrors] = useState<{[key: string]: string}>({})

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
      // Call backend signup endpoint
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000'
      const response = await fetch(`${API_URL}/api/auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          full_name: fullName,
          email: email,
          password: password
        })
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.detail || 'Signup failed')
      }

      const data = await response.json()

      // ✅ CRITICAL: Store JWT token and business_id in localStorage
      localStorage.setItem('token', data.token)
      localStorage.setItem('business_id', data.business_id)
      localStorage.setItem('user_id', data.user_id)

      console.log('✅ Signup successful! Token stored:', {
        token: data.token.substring(0, 20) + '...',
        business_id: data.business_id,
        user_id: data.user_id
      })

      // Proceed to Step 2
      onNext({
        full_name: fullName,
        email: email,
        password: password,
        user_id: data.user_id,
        business_id: data.business_id
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
          Get started with MeetCIP - your AI answering service
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