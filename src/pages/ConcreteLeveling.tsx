import { Link } from 'react-router-dom'

export default function ConcreteLeveling() {
  return (
    <div>
      <div className="gradient-mesh noise-overlay">
        <div className="section-container text-center">
          <div className="text-6xl mb-6">🛣️</div>
          <h1 className="heading-xl text-primary mb-6">AI Phone Answering for Concrete Leveling</h1>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
            Qualify high-ticket concrete leveling projects. Educate customers on mudjacking vs. polyfoam.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/demo" className="btn-primary">Request Demo</Link>
            <Link to="/pricing" className="btn-secondary">View Pricing ($179/month)</Link>
          </div>
        </div>
      </div>

      <div className="bg-surface">
        <div className="section-container">
          <h2 className="heading-md text-primary mb-12 text-center">Concrete Leveling Package - $179/month</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '🏗️', title: 'Surface Type Identification', description: 'Classifies driveways, sidewalks, patios, garage floors, pool decks' },
              { icon: '📏', title: 'Severity Assessment', description: 'Measures severity: minor settling, trip hazard, major void, safety concern' },
              { icon: '🔬', title: 'Method Education', description: 'Explains mudjacking vs. polyfoam injection based on situation' },
              { icon: '💰', title: 'Project Sizing', description: 'Estimates square footage and provides ballpark pricing ranges' },
              { icon: '⚠️', title: 'Safety Hazard Detection', description: 'Flags trip hazards, water pooling, structural concerns requiring urgency' },
              { icon: '📊', title: 'Project Tracker', description: 'Dashboard shows estimate scheduling, project value, conversion tracking' }
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
          <div className="text-5xl font-bold text-accent mb-2">$179/month</div>
          <div className="text-xl text-gray-600 mb-6">Concrete Leveling Package • 300 calls included</div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/onboarding" className="btn-primary text-lg">Start Free Trial</Link>
        </div>
      </div>
    </div>
  )
}
