import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'

export default function Header() {
  const { t } = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false)
  const [industriesTimeout, setIndustriesTimeout] = useState<NodeJS.Timeout | null>(null)

  const handleIndustriesEnter = () => {
    if (industriesTimeout) {
      clearTimeout(industriesTimeout)
      setIndustriesTimeout(null)
    }
    setIsIndustriesOpen(true)
  }

  const handleIndustriesLeave = () => {
    const timeout = setTimeout(() => {
      setIsIndustriesOpen(false)
    }, 300) // 300ms delay before closing
    setIndustriesTimeout(timeout)
  }

  const handleIndustryClick = () => {
    setIsIndustriesOpen(false)
    setIsMenuOpen(false) // Close mobile menu too
  }

  const handleMobileMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
    setIsIndustriesOpen(false) // Close industries when toggling main menu
  }

  const handleNavLinkClick = () => {
    setIsMenuOpen(false) // Close mobile menu when clicking nav link
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <nav className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 flex-shrink-0" onClick={handleNavLinkClick}>
            <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">CIP</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">MeetCIP</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-cyan-600 transition-colors">
              {t('header.home')}
            </Link>
            <Link to="/pricing" className="text-gray-700 hover:text-cyan-600 transition-colors">
              {t('header.pricing')}
            </Link>
            <Link to="/features" className="text-gray-700 hover:text-cyan-600 transition-colors">
              {t('header.features')}
            </Link>

            {/* Industries Dropdown - Desktop */}
            <div 
              className="relative"
              onMouseEnter={handleIndustriesEnter}
              onMouseLeave={handleIndustriesLeave}
            >
              <button className="flex items-center text-gray-700 hover:text-cyan-600 transition-colors">
                {t('header.industries')}
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isIndustriesOpen && (
                <div className="absolute top-full left-0 mt-2 min-w-80 w-auto max-w-md bg-white rounded-lg shadow-xl py-2 border border-gray-100">
                  {/* Emergency Services */}
                  <div className="px-4 py-2">
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      {t('header.industriesDropdown.emergencyServices')}
                    </div>
                    <Link
                      to="/industries/water-fire-restoration"
                      className="block px-2 py-2 text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 rounded transition-colors"
                      onClick={handleIndustryClick}
                    >
                      🔥 {t('header.industriesDropdown.waterFireRestoration')}
                    </Link>
                    <Link
                      to="/industries/foundation-repair"
                      className="block px-2 py-2 text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 rounded transition-colors"
                      onClick={handleIndustryClick}
                    >
                      🏗️ {t('header.industriesDropdown.foundationRepair')}
                    </Link>
                  </div>

                  <div className="border-t border-gray-100 my-2"></div>

                  {/* Home Services */}
                  <div className="px-4 py-2">
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      {t('header.industriesDropdown.homeServices')}
                    </div>
                    <Link
                      to="/industries/hvac"
                      className="block px-2 py-2 text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 rounded transition-colors"
                      onClick={handleIndustryClick}
                    >
                      ❄️ {t('header.industriesDropdown.hvac')}
                    </Link>
                    <Link
                      to="/industries/plumbing"
                      className="block px-2 py-2 text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 rounded transition-colors"
                      onClick={handleIndustryClick}
                    >
                      🚰 {t('header.industriesDropdown.plumbing')}
                    </Link>
                    <Link
                      to="/industries/electricians"
                      className="block px-2 py-2 text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 rounded transition-colors"
                      onClick={handleIndustryClick}
                    >
                      ⚡ {t('header.industriesDropdown.electricians')}
                    </Link>
                    <Link
                      to="/industries/garage-door-repair"
                      className="block px-2 py-2 text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 rounded transition-colors"
                      onClick={handleIndustryClick}
                    >
                      🚪 {t('header.industriesDropdown.garageDoor')}
                    </Link>
                  </div>

                  <div className="border-t border-gray-100 my-2"></div>

                  {/* Property Services */}
                  <div className="px-4 py-2">
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      {t('header.industriesDropdown.propertyServices')}
                    </div>
                    <Link
                      to="/industries/roofing"
                      className="block px-2 py-2 text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 rounded transition-colors"
                      onClick={handleIndustryClick}
                    >
                      🏠 {t('header.industriesDropdown.roofing')}
                    </Link>
                    <Link
                      to="/industries/concrete-leveling"
                      className="block px-2 py-2 text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 rounded transition-colors"
                      onClick={handleIndustryClick}
                    >
                      🏗️ {t('header.industriesDropdown.concreteLeveling')}
                    </Link>
                    <Link
                      to="/industries/fencing"
                      className="block px-2 py-2 text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 rounded transition-colors"
                      onClick={handleIndustryClick}
                    >
                      🪵 {t('header.industriesDropdown.fencing')}
                    </Link>
                    <Link
                      to="/industries/landscaping"
                      className="block px-2 py-2 text-gray-700 hover:text-cyan-600 rounded transition-colors"
                      onClick={handleIndustryClick}
                    >
                      🌳 {t('header.industriesDropdown.landscaping')}
                    </Link>
                  </div>

                  <div className="border-t border-gray-100 my-2"></div>

                  {/* Real Estate */}
                  <div className="px-4 py-2">
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      {t('header.industriesDropdown.realEstate')}
                    </div>
                    <Link
                      to="/industries/real-estate"
                      className="block px-2 py-2 text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 rounded transition-colors"
                      onClick={handleIndustryClick}
                    >
                      🏡 {t('header.industriesDropdown.realEstate')}
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link to="/about" className="text-gray-700 hover:text-cyan-600 transition-colors">
              {t('header.about')}
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-cyan-600 transition-colors">
              {t('header.contact')}
            </Link>
          </div>

          {/* Desktop CTAs + Language Switcher */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/demo"
              className="text-cyan-600 hover:text-cyan-700 font-medium transition-colors"
            >
              {t('header.requestDemo')}
            </Link>
            <Link
              to="/onboarding"
              className="bg-cyan-500 text-white px-6 py-2.5 rounded-lg hover:bg-cyan-600 transition-colors font-medium"
            >
              {t('header.getStarted')}
            </Link>
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button + Language Switcher */}
          <div className="flex lg:hidden items-center space-x-3">
            <LanguageSwitcher />
            <button
              onClick={handleMobileMenuToggle}
              className="p-2 text-gray-700 hover:text-cyan-600 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-100">
            <div className="pt-4 space-y-3 max-h-[calc(100vh-120px)] overflow-y-auto">
              <Link
                to="/"
                className="block text-gray-700 hover:text-cyan-600 transition-colors py-2"
                onClick={handleNavLinkClick}
              >
                {t('header.home')}
              </Link>
              <Link
                to="/pricing"
                className="block text-gray-700 hover:text-cyan-600 transition-colors py-2"
                onClick={handleNavLinkClick}
              >
                {t('header.pricing')}
              </Link>
              <Link
                to="/features"
                className="block text-gray-700 hover:text-cyan-600 transition-colors py-2"
                onClick={handleNavLinkClick}
              >
                {t('header.features')}
              </Link>

              {/* Mobile Industries Dropdown */}
              <div>
                <button
                  onClick={() => setIsIndustriesOpen(!isIndustriesOpen)}
                  className="flex items-center justify-between w-full text-gray-700 hover:text-cyan-600 transition-colors py-2"
                >
                  {t('header.industries')}
                  <svg
                    className={`w-4 h-4 transition-transform ${isIndustriesOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isIndustriesOpen && (
                  <div className="pl-4 mt-2 space-y-2 max-h-80 overflow-y-auto">
                    {/* Emergency Services */}
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      {t('header.industriesDropdown.emergencyServices')}
                    </div>
                    <Link
                      to="/industries/water-fire-restoration"
                      className="block text-sm text-gray-600 hover:text-cyan-600 py-1.5"
                      onClick={handleIndustryClick}
                    >
                      🔥 {t('header.industriesDropdown.waterFireRestoration')}
                    </Link>
                    <Link
                      to="/industries/foundation-repair"
                      className="block text-sm text-gray-600 hover:text-cyan-600 py-1.5"
                      onClick={handleIndustryClick}
                    >
                      🏗️ {t('header.industriesDropdown.foundationRepair')}
                    </Link>

                    <div className="border-t border-gray-100 my-2"></div>

                    {/* Home Services */}
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      {t('header.industriesDropdown.homeServices')}
                    </div>
                    <Link
                      to="/industries/hvac"
                      className="block text-sm text-gray-600 hover:text-cyan-600 py-1.5"
                      onClick={handleIndustryClick}
                    >
                      ❄️ {t('header.industriesDropdown.hvac')}
                    </Link>
                    <Link
                      to="/industries/plumbing"
                      className="block text-sm text-gray-600 hover:text-cyan-600 py-1.5"
                      onClick={handleIndustryClick}
                    >
                      🚰 {t('header.industriesDropdown.plumbing')}
                    </Link>
                    <Link
                      to="/industries/electricians"
                      className="block text-sm text-gray-600 hover:text-cyan-600 py-1.5"
                      onClick={handleIndustryClick}
                    >
                      ⚡ {t('header.industriesDropdown.electricians')}
                    </Link>
                    <Link
                      to="/industries/garage-door-repair"
                      className="block text-sm text-gray-600 hover:text-cyan-600 py-1.5"
                      onClick={handleIndustryClick}
                    >
                      🚪 {t('header.industriesDropdown.garageDoor')}
                    </Link>

                    <div className="border-t border-gray-100 my-2"></div>

                    {/* Property Services */}
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      {t('header.industriesDropdown.propertyServices')}
                    </div>
                    <Link
                      to="/industries/roofing"
                      className="block text-sm text-gray-600 hover:text-cyan-600 py-1.5"
                      onClick={handleIndustryClick}
                    >
                      🏠 {t('header.industriesDropdown.roofing')}
                    </Link>
                    <Link
                      to="/industries/concrete-leveling"
                      className="block text-sm text-gray-600 hover:text-cyan-600 py-1.5"
                      onClick={handleIndustryClick}
                    >
                      🏗️ {t('header.industriesDropdown.concreteLeveling')}
                    </Link>
                    <Link
                      to="/industries/fencing"
                      className="block text-sm text-gray-600 hover:text-cyan-600 py-1.5"
                      onClick={handleIndustryClick}
                    >
                      🪵 {t('header.industriesDropdown.fencing')}
                    </Link>
                    <Link
                      to="/industries/landscaping"
                      className="block text-sm text-gray-600 hover:text-cyan-600 py-1.5"
                      onClick={handleIndustryClick}
                    >
                      🌳 {t('header.industriesDropdown.landscaping')}
                    </Link>

                    <div className="border-t border-gray-100 my-2"></div>

                    {/* Real Estate */}
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      {t('header.industriesDropdown.realEstate')}
                    </div>
                    <Link
                      to="/industries/real-estate"
                      className="block text-sm text-gray-600 hover:text-cyan-600 py-1.5"
                      onClick={handleIndustryClick}
                    >
                      🏡 {t('header.industriesDropdown.realEstate')}
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/about"
                className="block text-gray-700 hover:text-cyan-600 transition-colors py-2"
                onClick={handleNavLinkClick}
              >
                {t('header.about')}
              </Link>
              <Link
                to="/contact"
                className="block text-gray-700 hover:text-cyan-600 transition-colors py-2"
                onClick={handleNavLinkClick}
              >
                {t('header.contact')}
              </Link>

              {/* Mobile CTAs */}
              <div className="pt-4 space-y-3 border-t border-gray-100 mt-4">
                <Link
                  to="/demo"
                  className="block text-center text-cyan-600 hover:text-cyan-700 font-medium transition-colors py-2"
                  onClick={handleNavLinkClick}
                >
                  {t('header.requestDemo')}
                </Link>
                <Link
                  to="/onboarding"
                  className="block text-center bg-cyan-500 text-white px-6 py-3 rounded-lg hover:bg-cyan-600 transition-colors font-medium"
                  onClick={handleNavLinkClick}
                >
                  {t('header.getStarted')}
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}