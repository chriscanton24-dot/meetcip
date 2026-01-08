import { useState } from 'react'
import HVACForm from '../templates/HVACForm'
import PlumbingForm from '../templates/PlumbingForm'
import ElectriciansForm from '../templates/ElectriciansForm'
import RealEstateForm from '../templates/RealEstateForm'
import GarageDoorForm from '../templates/GarageDoorForm'
import WaterFireRestorationForm from '../templates/WaterFireRestorationForm'
import RoofingForm from '../templates/RoofingForm'
import FoundationRepairForm from '../templates/FoundationRepairForm'
import LandscapingForm from '../templates/LandscapingForm'
import ConcreteLevelingForm from '../templates/ConcreteLevelingForm'
import FencingForm from '../templates/FencingForm'
import '../templates/IndustryForm.css'

interface Step6Props {
  onNext: (data: any) => void
  onBack: () => void
  initialData?: any
}

const Step6_SmartCustomize: React.FC<Step6Props> = ({ 
  onNext, 
  onBack, 
  initialData = {} 
}) => {
  const [formData, setFormData] = useState(initialData.formData || {})
  
  const handleFormSubmit = async (industryFormData: any) => {
    try {
      // POINT TO RENDER BACKEND
      const response = await fetch('https://ai-answering-service-cloud.onrender.com/api/onboarding/smart-customize', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          business_id: localStorage.getItem('business_id') || 1,
          industry: initialData.step4?.industry || initialData.industry,
          form_data: industryFormData
        })
      })
      
      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.detail || 'Failed to configure AI')
      }
      
      const result = await response.json()
      
      onNext({
        industry: initialData.step4?.industry || initialData.industry,
        formData: industryFormData,
        generationResult: result
      })
    } catch (error: any) {
      console.error('Error configuring AI:', error)
      alert(`Failed to configure AI: ${error.message}`)
    }
  }
  
  const renderIndustryForm = () => {
    const commonProps = {
      formData,
      setFormData,
      onSubmit: handleFormSubmit,
      onBack: onBack
    }
    
    const industry = initialData.step4?.industry || initialData.industry
    
    switch (industry) {
      case 'hvac':
        return <HVACForm {...commonProps} />
      case 'plumbing':
        return <PlumbingForm {...commonProps} />
      case 'electricians':
        return <ElectriciansForm {...commonProps} />
      case 'real_estate':
        return <RealEstateForm {...commonProps} />
      case 'garage_door':
        return <GarageDoorForm {...commonProps} />
      case 'water_fire_restoration':
        return <WaterFireRestorationForm {...commonProps} />
      case 'roofing':
        return <RoofingForm {...commonProps} />
      case 'foundation_repair':
        return <FoundationRepairForm {...commonProps} />
      case 'landscaping':
        return <LandscapingForm {...commonProps} />
      case 'concrete_leveling':
        return <ConcreteLevelingForm {...commonProps} />
      case 'fencing':
        return <FencingForm {...commonProps} />
      default:
        return (
          <div className="coming-soon">
            <h3>Form coming soon for {industry}</h3>
            <p>This industry template is under development.</p>
            <button onClick={onBack}>Back</button>
          </div>
        )
    }
  }
  
  return (
    <div className="step6-container">
      {renderIndustryForm()}
    </div>
  )
}

export default Step6_SmartCustomize