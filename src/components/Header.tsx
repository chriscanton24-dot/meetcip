import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'

export default function Header() {
  const { t } = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavLinkClick = () => {
    setIsMenuOpen(false)
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
            <Link to="/about" className="text-gray-700 hover:text-cyan-600 transition-colors">
              {t('header.about')}
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-cyan-600 transition-colors">
              {t('header.contact')}
            </Link>
            <LanguageSwitcher />
            <Link to="/demo" className="text-cyan-600 hover:text-cyan-700 font-medium transition-colors">
              {t('header.requestDemo')}
            </Link>
            <Link
              to="/onboarding"
              className="bg-cyan-500 text-white px-6 py-2.5 rounded-lg hover:bg-cyan-600 transition-colors font-medium"
            >
              {t('header.getStarted')}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-3">
            <LanguageSwitcher />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-cyan-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-100 pt-4 space-y-1">
            <Link to="/" className="block text-gray-700 hover:text-cyan-600 transition-colors py-2" onClick={handleNavLinkClick}>
              {t('header.home')}
            </Link>
            <Link to="/pricing" className="block text-gray-700 hover:text-cyan-600 transition-colors py-2" onClick={handleNavLinkClick}>
              {t('header.pricing')}
            </Link>
            <Link to="/features" className="block text-gray-700 hover:text-cyan-600 transition-colors py-2" onClick={handleNavLinkClick}>
              {t('header.features')}
            </Link>
            <Link to="/about" className="block text-gray-700 hover:text-cyan-600 transition-colors py-2" onClick={handleNavLinkClick}>
              {t('header.about')}
            </Link>
            <Link to="/contact" className="block text-gray-700 hover:text-cyan-600 transition-colors py-2" onClick={handleNavLinkClick}>
              {t('header.contact')}
            </Link>
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
        )}
      </nav>
    </header>
  )
}
