import { Link } from 'react-router-dom'

export default function HVAC() {
  return (
    <div>
      <div className="gradient-mesh noise-overlay">
        <div className="section-container text-center">
          <div className="text-6xl mb-6">❄️</div>
          <h1 className="heading-xl text-primary mb-6">AI Phone Answering for HVAC Contractors</h1>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
            Handle summer and winter rushes without hiring seasonal staff. Never miss an emergency call.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/demo" className="btn-primary">Request Demo</Link>
            <Link to="/pricing" className="btn-secondary">View Pricing ($169/month)</Link>
          </div>
        </div>
      </div>

      <div className="section-container bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-md text-primary mb-8 text-center">Built for Seasonal Surges</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '🔥', title: 'Summer AC Rush', description: 'Handle "no AC" emergencies when it\'s 100°F outside' },
              { icon: '❄️', title: 'Winter Heating Crisis', description: 'Prioritize "no heat" calls during cold snaps' },
              { icon: '🔧', title: 'Maintenance Capture', description: 'Book tune-ups and filter changes year-round' }
            ].map((item, i) => (
              <div key={i} className="bg-surface rounded-2xl p-6 text-center">
                <div className="text-5xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-surface">
        <div className="section-container">
          <h2 className="heading-md text-primary mb-12 text-center">HVAC Package - $169/month</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '🚨', title: 'Emergency vs. Scheduled', description: 'AI prioritizes "no heat/AC" over routine maintenance automatically' },
              { icon: '🏠', title: 'Equipment Identification', description: 'Identifies furnace, AC, heat pump, ductless mini-split, age, and brand' },
              { icon: '📅', title: 'Seasonal Prompts', description: 'Summer AC, winter heating, spring/fall tune-up scheduling' },
              { icon: '✅', title: 'Warranty Status Check', description: 'Captures warranty info to determine repair vs. replacement' },
              { icon: '💰', title: 'Financing Handling', description: 'Explains financing options for $5k+ replacement jobs' },
              { icon: '📊', title: 'Service Dashboard', description: 'Track emergency vs. maintenance calls, seasonal trends' }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-accent transition-colors">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-display font-bold text-primary mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section-container bg-white text-center">
        <h2 className="heading-md text-primary mb-6">Handle Seasonal Rushes Like a Pro</h2>
        <div className="bg-surface rounded-3xl p-8 max-w-2xl mx-auto border-2 border-accent shadow-xl mb-8">
          <div className="text-5xl font-bold text-accent mb-2">$169/month</div>
          <div className="text-xl text-gray-600 mb-6">HVAC Package • 300 calls included</div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/onboarding" className="btn-primary text-lg">Start Free Trial</Link>
          <Link to="/demo" className="btn-secondary text-lg">Schedule Demo</Link>
        </div>
      </div>
    </div>
  )
}
