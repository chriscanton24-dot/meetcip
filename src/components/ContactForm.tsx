import { useState, FormEvent } from 'react'
import { useAnalytics } from './AnalyticsProvider'

export default function ContactForm() {
  // BUILD-WEB-ANALYTICS-0002-contact-form-events + BUILD-WEB-FORM-0001-contact-form-backend
  const { trackEvent } = useAnalytics()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    trackEvent('contact_form_started', {
      has_phone: !!formData.phone,
      has_company: !!formData.company,
    })

    setSubmitting(true)
    setError(null)

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'https://ai-answering-service-cloud.onrender.com'

      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || null,
          company: formData.company || null,
          message: formData.message,
          source: 'landing_page_contact',
          referrer: document.referrer || null,
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
        throw new Error(data.detail || 'Failed to submit contact request')
      }

      trackEvent('contact_form_success', {
        has_phone: !!formData.phone,
        has_company: !!formData.company,
      })

      setSubmitted(true)
      setFormData({ name: '', email: '', phone: '', company: '', message: '' })

    } catch (err) {
      console.error('Error submitting contact form:', err)
      trackEvent('contact_form_error', {
        error: err instanceof Error ? err.message : 'Unknown error',
      })
      setError(err instanceof Error ? err.message : 'An unexpected error occurred. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 border-2 border-gray-100">
      {submitted ? (
        <div className="text-center py-12">
          <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-3xl font-display font-bold text-primary mb-2">Thank You!</h3>
          <p className="text-gray-600 text-lg">We'll get back to you within 24 hours.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">

          {error && (
            <div className="p-4 bg-red-50 border-2 border-red-200 rounded-xl">
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="font-bold text-red-900 mb-1">Error Submitting Message</h3>
                  <p className="text-red-700">{error}</p>
                </div>
              </div>
            </div>
          )}

          <div>
            <label htmlFor="name" className="block text-sm font-bold text-primary mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent transition-all"
              placeholder="John Doe"
              disabled={submitting}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-primary mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent transition-all"
                placeholder="john@example.com"
                disabled={submitting}
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-bold text-primary mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent transition-all"
                placeholder="(555) 123-4567"
                disabled={submitting}
              />
            </div>
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-bold text-primary mb-2">
              Company Name
            </label>
            <input
              type="text"
              id="company"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent transition-all"
              placeholder="Your Company Inc."
              disabled={submitting}
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-bold text-primary mb-2">
              Message *
            </label>
            <textarea
              id="message"
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent transition-all"
              placeholder="Tell us about your business..."
              disabled={submitting}
            />
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
                Sending...
              </span>
            ) : 'Send Message'}
          </button>
        </form>
      )}
    </div>
  )
}
