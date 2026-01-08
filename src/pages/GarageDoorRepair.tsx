import { Link } from 'react-router-dom'

export default function GarageDoorRepair() {
  return (
    <div>
      <div className="gradient-mesh noise-overlay">
        <div className="section-container text-center">
          <div className="text-6xl mb-6">🚪</div>
          <div className="bg-yellow-400 text-primary text-sm font-bold px-4 py-2 rounded-full inline-block mb-4">
            PROMOTIONAL PRICING - LIMITED TIME!
          </div>
          <h1 className="heading-xl text-primary mb-6">AI Phone Answering for Garage Door Repair</h1>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
            Handle stuck door emergencies and capture new installation leads. Special intro pricing!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/demo" className="btn-primary">Request Demo</Link>
            <Link to="/pricing" className="btn-secondary">View Pricing ($149/month)</Link>
          </div>
        </div>
      </div>

      <div className="bg-surface">
        <div className="section-container">
          <h2 className="heading-md text-primary mb-12 text-center">Garage Door Package - $149/month (Promotional)</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '🚨', title: 'Emergency Routing', description: 'Prioritizes stuck open/closed doors, broken springs requiring immediate service' },
              { icon: '🔍', title: 'Issue Diagnosis', description: 'Identifies: spring replacement, opener problems, track alignment, cable, panel damage' },
              { icon: '🏠', title: 'Door Type Identification', description: 'Captures single/double, sectional/roll-up, residential/commercial details' },
              { icon: '📅', title: 'Appointment Scheduling', description: 'Books service calls and provides arrival time estimates' },
              { icon: '🔧', title: 'Opener Brand Tracking', description: 'Identifies Liftmaster, Chamberlain, Genie, etc. for parts ordering' },
              { icon: '📊', title: 'Project Dashboard', description: 'Tracks service calls, new installations, warranty status' }
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
        <div className="bg-surface rounded-3xl p-8 max-w-2xl mx-auto border-2 border-yellow-400 shadow-xl mb-8">
          <div className="bg-yellow-400 text-primary text-sm font-bold px-4 py-1 rounded-full inline-block mb-4">
            LIMITED TIME OFFER
          </div>
          <div className="text-5xl font-bold text-accent mb-2">$149/month</div>
          <div className="text-xl text-gray-600 mb-6">Garage Door Package • 300 calls included</div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/onboarding" className="btn-primary text-lg">Start Free Trial</Link>
        </div>
      </div>
    </div>
  )
}
