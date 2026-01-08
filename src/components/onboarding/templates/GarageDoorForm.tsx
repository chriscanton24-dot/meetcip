import { useState } from 'react'
import './IndustryForm.css'

interface GarageDoorFormProps {
  formData: any
  setFormData: (data: any) => void
  onSubmit: (data: any) => void
  onBack: () => void
}

const GarageDoorForm: React.FC<GarageDoorFormProps> = ({ formData, setFormData, onSubmit, onBack }) => {
  const [businessName, setBusinessName] = useState(formData.business_name || '')
  const [businessAddress, setBusinessAddress] = useState(formData.business_address || '')
  const [businessEmail, setBusinessEmail] = useState(formData.business_email || '')
  const [businessPhone, setBusinessPhone] = useState(formData.business_phone || '')
  const [services, setServices] = useState<string[]>(formData.services || [])
  const [serviceTypes, setServiceTypes] = useState<string[]>(formData.service_types || ['residential'])
  const [coverageAreas, setCoverageAreas] = useState(formData.coverage_areas || '')
  const [serviceCallFee, setServiceCallFee] = useState(formData.service_call_fee || '89')
  const [afterHoursFee, setAfterHoursFee] = useState(formData.after_hours_fee || '139')
  const [emergency24x7, setEmergency24x7] = useState(formData.emergency_24x7 ?? true)
  const [customQA, setCustomQA] = useState<Array<{question: string, answer: string}>>(
    formData.custom_qa || []
  )

  const availableServices = [
    'Garage Door Repair',
    'Garage Door Installation',
    'Opener Repair',
    'Opener Installation',
    'Spring Replacement',
    'Cable Replacement',
    'Roller Replacement',
    'Panel Replacement',
    'Track Repair',
    'Sensor Repair',
    'Remote Programming',
    'Emergency Service'
  ]

  const toggleService = (service: string) => {
    if (services.includes(service)) {
      setServices(services.filter(s => s !== service))
    } else {
      setServices([...services, service])
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
      business_address: businessAddress,
      business_email: businessEmail,
      business_phone: businessPhone,
      services,
      service_types: serviceTypes,
      coverage_areas: areasArray,
      pricing: {
        service_call: parseInt(serviceCallFee) || 89,
        after_hours: parseInt(afterHoursFee) || 139
      },
      emergency_available: emergency24x7,
      custom_qa: validQA
    }

    onSubmit(data)
  }

  const isValid = 
    businessName.trim() && 
    businessAddress.trim() && 
    businessEmail.trim() && 
    businessPhone.trim() && 
    services.length > 0 && 
    serviceTypes.length > 0 &&
    coverageAreas.trim()

  return (
    <div className="industry-form">
      <div className="form-header">
        <div className="form-icon">🚪</div>
        <h2>Garage Door Business Configuration</h2>
        <p className="form-subtitle">
          Tell us about your garage door business, and we'll configure your AI to handle calls perfectly.
        </p>
      </div>

      <div className="form-section">
        <label className="form-label required">Business Name</label>
        <input
          type="text"
          className="form-input"
          placeholder="e.g., ABC Garage Door Services"
          value={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
        />
      </div>

      <div className="form-section">
        <label className="form-label required">Business Address</label>
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
              placeholder="e.g., info@abcgaragedoor.com"
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
        <p className="form-hint">What type of properties do you service?</p>
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
        <label className="form-label required">Services Offered</label>
        <p className="form-hint">Select all services you provide (AI will mention these)</p>
        <div className="checkbox-grid">
          {availableServices.map(service => (
            <label key={service} className="checkbox-item">
              <input
                type="checkbox"
                checked={services.includes(service)}
                onChange={() => toggleService(service)}
              />
              <span>{service}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="form-section">
        <label className="form-label required">Coverage Areas</label>
        <p className="form-hint">List cities/neighborhoods separated by commas</p>
        <textarea
          className="form-textarea"
          placeholder="e.g., San Antonio, Stone Oak, Alamo Heights, Leon Valley, Helotes"
          rows={3}
          value={coverageAreas}
          onChange={(e) => setCoverageAreas(e.target.value)}
        />
      </div>

      <div className="form-section">
        <label className="form-label">Pricing</label>
        <div className="form-row">
          <div className="form-col">
            <label className="form-sublabel">Service Call Fee</label>
            <div className="input-group">
              <span className="input-prefix">$</span>
              <input
                type="number"
                className="form-input"
                value={serviceCallFee}
                onChange={(e) => setServiceCallFee(e.target.value)}
              />
            </div>
          </div>
          <div className="form-col">
            <label className="form-sublabel">After-Hours Fee</label>
            <div className="input-group">
              <span className="input-prefix">$</span>
              <input
                type="number"
                className="form-input"
                value={afterHoursFee}
                onChange={(e) => setAfterHoursFee(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="form-section">
        <label className="form-label">Availability</label>
        <label className="toggle-item">
          <input
            type="checkbox"
            checked={emergency24x7}
            onChange={(e) => setEmergency24x7(e.target.checked)}
          />
          <span>24/7 Emergency Service Available</span>
        </label>
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
              placeholder="Question (e.g., Do you install smart openers?)"
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

export default GarageDoorForm