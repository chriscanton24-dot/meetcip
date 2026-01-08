import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [industriesOpen, setIndustriesOpen] = useState(false)
  let hoverTimeout: ReturnType<typeof setTimeout>

  const handleMouseEnter = () => {
    clearTimeout(hoverTimeout)
    setIndustriesOpen(true)
  }

  const handleMouseLeave = () => {
    hoverTimeout = setTimeout(() => {
      setIndustriesOpen(false)
    }, 300) // 300ms delay before closing
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-display font-bold text-primary">MeetCIP</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-accent transition-colors">
              Home
            </Link>
            
            <Link to="/pricing" className="text-gray-700 hover:text-accent transition-colors">
              Pricing
            </Link>
            
            <Link to="/features" className="text-gray-700 hover:text-accent transition-colors">
              Features
            </Link>
            
            {/* Industries Dropdown - FIXED HOVER */}
            <div 
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button className="text-gray-700 hover:text-accent transition-colors flex items-center">
                Industries
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {industriesOpen && (
                <div 
                  className="absolute left-0 mt-2 w-72 bg-white rounded-xl shadow-xl border-2 border-gray-100 py-2"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="px-4 py-2 text-xs font-bold text-gray-500 uppercase">Emergency Services</div>
                  <Link to="/industries/water-fire-restoration" className="block px-4 py-2 text-sm text-gray-700 hover:bg-accent/10 hover:text-accent">
                    🔥 Water/Fire Restoration
                  </Link>
                  <Link to="/industries/foundation-repair" className="block px-4 py-2 text-sm text-gray-700 hover:bg-accent/10 hover:text-accent">
                    🏗️ Foundation Repair
                  </Link>
                  
                  <div className="px-4 py-2 text-xs font-bold text-gray-500 uppercase mt-2">Home Services</div>
                  <Link to="/industries/hvac" className="block px-4 py-2 text-sm text-gray-700 hover:bg-accent/10 hover:text-accent">
                    ❄️ HVAC
                  </Link>
                  <Link to="/industries/plumbing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-accent/10 hover:text-accent">
                    🚰 Plumbing
                  </Link>
                  <Link to="/industries/electricians" className="block px-4 py-2 text-sm text-gray-700 hover:bg-accent/10 hover:text-accent">
                    ⚡ Electricians
                  </Link>
                  <Link to="/industries/garage-door-repair" className="block px-4 py-2 text-sm text-gray-700 hover:bg-accent/10 hover:text-accent">
                    🚪 Garage Door Repair
                  </Link>
                  
                  <div className="px-4 py-2 text-xs font-bold text-gray-500 uppercase mt-2">Property Services</div>
                  <Link to="/industries/roofing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-accent/10 hover:text-accent">
                    🏠 Roofing
                  </Link>
                  <Link to="/industries/concrete-leveling" className="block px-4 py-2 text-sm text-gray-700 hover:bg-accent/10 hover:text-accent">
                    🛣️ Concrete Leveling
                  </Link>
                  <Link to="/industries/fencing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-accent/10 hover:text-accent">
                    🪵 Fencing
                  </Link>
                  <Link to="/industries/landscaping" className="block px-4 py-2 text-sm text-gray-700 hover:bg-accent/10 hover:text-accent">
                    🌳 Landscaping
                  </Link>
                  
                  <div className="px-4 py-2 text-xs font-bold text-gray-500 uppercase mt-2">Real Estate</div>
                  <Link to="/industries/real-estate" className="block px-4 py-2 text-sm text-gray-700 hover:bg-accent/10 hover:text-accent">
                    🏡 Real Estate
                  </Link>
                </div>
              )}
            </div>
            
            <Link to="/about" className="text-gray-700 hover:text-accent transition-colors">
              About
            </Link>
            
            <Link to="/contact" className="text-gray-700 hover:text-accent transition-colors">
              Contact
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/demo" className="btn-secondary">
              Request Demo
            </Link>
            <Link to="/onboarding" className="btn-primary">
              Get Started Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <Link to="/" className="block py-2 text-gray-700 hover:text-accent" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
            <Link to="/pricing" className="block py-2 text-gray-700 hover:text-accent" onClick={() => setMobileMenuOpen(false)}>
              Pricing
            </Link>
            <Link to="/features" className="block py-2 text-gray-700 hover:text-accent" onClick={() => setMobileMenuOpen(false)}>
              Features
            </Link>
            <div className="py-2">
              <div className="font-bold text-gray-900 mb-2">Industries</div>
              <Link to="/industries/water-fire-restoration" className="block py-1 pl-4 text-sm text-gray-700" onClick={() => setMobileMenuOpen(false)}>
                🔥 Water/Fire Restoration
              </Link>
              <Link to="/industries/foundation-repair" className="block py-1 pl-4 text-sm text-gray-700" onClick={() => setMobileMenuOpen(false)}>
                🏗️ Foundation Repair
              </Link>
              <Link to="/industries/hvac" className="block py-1 pl-4 text-sm text-gray-700" onClick={() => setMobileMenuOpen(false)}>
                ❄️ HVAC
              </Link>
              <Link to="/industries/plumbing" className="block py-1 pl-4 text-sm text-gray-700" onClick={() => setMobileMenuOpen(false)}>
                🚰 Plumbing
              </Link>
              <Link to="/industries/electricians" className="block py-1 pl-4 text-sm text-gray-700" onClick={() => setMobileMenuOpen(false)}>
                ⚡ Electricians
              </Link>
              <Link to="/industries/garage-door-repair" className="block py-1 pl-4 text-sm text-gray-700" onClick={() => setMobileMenuOpen(false)}>
                🚪 Garage Door
              </Link>
              <Link to="/industries/roofing" className="block py-1 pl-4 text-sm text-gray-700" onClick={() => setMobileMenuOpen(false)}>
                🏠 Roofing
              </Link>
              <Link to="/industries/concrete-leveling" className="block py-1 pl-4 text-sm text-gray-700" onClick={() => setMobileMenuOpen(false)}>
                🛣️ Concrete
              </Link>
              <Link to="/industries/fencing" className="block py-1 pl-4 text-sm text-gray-700" onClick={() => setMobileMenuOpen(false)}>
                🪵 Fencing
              </Link>
              <Link to="/industries/landscaping" className="block py-1 pl-4 text-sm text-gray-700" onClick={() => setMobileMenuOpen(false)}>
                🌳 Landscaping
              </Link>
              <Link to="/industries/real-estate" className="block py-1 pl-4 text-sm text-gray-700" onClick={() => setMobileMenuOpen(false)}>
                🏡 Real Estate
              </Link>
            </div>
            <Link to="/about" className="block py-2 text-gray-700 hover:text-accent" onClick={() => setMobileMenuOpen(false)}>
              About
            </Link>
            <Link to="/contact" className="block py-2 text-gray-700 hover:text-accent" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>
            <div className="mt-4 space-y-2">
              <Link to="/demo" className="block w-full text-center py-2 px-4 btn-secondary" onClick={() => setMobileMenuOpen(false)}>
                Request Demo
              </Link>
              <Link to="/onboarding" className="block w-full text-center py-2 px-4 btn-primary" onClick={() => setMobileMenuOpen(false)}>
                Get Started Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}