import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-accent to-accent-dark rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
              <span className="text-white font-bold text-lg">CIP</span>
            </div>
            <span className="font-display font-bold text-xl text-primary hidden sm:block">
              MeetCIP
            </span>
            <span className="font-display font-bold text-xl text-primary sm:hidden">CIP</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-accent transition-colors font-medium">
              Home
            </Link>
            <a href="/#features" className="text-gray-700 hover:text-accent transition-colors font-medium">
              Features
            </a>
            <Link to="/pricing" className="text-gray-700 hover:text-accent transition-colors font-medium">
              Pricing
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-accent transition-colors font-medium">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-accent transition-colors font-medium">
              Contact
            </Link>
            <Link to="/demo" className="btn-primary">
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-accent focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block px-3 py-3 text-gray-700 hover:bg-accent/5 hover:text-accent rounded-lg transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <a
              href="/#features"
              className="block px-3 py-3 text-gray-700 hover:bg-accent/5 hover:text-accent rounded-lg transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Features
            </a>
            <Link
              to="/pricing"
              className="block px-3 py-3 text-gray-700 hover:bg-accent/5 hover:text-accent rounded-lg transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <Link
              to="/about"
              className="block px-3 py-3 text-gray-700 hover:bg-accent/5 hover:text-accent rounded-lg transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-3 text-gray-700 hover:bg-accent/5 hover:text-accent rounded-lg transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/demo"
              className="block mx-3 my-2 btn-primary text-center"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
