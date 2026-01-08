import { Link } from 'react-router-dom'

export default function Roofing() {
  return (
    <div>
      <div className="gradient-mesh noise-overlay">
        <div className="section-container text-center">
          <div className="text-6xl mb-6">🏠</div>
          <h1 className="heading-xl text-primary mb-6">AI Phone Answering for Roofing Contractors</h1>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
            Never miss a $15k+ insurance claim opportunity. Capture storm damage leads before competitors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/demo" className="btn-primary">Request Demo</Link>
            <Link to="/pricing" className="btn-secondary">View Pricing ($169/month)</Link>
          </div>
        </div>
      </div>

      <div className="bg-surface">
        <div className="section-container">
          <h2 className="heading-md text-primary mb-12 text-center">Roofing Package - $169/month</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '⛈️', title: 'Storm Damage Priority', description: 'AI identifies and prioritizes storm damage calls after hail, wind, tornado events' },
              { icon: '🏠', title: 'Roof Type Identification', description: 'Captures: asphalt shingle, metal, tile, flat, age, layers, and current condition' },
              { icon: '📋', title: 'Insurance Claim Questions', description: 'Gathers insurance company, policy details, adjuster contact for seamless claims' },
              { icon: '📅', title: 'Free Inspection Scheduling', description: 'Books free roof inspections and sends confirmation to homeowner' },
              { icon: '💰', title: 'Material Options Info', description: 'Educates on architectural vs. 3-tab, impact-resistant, energy-efficient options' },
              { icon: '📊', title: 'Lead Tracker Dashboard', description: 'Tracks inspections scheduled, estimates given, insurance vs. retail jobs' }
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
          <div className="text-xl text-gray-600 mb-6">Roofing Package • 300 calls included</div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/onboarding" className="btn-primary text-lg">Start Free Trial</Link>
        </div>
      </div>
    </div>
  )
}
