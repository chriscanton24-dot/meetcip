
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Import existing components
import Header from './components/Header'
import Footer from './components/Footer'

// NEW: Analytics components
import GoogleAnalytics from './components/GoogleAnalytics'
import { AnalyticsProvider } from './components/AnalyticsProvider'
import CookieConsent from './components/CookieConsent'

// Pages - Existing
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Demo from './pages/Demo'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import DPA from './pages/DPA'
import Onboarding from './pages/Onboarding'

// Pages - Updated
import PricingPage from './pages/PricingPage'

// Pages - New
import FeatureComparison from './pages/FeatureComparison'

// Industry Landing Pages
import WaterFireRestoration from './pages/WaterFireRestoration'
import FoundationRepair from './pages/FoundationRepair'
import HVAC from './pages/HVAC'
import Plumbing from './pages/Plumbing'
import Electricians from './pages/Electricians'
import GarageDoorRepair from './pages/GarageDoorRepair'
import Roofing from './pages/Roofing'
import ConcreteLeveling from './pages/ConcreteLeveling'
import Fencing from './pages/Fencing'
import Landscaping from './pages/Landscaping'
import RealEstate from './pages/RealEstate'

// Get GA4 Measurement ID from environment
const GA4_MEASUREMENT_ID = import.meta.env.VITE_GA4_MEASUREMENT_ID || 'G-Y2S6TMPTC1'

// ScrollToTop component inline
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <Router>
      <AnalyticsProvider>
        <GoogleAnalytics measurementId={GA4_MEASUREMENT_ID} />
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              {/* Main Pages */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/features" element={<FeatureComparison />} />
              <Route path="/demo" element={<Demo />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/onboarding" element={<Onboarding />} />
              
              {/* Legal Pages */}
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/dpa" element={<DPA />} />
              
              {/* Industry Landing Pages */}
              <Route path="/industries/water-fire-restoration" element={<WaterFireRestoration />} />
              <Route path="/industries/foundation-repair" element={<FoundationRepair />} />
              <Route path="/industries/hvac" element={<HVAC />} />
              <Route path="/industries/plumbing" element={<Plumbing />} />
              <Route path="/industries/electricians" element={<Electricians />} />
              <Route path="/industries/garage-door-repair" element={<GarageDoorRepair />} />
              <Route path="/industries/roofing" element={<Roofing />} />
              <Route path="/industries/concrete-leveling" element={<ConcreteLeveling />} />
              <Route path="/industries/fencing" element={<Fencing />} />
              <Route path="/industries/landscaping" element={<Landscaping />} />
              <Route path="/industries/real-estate" element={<RealEstate />} />
            </Routes>
          </main>
          <Footer />
          <CookieConsent />
        </div>
      </AnalyticsProvider>
    </Router>
  )
}

export default App
