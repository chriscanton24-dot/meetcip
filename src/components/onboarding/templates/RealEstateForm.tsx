import { useState } from 'react'
import './IndustryForm.css'

interface RealEstateFormProps {
  formData: any
  setFormData: (data: any) => void
  onSubmit: (data: any) => void
  onBack: () => void
}

const RealEstateForm: React.FC<RealEstateFormProps> = ({ formData, setFormData, onSubmit, onBack }) => {
  const [businessName, setBusinessName] = useState(formData.business_name || '')
  const [agentName, setAgentName] = useState(formData.agent_name || '')
  const [businessAddress, setBusinessAddress] = useState(formData.business_address || '')
  const [businessEmail, setBusinessEmail] = useState(formData.business_email || '')
  const [businessPhone, setBusinessPhone] = useState(formData.business_phone || '')
  const [specializations, setSpecializations] = useState<string[]>(formData.specializations || [])
  const [serviceTypes, setServiceTypes] = useState<string[]>(formData.service_types || ['residential'])
  const [coverageAreas, setCoverageAreas] = useState(formData.coverage_areas || '')
  const [propertyTypes, setPropertyTypes] = useState<string[]>(formData.property_types || [])
  const [customQA, setCustomQA] = useState<Array<{question: string, answer: string}>>(
    formData.custom_qa || []
  )

  const availableSpecializations = [
    'Buyer Representation',
    'Seller Representation',
    'First-Time Homebuyers',
    'Investment Properties',
    'Luxury Homes',
    'Short Sales/Foreclosures',
    'Property Management',
    'Relocation Services'
  ]

  const availablePropertyTypes = [
    'Single-Family Homes',
    'Condos/Townhomes',
    'Multi-Family Properties',
    'Land/Lots',
    'New Construction',
    'Commercial Properties'
  ]

  const toggleSpecialization = (spec: string) => {
    if (specializations.includes(spec)) {
      setSpecializations(specializations.filter(s => s !== spec))
    } else {
      setSpecializations([...specializations, spec])
    }
  }

  const togglePropertyType = (type: string) => {
    if (propertyTypes.includes(type)) {
      setPropertyTypes(propertyTypes.filter(t => t !== type))
    } else {
      setPropertyTypes([...propertyTypes, type])
    }
  }

  const toggleServiceType = (type: string) => {
    if (serviceTypes.includes(type)) {
      setServiceTypes(serviceTypes.filter(t => t !== type))
    } else {
      setServiceTypes([...serviceTypes, type])
    }
  }

  const addCustomQA = () => {
    if (customQA.length < 5) {
      setCustomQA([...customQA, { question: '', answer: '' }])
    }
  }

  const updateCustomQA = (index: number, field: 'question' | 'answer', value: string) => {
    const updated = [...customQA]
    updated[index][field] = value
    setCustomQA(updated)
  }

  const removeCustomQA = (index: number) => {
    setCustomQA(customQA.filter((_, i) => i !== index))
  }

  const handleSubmit = () => {
    const areasArray = coverageAreas
      .split(',')
      .map(area => area.trim())
      .filter(area => area.length > 0)

    const validQA = customQA.filter(qa => qa.question.trim() && qa.answer.trim())

    const data = {
      business_name: businessName,
      agent_name: agentName,
      business_address: businessAddress,
      business_email: businessEmail,
      business_phone: businessPhone,
      specializations,
      property_types: propertyTypes,
      service_types: serviceTypes,
      coverage_areas: areasArray,
      custom_qa: validQA
    }

    onSubmit(data)
  }

  const isValid = 
    businessName.trim() && 
    agentName.trim() && 
    businessAddress.trim() && 
    businessEmail.trim() && 
    businessPhone.trim() && 
    specializations.length > 0 && 
    serviceTypes.length > 0 &&
    coverageAreas.trim()

  return (
    <div className="industry-form">
      <div className="form-header">
        <div className="form-icon">🏡</div>
        <h2>Real Estate Agent Configuration</h2>
        <p className="form-subtitle">
          Tell us about your real estate business, and we'll configure your AI to handle inquiries perfectly.
        </p>
      </div>

      <div className="form-section">
        <label className="form-label required">Agent/Team Name</label>
        <input
          type="text"
          className="form-input"
          placeholder="e.g., Jane Smith Real Estate"
          value={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
        />
      </div>

      <div className="form-section">
        <label className="form-label required">Primary Agent Name</label>
        <input
          type="text"
          className="form-input"
          placeholder="e.g., Jane Smith"
          value={agentName}
          onChange={(e) => setAgentName(e.target.value)}
        />
      </div>

      <div className="form-section">
        <label className="form-label required">Office Address</label>
        <input
          type="text"
          className="form-input"
          placeholder="e.g., 123 Main St, San Antonio, TX 78201"
          value={businessAddress}
          onChange={(e) => setBusinessAddress(e.target.value)}
        />
      </div>

      <div className="form-section">
        <div className="form-row">
          <div className="form-col">
            <label className="form-label required">Business Email</label>
            <input
              type="email"
              className="form-input"
              placeholder="e.g., jane@janesmith.com"
              value={businessEmail}
              onChange={(e) => setBusinessEmail(e.target.value)}
            />
          </div>
          <div className="form-col">
            <label className="form-label required">Business Phone</label>
            <input
              type="tel"
              className="form-input"
              placeholder="e.g., (210) 555-1234"
              value={businessPhone}
              onChange={(e) => setBusinessPhone(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="form-section">
        <label className="form-label required">Service Type</label>
        <p className="form-hint">What type of properties do you work with?</p>
        <div className="service-type-toggle">
          <label className="checkbox-item">
            <input
              type="checkbox"
              checked={serviceTypes.includes('residential')}
              onChange={() => toggleServiceType('residential')}
            />
            <span>Residential</span>
          </label>
          <label className="checkbox-item">
            <input
              type="checkbox"
              checked={serviceTypes.includes('commercial')}
              onChange={() => toggleServiceType('commercial')}
            />
            <span>Commercial</span>
          </label>
        </div>
      </div>

      <div className="form-section">
        <label className="form-label required">Specializations</label>
        <p className="form-hint">Select all areas of expertise (AI will mention these)</p>
        <div className="checkbox-grid">
          {availableSpecializations.map(spec => (
            <label key={spec} className="checkbox-item">
              <input
                type="checkbox"
                checked={specializations.includes(spec)}
                onChange={() => toggleSpecialization(spec)}
              />
              <span>{spec}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="form-section">
        <label className="form-label">Property Types</label>
        <p className="form-hint">What types of properties do you work with?</p>
        <div className="checkbox-grid">
          {availablePropertyTypes.map(type => (
            <label key={type} className="checkbox-item">
              <input
                type="checkbox"
                checked={propertyTypes.includes(type)}
                onChange={() => togglePropertyType(type)}
              />
              <span>{type}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="form-section">
        <label className="form-label required">Coverage Areas</label>
        <p className="form-hint">List cities/neighborhoods you serve, separated by commas</p>
        <textarea
          className="form-textarea"
          placeholder="e.g., San Antonio, Stone Oak, Alamo Heights, Leon Valley, Helotes"
          rows={3}
          value={coverageAreas}
          onChange={(e) => setCoverageAreas(e.target.value)}
        />
      </div>

      <div className="form-section">
        <label className="form-label">Custom Q&A (Optional)</label>
        <p className="form-hint">Add up to 5 custom questions your AI should answer</p>
        
        {customQA.map((qa, index) => (
          <div key={index} className="qa-pair">
            <div className="qa-header">
              <span className="qa-number">Q&A #{index + 1}</span>
              <button
                type="button"
                className="btn-remove"
                onClick={() => removeCustomQA(index)}
              >
                Remove
              </button>
            </div>
            <input
              type="text"
              className="form-input"
              placeholder="Question (e.g., What's your commission rate?)"
              value={qa.question}
              onChange={(e) => updateCustomQA(index, 'question', e.target.value)}
            />
            <textarea
              className="form-textarea"
              placeholder="Answer"
              rows={2}
              value={qa.answer}
              onChange={(e) => updateCustomQA(index, 'answer', e.target.value)}
            />
          </div>
        ))}

        {customQA.length < 5 && (
          <button type="button" className="btn-add" onClick={addCustomQA}>
            + Add Custom Q&A
          </button>
        )}
      </div>

      <div className="form-actions">
        <button type="button" className="btn-secondary" onClick={onBack}>
          Back
        </button>
        <button
          type="button"
          className="btn-primary"
          onClick={handleSubmit}
          disabled={!isValid}
        >
          Save & Continue
        </button>
      </div>
    </div>
  )
}

export default RealEstateForm
