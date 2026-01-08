import { Link } from 'react-router-dom'

export default function Plumbing() {
  return (
    <div>
      <div className="gradient-mesh noise-overlay">
        <div className="section-container text-center">
          <div className="text-6xl mb-6">🚰</div>
          <h1 className="heading-xl text-primary mb-6">AI Phone Answering for Plumbers</h1>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
            Prioritize emergency leaks while capturing maintenance calls. Never let a water heater replacement slip away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/demo" className="btn-primary">Request Demo</Link>
            <Link to="/pricing" className="btn-secondary">View Pricing ($169/month)</Link>
          </div>
        </div>
      </div>

      <div className="bg-surface">
        <div className="section-container">
          <h2 className="heading-md text-primary mb-12 text-center">Plumbing Package - $169/month</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '🚨', title: 'Emergency Leak Detection', description: 'Immediately identifies active leaks and provides shut-off valve guidance' },
              { icon: '🔧', title: 'Service Type Routing', description: 'Classifies: leaks, drains, water heaters, fixtures, sewer lines, gas lines' },
              { icon: '💧', title: 'Damage Mitigation', description: 'AI guides customers through emergency shut-off procedures' },
              { icon: '🏠', title: 'Water Heater Diagnostics', description: 'Captures brand, age, tank vs. tankless, symptoms for repair vs. replacement' },
              { icon: '🏢', title: 'Residential vs. Commercial', description: 'Routes commercial calls appropriately with different pricing/urgency' },
              { icon: '📊', title: 'Job Tracker', description: 'Dashboard shows emergency vs. scheduled breakdown, follow-up reminders' }
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
        <div className="bg-surface rounded-3xl p-8 max-w-2xl mx-auto border-2 border-accent shadow-xl mb-8">
          <div className="text-5xl font-bold text-accent mb-2">$169/month</div>
          <div className="text-xl text-gray-600 mb-6">Plumbing Package • 300 calls included</div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/onboarding" className="btn-primary text-lg">Start Free Trial</Link>
        </div>
      </div>
    </div>
  )
}
