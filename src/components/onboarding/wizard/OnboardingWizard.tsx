import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './OnboardingWizard.css'
import './WizardSteps.css'

// Import all 8 steps
import Step1_AccountCreation from '../steps/Step1_AccountCreation'
import Step2_ChoosePlan from '../steps/Step2_ChoosePlan'
import Step3_PaymentInfo from '../steps/Step3_PaymentInfo'
import Step4_BusinessInfo from '../steps/Step4_BusinessInfo'
import Step5_LegalDisclosure from '../steps/Step5_LegalDisclosure'
import Step6_SmartCustomize from '../steps/Step6_SmartCustomize'
import Step7_PhoneSetup from '../steps/Step7_PhoneSetup'
import Step8_TestAndGoLive from '../steps/Step8_TestAndGoLive'

const OnboardingWizard = () => {
  const navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState(1)
  const [wizardData, setWizardData] = useState({
    step1: {},  // Account: name, email, password
    step2: {},  // Plan: plan, price, calls
    step3: {},  // Payment: payment_method_id, subscription_id, customer_id
    step4: {},  // Industry: industry
    step5: {},  // Legal: legal_disclosure_agreed, IP, timestamp
    step6: {},  // AI Config: formData, generationResult
    step7: {},  // Phone: setup_type, existing_number, area_code
    step8: {}   // Go Live: test_call_made, activated
  })

  const steps = [
    { number: 1, label: 'Account', icon: '👤' },
    { number: 2, label: 'Plan', icon: '💳' },
    { number: 3, label: 'Payment', icon: '💰' },
    { number: 4, label: 'Industry', icon: '🏢' },
    { number: 5, label: 'Legal', icon: '📜' },
    { number: 6, label: 'Configure AI', icon: '🤖' },
    { number: 7, label: 'Phone', icon: '📞' },
    { number: 8, label: 'Go Live', icon: '🎉' }
  ]

  const handleStepComplete = (stepNumber: number, data: any) => {
    // Save step data
    setWizardData(prev => ({
      ...prev,
      [`step${stepNumber}`]: data
    }))

    // Move to next step
    if (stepNumber < 8) {
      setCurrentStep(stepNumber + 1)
      window.scrollTo(0, 0)
    }
  }

  const handleStepBack = (stepNumber: number) => {
    if (stepNumber > 1) {
      setCurrentStep(stepNumber - 1)
      window.scrollTo(0, 0)
    }
  }

  const handleComplete = () => {
    // Onboarding complete - redirect to dashboard
    navigate('/dashboard')
  }

  const renderProgressIndicator = () => (
    <div className="wizard-progress">
      <div className="progress-steps">
        {steps.map((step, index) => (
          <div key={step.number} className="progress-step-wrapper">
            <div
              className={`step-circle ${
                currentStep === step.number ? 'active' : ''
              } ${currentStep > step.number ? 'completed' : ''}`}
            >
              {currentStep > step.number ? (
                <svg className="checkmark" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 13l4 4L19 7"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <span className="step-number">{step.number}</span>
              )}
            </div>
            <span className="step-label">{step.label}</span>
            
            {index < steps.length - 1 && (
              <div
                className={`step-connector ${
                  currentStep > step.number ? 'completed' : ''
                }`}
              />
            )}
          </div>
        ))}
      </div>
      
      {/* Mobile progress counter */}
      <div className="mobile-progress-counter">
        Step {currentStep} of {steps.length}
      </div>
    </div>
  )

  const renderCurrentStep = () => {
    const commonProps = {
      onNext: (data: any) => handleStepComplete(currentStep, data),
      onBack: () => handleStepBack(currentStep),
      initialData: wizardData
    }

    switch (currentStep) {
      case 1:
        return <Step1_AccountCreation {...commonProps} />
      case 2:
        return <Step2_ChoosePlan {...commonProps} />
      case 3:
        return <Step3_PaymentInfo {...commonProps} />
      case 4:
        return <Step4_BusinessInfo {...commonProps} />
      case 5:
        return <Step5_LegalDisclosure {...commonProps} />
      case 6:
        return <Step6_SmartCustomize {...commonProps} />
      case 7:
        return <Step7_PhoneSetup {...commonProps} />
      case 8:
        return <Step8_TestAndGoLive {...commonProps} onComplete={handleComplete} />
      default:
        return <div>Invalid step</div>
    }
  }

  return (
    <div className="onboarding-container">
      {renderProgressIndicator()}
      <div className="onboarding-content">
        {renderCurrentStep()}
      </div>
    </div>
  )
}

export default OnboardingWizard
