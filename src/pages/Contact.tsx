import ContactForm from '../components/ContactForm'

export default function Contact() {
  return (
    <div>
      <div className="gradient-mesh noise-overlay">
        <div className="section-container text-center">
          <h1 className="heading-xl text-primary mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions? We're here to help. We'll respond within 24 hours.
          </p>
        </div>
      </div>

      <div className="section-container bg-white">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="heading-md text-primary mb-6">Send a Message</h2>
            <ContactForm />
          </div>

          <div>
            <h2 className="heading-md text-primary mb-6">Other Ways to Reach Us</h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-1">Email</h3>
                  <p className="text-gray-600">support@meetcip.com</p>
                  <p className="text-sm text-gray-500 mt-1">Response time: Within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-1">Phone</h3>
                  <p className="text-gray-600">1-800-CIP-CALL</p>
                  <p className="text-sm text-gray-500 mt-1">Mon-Fri, 9 AM - 6 PM ET</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-1">Live Chat</h3>
                  <p className="text-gray-600">Available on dashboard</p>
                  <p className="text-sm text-gray-500 mt-1">Response: Within 5 minutes</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl border-2 border-accent/20">
              <h3 className="font-display font-bold text-primary mb-3">Schedule a Call</h3>
              <p className="text-gray-600 mb-4">
                Book a 15-minute consultation to discuss your needs.
              </p>
              <a href="#" className="btn-secondary inline-block">
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
