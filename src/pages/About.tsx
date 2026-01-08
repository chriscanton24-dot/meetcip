export default function About() {
  return (
    <div>
      <div className="gradient-mesh noise-overlay">
        <div className="section-container text-center">
          <h1 className="heading-xl text-primary mb-6">
            Empowering Small Businesses
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We believe every business deserves enterprise-grade customer service technology.
          </p>
        </div>
      </div>

      <div className="section-container bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-md text-primary mb-6">Our Mission</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            MeetCIP was founded on a simple observation: small businesses lose thousands of dollars every year from missed calls. Whether it's after hours, during busy periods, or when staff is unavailable, every missed call is a lost opportunity.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            We created MeetCIP to help small businesses provide excellent customer service without hiring additional staff. Now any business can answer every call, 24/7—without the overhead costs or complexity.
          </p>
        </div>
      </div>

      <div className="bg-surface">
        <div className="section-container">
          <h2 className="heading-md text-center text-primary mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Accessibility',
                description: 'Advanced technology made simple and affordable for businesses of all sizes.',
                icon: '🌐'
              },
              {
                title: 'Reliability',
                description: 'Always-on service you can trust, with 99.9% uptime guaranteed.',
                icon: '✅'
              },
              {
                title: 'Innovation',
                description: 'Continuous improvement through cutting-edge AI and customer feedback.',
                icon: '🚀'
              },
              {
                title: 'Transparency',
                description: 'Clear pricing, honest communication, no hidden fees or surprises.',
                icon: '💎'
              },
              {
                title: 'Customer-First',
                description: 'Your success is our success. We grow when you grow.',
                icon: '🤝'
              },
              {
                title: 'Privacy',
                description: 'Your data is yours. Enterprise-grade security and HIPAA compliance.',
                icon: '🔒'
              }
            ].map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-accent transition-colors">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-display font-bold text-primary mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
