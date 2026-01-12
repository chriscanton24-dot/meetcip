import { useState, FormEvent } from 'react'

export default function Demo() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    employees: '',
    callVolume: '',
    industry: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError(null)

    try {
      // Get API URL from environment variable
      const apiUrl = import.meta.env.VITE_API_URL || 'https://ai-answering-service-cloud.onrender.com'
      
      // Call the backend API
      const response = await fetch(`${apiUrl}/api/demo-request`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || null,
          company: formData.company || null,
          employees: formData.employees || null,
          callVolume: formData.callVolume || null,
          industry: formData.industry || null,
          source: 'landing_page',
          referrer: document.referrer || null,
          // Add UTM parameters if present
          utm_source: new URLSearchParams(window.location.search).get('utm_source'),
          utm_medium: new URLSearchParams(window.location.search).get('utm_medium'),
          utm_campaign: new URLSearchParams(window.location.search).get('utm_campaign'),
        })
      })

      const data = await response.json()

      if (!response.ok) {
        if (response.status === 429) {
          throw new Error('Too many requests. Please try again in an hour.')
        }
        throw new Error(data.detail || 'Failed to submit demo request')
      }

      // Success!
      console.log('Demo request submitted:', data)
      setSubmitted(true)
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        employees: '',
        callVolume: '',
        industry: ''
      })

    } catch (err) {
      console.error('Error submitting demo request:', err)
      setError(err instanceof Error ? err.message : 'An unexpected error occurred. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="section-container bg-white min-h-[600px] flex items-center justify-center">
        <div className="text-center max-w-2xl mx-auto">
          <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="heading-lg text-primary mb-4">Request Received!</h1>
          <p className="text-xl text-gray-600 mb-8">
            We'll contact you within 24 hours to schedule your demo. Check your email for confirmation!
          </p>
          <div className="bg-surface rounded-2xl p-6 border-2 border-gray-200 text-left">
            <h3 className="font-display font-bold text-primary mb-2">What's Next?</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start space-x-2">
                <span className="font-bold text-accent">1.</span>
                <span>Check your email for a confirmation message</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-bold text-accent">2.</span>
                <span>Our team will reach out within 24 hours</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-bold text-accent">3.</span>
                <span>We'll send a calendar invite for your 30-minute demo</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-bold text-accent">4.</span>
                <span>See MeetCIP in action with your specific use cases</span>
              </li>
            </ul>
          </div>
          <div className="mt-8">
            <button 
              onClick={() => setSubmitted(false)} 
              className="btn-secondary"
            >
              Submit Another Request
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="gradient-mesh noise-overlay">
        <div className="section-container text-center">
          <h1 className="heading-xl text-primary mb-6">
            See CIP in Action
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Schedule a personalized demo and discover how AI can transform your business.
          </p>
        </div>
      </div>

      <div className="section-container bg-white">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="heading-md text-primary mb-6">Request Free Demo</h2>
            
            {error && (
              <div className="mb-6 p-4 bg-red-50 border-2 border-red-200 rounded-xl">
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="font-bold text-red-900 mb-1">Error Submitting Request</h3>
                    <p className="text-red-700">{error}</p>
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-primary mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent"
                    disabled={submitting}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-primary mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent"
                    disabled={submitting}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-primary mb-2">Phone *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent"
                    disabled={submitting}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-primary mb-2">Company *</label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent"
                    disabled={submitting}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-primary mb-2">Employees</label>
                  <select
                    value={formData.employees}
                    onChange={(e) => setFormData({ ...formData, employees: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent"
                    disabled={submitting}
                  >
                    <option value="">Select...</option>
                    <option value="1-10">1-10</option>
                    <option value="11-50">11-50</option>
                    <option value="51-200">51-200</option>
                    <option value="200+">200+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-primary mb-2">Calls/Month</label>
                  <select
                    value={formData.callVolume}
                    onChange={(e) => setFormData({ ...formData, callVolume: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent"
                    disabled={submitting}
                  >
                    <option value="">Select...</option>
                    <option value="0-100">0-100</option>
                    <option value="101-500">101-500</option>
                    <option value="501-1000">501-1000</option>
                    <option value="1000+">1000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-primary mb-2">Industry</label>
                <select
                  value={formData.industry}
                  onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent"
                  disabled={submitting}
                >
                  <option value="">Select...</option>
                  <option value="emergency">Water/Fire Restoration</option>
                  <option value="foundation">Foundation Repair</option>
                  <option value="hvac">HVAC</option>
                  <option value="plumbing">Plumbing</option>
                  <option value="electricians">Electricians</option>
                  <option value="garage">Garage Door Repair</option>
                  <option value="roofing">Roofing</option>
                  <option value="concrete">Concrete Leveling</option>
                  <option value="fencing">Fencing</option>
                  <option value="landscaping">Landscaping</option>
                  <option value="realestate">Real Estate</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <button 
                type="submit" 
                className="w-full btn-primary text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={submitting}
              >
                {submitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </span>
                ) : 'Request Demo'}
              </button>
              
              <p className="text-sm text-gray-500 text-center">
                By submitting this form, you agree to our <a href="/terms" className="text-accent hover:underline">Terms of Service</a> and <a href="/privacy" className="text-accent hover:underline">Privacy Policy</a>.
              </p>
            </form>
          </div>

          <div>
            <h3 className="text-2xl font-display font-bold text-primary mb-6">What You'll See</h3>
            <div className="space-y-4">
              {[
                {
                  title: 'Live Call Simulation',
                  description: 'Watch AI handle real scenarios in real-time'
                },
                {
                  title: 'Dashboard Walkthrough',
                  description: 'Manage calls, view transcripts, track analytics'
                },
                {
                  title: 'Custom Configuration',
                  description: 'Learn to train AI with your business info'
                },
                {
                  title: 'Integration Options',
                  description: 'Explore calendar sync and CRM connections'
                },
                {
                  title: 'Pricing & Setup',
                  description: 'Get answers and choose your plan'
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-surface rounded-2xl border-2 border-gray-100">
                  <div className="w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-br from-accent to-accent-dark text-white rounded-2xl">
              <h4 className="font-display font-bold mb-2">Demo Details</h4>
              <p className="text-white/90 mb-4">30 minutes • Live with our team • No obligations</p>
              <div className="flex items-center space-x-2 text-sm">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>30-day money-back guarantee on all plans</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}