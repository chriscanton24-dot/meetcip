import { useState, FormEvent } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // TODO: Integrate with backend API or email service
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
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
            />
          </div>

          <button type="submit" className="w-full btn-primary text-lg">
            Send Message
          </button>
        </form>
      )}
    </div>
  )
}
