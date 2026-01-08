
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Step1_AccountCreation from '../steps/Step1_AccountCreation'
import Step2_BusinessInfo from '../steps/Step2_BusinessInfo'
import Step3_LegalDisclosure from '../steps/Step3_LegalDisclosure'
import Step4_SmartCustomize from '../steps/Step4_SmartCustomize'
import Step5_PhoneSetup from '../steps/Step5_PhoneSetup'
import Step6_TestAndGoLive from '../steps/Step6_TestAndGoLive'
import './OnboardingWizard.css'

const OnboardingWizard = () => {
  const navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState(1)
  const [wizardData, setWizardData] = useState<any>({})

  const steps = [
    { number: 1, title: 'Account', component: Step1_AccountCreation },
    { number: 2, title: 'Industry', component: Step2_BusinessInfo },
    { number: 3, title: 'Legal', component: Step3_LegalDisclosure },
    { number: 4, title: 'Configure AI', component: Step4_SmartCustomize },
    { number: 5, title: 'Phone Setup', component: Step5_PhoneSetup },
    { number: 6, title: 'Go Live', component: Step6_TestAndGoLive }
  ]

  const handleStepComplete = (stepNumber: number, data: any) => {
    setWizardData((prev: any) => ({
      ...prev,
      [`step${stepNumber}`]: data
    }))

    if (stepNumber < 6) {
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
    navigate('/dashboard')
  }

  return (
    <div className="onboarding-wizard">
      <div className="wizard-progress">
        <div className="progress-container">
          {steps.map((step, idx) => (
            <div key={step.number} className="progress-step">
              <div
                className={`step-circle ${
                  currentStep === step.number
                    ? 'active'
                    : currentStep > step.number
                    ? 'completed'
                    : ''
                }`}
              >
                {currentStep > step.number ? (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M13 4L6 11L3 8"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <span>{step.number}</span>
                )}
              </div>
              <span className="step-title">{step.title}</span>
              {idx < steps.length - 1 && (
                <div
                  className={`step-line ${
                    currentStep > step.number ? 'completed' : ''
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="wizard-content">
        {currentStep === 1 && (
          <Step1_AccountCreation
            onNext={(data) => handleStepComplete(1, data)}
            initialData={wizardData.step1}
          />
        )}
        {currentStep === 2 && (
          <Step2_BusinessInfo
            onNext={(data) => handleStepComplete(2, data)}
            onBack={() => handleStepBack(2)}
            initialData={wizardData.step2}
          />
        )}
        {currentStep === 3 && (
          <Step3_LegalDisclosure
            onNext={(data) => handleStepComplete(3, data)}
            onBack={() => handleStepBack(3)}
            initialData={wizardData.step3}
          />
        )}
        {currentStep === 4 && (
          <Step4_SmartCustomize
            onNext={(data) => handleStepComplete(4, data)}
            onBack={() => handleStepBack(4)}
            initialData={{
              ...wizardData.step4,
              industry: wizardData.step2?.industry
            }}
          />
        )}
        {currentStep === 5 && (
          <Step5_PhoneSetup
            onNext={(data) => handleStepComplete(5, data)}
            onBack={() => handleStepBack(5)}
            initialData={wizardData.step5}
          />
        )}
        {currentStep === 6 && (
          <Step6_TestAndGoLive
            onBack={() => handleStepBack(6)}
            onComplete={handleComplete}
            wizardData={wizardData}
          />
        )}
      </div>

      <div className="step-counter-mobile">
        Step {currentStep} of {steps.length}
      </div>
    </div>
  )
}

export default OnboardingWizard
