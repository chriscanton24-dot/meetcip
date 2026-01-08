export default function Features() {
  const features = [
    {
      icon: '🤖',
      title: 'AI-Powered Answering',
      description: 'Natural conversations that sound human, available instantly 24/7/365'
    },
    {
      icon: '🌍',
      title: 'Bilingual Support',
      description: 'Fluent in English and Spanish, automatically detects caller language'
    },
    {
      icon: '📝',
      title: 'Call Logging & Transcripts',
      description: 'Every call recorded, transcribed, and searchable in your dashboard'
    },
    {
      icon: '🎯',
      title: 'Lead Qualification',
      description: 'Smart questions to prioritize high-value opportunities automatically'
    },
    {
      icon: '📧',
      title: 'Instant Notifications',
      description: 'SMS and email alerts when important calls require your attention'
    },
    {
      icon: '📅',
      title: 'Appointment Scheduling',
      description: 'Calendar integration to book consultations directly during calls'
    },
    {
      icon: '🏭',
      title: 'Industry Templates',
      description: 'Pre-configured AI prompts for 11+ industries, ready to deploy'
    },
    {
      icon: '📊',
      title: 'Analytics Dashboard',
      description: 'Track call volume, response times, and conversion metrics'
    },
    {
      icon: '🔗',
      title: 'CRM Integration',
      description: 'Connect with your existing tools for seamless workflow'
    },
    {
      icon: '🎨',
      title: 'Custom Training',
      description: 'Train the AI with your business details, FAQs, and procedures'
    },
    {
      icon: '🚨',
      title: 'Emergency Routing',
      description: 'Detect urgency and prioritize critical calls automatically'
    },
    {
      icon: '💬',
      title: 'Multi-Channel Support',
      description: 'Phone, voicemail, and SMS handling in one unified platform'
    }
  ]

  return (
    <div className="bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-primary mb-4">
            Everything You Need to Never Miss a Call
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional AI phone answering with all the features your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-surface rounded-2xl border-2 border-gray-100 hover:border-accent transition-all hover:shadow-lg"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-display font-bold text-primary mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Built for Scale Section */}
        <div className="mt-20 bg-gradient-to-br from-accent to-accent-dark rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl font-display font-bold mb-4">
            Built for Scale, Priced for Growth
          </h3>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            From solo entrepreneurs to enterprise teams, MeetCIP scales with your business using advanced AI infrastructure trusted by thousands of companies
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="text-4xl font-display font-bold mb-2">99.9%</div>
              <div className="text-white/80">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-4xl font-display font-bold mb-2">&lt;2s</div>
              <div className="text-white/80">Average Response Time</div>
            </div>
            <div>
              <div className="text-4xl font-display font-bold mb-2">24/7</div>
              <div className="text-white/80">Always Available</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}