import { Link } from 'react-router-dom'

export default function Electricians() {
  return (
    <div>
      <div className="gradient-mesh noise-overlay">
        <div className="section-container text-center">
          <div className="text-6xl mb-6">⚡</div>
          <h1 className="heading-xl text-primary mb-6">AI Phone Answering for Electricians</h1>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
            Handle electrical emergencies safely while qualifying panel upgrade leads. Never miss a high-ticket EV charger installation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/demo" className="btn-primary">Request Demo</Link>
            <Link to="/pricing" className="btn-secondary">View Pricing ($169/month)</Link>
          </div>
        </div>
      </div>

      <div className="bg-surface">
        <div className="section-container">
          <h2 className="heading-md text-primary mb-12 text-center">Electricians Package - $169/month</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '🚨', title: 'Safety-First Protocols', description: 'AI prioritizes power outages, sparking, burning smell with safety guidance' },
              { icon: '🔌', title: 'Service Classification', description: 'Routes: emergency, panel upgrades, outlets/switches, lighting, generators, EV chargers' },
              { icon: '🏠', title: 'Residential vs. Commercial', description: 'Identifies project type for appropriate pricing and scheduling' },
              { icon: '📋', title: 'Code Compliance Questions', description: 'Captures info needed for permits and code requirements' },
              { icon: '⚡', title: 'Panel Upgrade Qualification', description: 'Identifies 100A→200A upgrades, federal incentives, ROI on solar-ready panels' },
              { icon: '📊', title: 'Project Tracker', description: 'Dashboard tracks emergency calls, installation projects, permit requirements' }
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
          <div className="text-xl text-gray-600 mb-6">Electricians Package • 300 calls included</div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/onboarding" className="btn-primary text-lg">Start Free Trial</Link>
        </div>
      </div>
    </div>
  )
}
