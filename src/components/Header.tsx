// HEADER.TSX - FIXED VERSION WITH BETTER SPACING

import { Link } from 'react-router-dom'
import { useState, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'

export default function Header() {
  const { t } = useTranslation()
  const [showIndustries, setShowIndustries] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setShowIndustries(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowIndustries(false)
    }, 300) // 300ms delay before closing
  }

  const handleLinkClick = () => {
    setShowIndustries(false)
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center mr-3">
              <span className="text-white font-bold text-xl">CIP</span>
            </div>
            <span className="text-2xl font-display font-bold text-primary">MeetCIP</span>
          </Link>

          {/* Navigation - FIXED SPACING */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-accent font-medium transition-colors">
              {t('header.home')}
            </Link>
            <Link to="/pricing" className="text-gray-700 hover:text-accent font-medium transition-colors">
              {t('header.pricing')}
            </Link>
            <Link to="/features" className="text-gray-700 hover:text-accent font-medium transition-colors">
              {t('header.features')}
            </Link>
            
            {/* Industries Dropdown - FIXED SPACING */}
            <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <button className="text-gray-700 hover:text-accent font-medium transition-colors flex items-center">
                {t('header.industries')}
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {showIndustries && (
                <div className="absolute left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-4">
                  {/* EMERGENCY SERVICES */}
                  <div className="px-4 py-2">
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                      {t('header.emergencyServices')}
                    </div>
                    <Link to="/industries/water-fire-restoration" onClick={handleLinkClick} className="flex items-center py-2 hover:bg-gray-50 rounded -mx-2 px-2">
                      <span className="text-xl mr-3">🔥</span>
                      <span className="text-gray-700">Water/Fire Restoration</span>
                    </Link>
                    <Link to="/industries/foundation-repair" onClick={handleLinkClick} className="flex items-center py-2 hover:bg-gray-50 rounded -mx-2 px-2">
                      <span className="text-xl mr-3">🏗️</span>
                      <span className="text-gray-700">Foundation Repair</span>
                    </Link>
                  </div>

                  <div className="border-t border-gray-200 my-2"></div>

                  {/* HOME SERVICES */}
                  <div className="px-4 py-2">
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                      {t('header.homeServices')}
                    </div>
                    <Link to="/industries/hvac" onClick={handleLinkClick} className="flex items-center py-2 hover:bg-gray-50 rounded -mx-2 px-2">
                      <span className="text-xl mr-3">❄️</span>
                      <span className="text-gray-700">HVAC</span>
                    </Link>
                    <Link to="/industries/plumbing" onClick={handleLinkClick} className="flex items-center py-2 hover:bg-gray-50 rounded -mx-2 px-2">
                      <span className="text-xl mr-3">🚰</span>
                      <span className="text-gray-700">Plumbing</span>
                    </Link>
                    <Link to="/industries/electricians" onClick={handleLinkClick} className="flex items-center py-2 hover:bg-gray-50 rounded -mx-2 px-2">
                      <span className="text-xl mr-3">⚡</span>
                      <span className="text-gray-700">Electricians</span>
                    </Link>
                    <Link to="/industries/garage-door-repair" onClick={handleLinkClick} className="flex items-center py-2 hover:bg-gray-50 rounded -mx-2 px-2">
                      <span className="text-xl mr-3">🚪</span>
                      <span className="text-gray-700">Garage Door Repair</span>
                    </Link>
                  </div>

                  <div className="border-t border-gray-200 my-2"></div>

                  {/* PROPERTY SERVICES */}
                  <div className="px-4 py-2">
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                      {t('header.propertyServices')}
                    </div>
                    <Link to="/industries/roofing" onClick={handleLinkClick} className="flex items-center py-2 hover:bg-gray-50 rounded -mx-2 px-2">
                      <span className="text-xl mr-3">🏠</span>
                      <span className="text-gray-700">Roofing</span>
                    </Link>
                    <Link to="/industries/concrete-leveling" onClick={handleLinkClick} className="flex items-center py-2 hover:bg-gray-50 rounded -mx-2 px-2">
                      <span className="text-xl mr-3">🏗️</span>
                      <span className="text-gray-700">Concrete Leveling</span>
                    </Link>
                    <Link to="/industries/fencing" onClick={handleLinkClick} className="flex items-center py-2 hover:bg-gray-50 rounded -mx-2 px-2">
                      <span className="text-xl mr-3">🪵</span>
                      <span className="text-gray-700">Fencing</span>
                    </Link>
                    <Link to="/industries/landscaping" onClick={handleLinkClick} className="flex items-center py-2 hover:bg-gray-50 rounded -mx-2 px-2">
                      <span className="text-xl mr-3">🌳</span>
                      <span className="text-gray-700">Landscaping</span>
                    </Link>
                  </div>

                  <div className="border-t border-gray-200 my-2"></div>

                  {/* REAL ESTATE */}
                  <div className="px-4 py-2">
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                      {t('header.realEstate')}
                    </div>
                    <Link to="/industries/real-estate" onClick={handleLinkClick} className="flex items-center py-2 hover:bg-gray-50 rounded -mx-2 px-2">
                      <span className="text-xl mr-3">🏡</span>
                      <span className="text-gray-700">Real Estate</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link to="/about" className="text-gray-700 hover:text-accent font-medium transition-colors">
              {t('header.about')}
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-accent font-medium transition-colors">
              {t('header.contact')}
            </Link>
          </nav>

          {/* CTA Buttons + Language Switcher - FIXED SPACING */}
          <div className="flex items-center space-x-4">
            <Link to="/demo" className="hidden md:inline-block px-5 py-2.5 text-gray-700 hover:text-accent font-medium transition-colors">
              {t('header.requestDemo')}
            </Link>
            <Link to="/onboarding" className="hidden md:inline-block px-5 py-2.5 bg-accent text-white rounded-xl font-bold hover:bg-accent-dark transition-colors">
              {t('header.getStarted')}
            </Link>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  )
}