import React, { useState } from 'react'
import './IndustrySelector.css'

interface IndustrySelectorProps {
  onIndustrySelect: (industry: string) => void
  selectedIndustry?: string
}

const IndustrySelector: React.FC<IndustrySelectorProps> = ({ 
  onIndustrySelect, 
  selectedIndustry 
}) => {
  const [industry, setIndustry] = useState(selectedIndustry || '')
  
  // Tier 1 Industries (11 total - NO MeetCIP for customers)
  const industries = [
    {
      id: 'hvac',
      name: 'HVAC',
      description: 'Heating, Cooling, Air Conditioning',
      icon: '❄️',
      popular: true
    },
    {
      id: 'plumbing',
      name: 'Plumbing',
      description: 'Plumbers, Drain Cleaning, Water Heaters',
      icon: '🚰',
      popular: true
    },
    {
      id: 'electricians',
      name: 'Electricians',
      description: 'Electrical Contractors, Panel Upgrades',
      icon: '⚡',
      popular: true
    },
    {
      id: 'garage_door',
      name: 'Garage Door',
      description: 'Garage Door Repair & Installation',
      icon: '🚪',
      popular: false
    },
    {
      id: 'water_fire_restoration',
      name: 'Water/Fire Restoration',
      description: 'Damage Restoration, Emergency Response',
      icon: '🔥',
      popular: false
    },
    {
      id: 'roofing',
      name: 'Roofing',
      description: 'Roof Repair, Replacement, Storm Damage',
      icon: '🏠',
      popular: true
    },
    {
      id: 'foundation_repair',
      name: 'Foundation Repair',
      description: 'Foundation Repair, Pier Installation',
      icon: '🏗️',
      popular: false
    },
    {
      id: 'landscaping',
      name: 'Landscaping',
      description: 'Lawn Care, Landscape Design, Tree Service',
      icon: '🌳',
      popular: false
    },
    {
      id: 'concrete_leveling',
      name: 'Concrete Leveling',
      description: 'Slab Leveling, Driveway Repair',
      icon: '🛣️',
      popular: false
    },
    {
      id: 'fencing',
      name: 'Fencing',
      description: 'Fence Installation & Repair',
      icon: '🪵',
      popular: false
    },
    {
      id: 'real_estate',
      name: 'Real Estate',
      description: 'Real Estate Agents, Property Management',
      icon: '🏡',
      popular: true
    }
  ]
  
  const handleSelect = (industryId: string) => {
    setIndustry(industryId)
    onIndustrySelect(industryId)
  }
  
  return (
    <div className="industry-selector">
      <div className="selector-header">
        <h2>Choose Your Industry</h2>
        <p className="subtitle">
          Select the option that best describes your business. 
          We'll customize your AI based on your industry.
        </p>
      </div>
      
      <div className="industry-grid">
        {industries.map((ind) => (
          <div
            key={ind.id}
            className={`industry-card ${industry === ind.id ? 'selected' : ''} ${ind.popular ? 'popular' : ''}`}
            onClick={() => handleSelect(ind.id)}
          >
            {ind.popular && <span className="popular-badge">Popular</span>}
            
            <div className="industry-icon">{ind.icon}</div>
            
            <div className="industry-info">
              <h3>{ind.name}</h3>
              <p>{ind.description}</p>
            </div>
            
            <div className="industry-checkbox">
              {industry === ind.id && (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" fill="#10b981"/>
                  <path d="M8 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              )}
            </div>
          </div>
        ))}
      </div>
      
      {industry && (
        <div className="selection-summary">
          <div className="summary-content">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="#10b981" strokeWidth="2"/>
              <path d="M8 12l2 2 4-4" stroke="#10b981" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span>
              You selected: <strong>{industries.find(i => i.id === industry)?.name}</strong>
            </span>
          </div>
          <p className="summary-note">
            Click "Next" to configure your AI for this industry.
          </p>
        </div>
      )}
    </div>
  )
}

export default IndustrySelector
