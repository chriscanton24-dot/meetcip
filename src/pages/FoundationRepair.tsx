import { Link } from 'react-router-dom'

export default function FoundationRepair() {
  return (
    <div>
      {/* Hero Section */}
      <div className="gradient-mesh noise-overlay">
        <div className="section-container text-center">
          <div className="text-6xl mb-6">🏗️</div>
          <h1 className="heading-xl text-primary mb-6">
            AI Phone Answering for Foundation Repair
          </h1>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
            Qualify $20k+ foundation repair leads automatically. Never miss a high-ticket inspection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/demo" className="btn-primary">Request Demo</Link>
            <Link to="/pricing" className="btn-secondary">View Pricing ($189/month)</Link>
          </div>
        </div>
      </div>

      {/* Problem/Solution */}
      <div className="section-container bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-md text-primary mb-8 text-center">Stop Losing $20k+ Foundation Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-red-700 mb-3">❌ Without MeetCIP</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Miss calls during inspections and estimates</li>
                <li>• Can't pre-qualify leads before scheduling</li>
                <li>• Waste time on unqualified prospects</li>
                <li>• Lose high-ticket projects to faster competitors</li>
                <li>• Manual scheduling eats up admin time</li>
              </ul>
            </div>
            <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-green-700 mb-3">✅ With MeetCIP</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Answer every call instantly, even on job sites</li>
                <li>• AI pre-qualifies leads (budget, urgency, property details)</li>
                <li>• Auto-schedule free inspections</li>
                <li>• Flag high-value leads for immediate follow-up</li>
                <li>• Track inspections and estimates in dashboard</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="bg-surface">
        <div className="section-container">
          <h2 className="heading-md text-primary mb-12 text-center">Foundation Repair Package - $189/month</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '🔍', title: 'Advanced Lead Qualification', description: 'AI asks property age, soil type, severity of damage, budget range, and homeowner vs. buyer status.' },
              { icon: '🏠', title: 'Foundation Type Identification', description: 'Automatically identifies: slab, pier & beam, basement, or crawl space foundation.' },
              { icon: '📝', title: 'Damage Assessment Questions', description: 'Captures key symptoms: cracks, sticking doors/windows, sloping floors, gaps in walls.' },
              { icon: '📅', title: 'Free Inspection Scheduling', description: 'AI schedules free inspections directly and sends confirmation to you and homeowner.' },
              { icon: '💰', title: 'Financing Options Info', description: 'Explains financing availability and payment plans to remove price objections.' },
              { icon: '🔧', title: 'Method Education', description: 'Educates callers on pier installation vs. mudjacking vs. alternatives based on their situation.' },
              { icon: '⭐', title: 'Warranty Information', description: 'Shares your warranty details and transferability for home sales - key selling point.' },
              { icon: '📊', title: 'Project Status Tracking', description: 'Dashboard shows scheduled inspections, estimates given, and high-value leads flagged.' },
              { icon: '🎯', title: 'High-Value Lead Flagging', description: 'Automatically flags leads over $15k based on damage description and property details.' }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-accent transition-colors">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-display font-bold text-primary mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ROI */}
      <div className="bg-gradient-to-br from-accent to-accent-dark text-white">
        <div className="section-container">
          <h2 className="heading-md text-white mb-8 text-center">Pay For Itself With ONE Job</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
              <div className="text-4xl font-bold mb-2">Small Project</div>
              <div className="text-xl mb-4">$8,000 avg</div>
              <div className="text-sm opacity-90">Cost: $189/month</div>
              <div className="text-2xl font-bold mt-4 text-yellow-300">ROI: 4,100%</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border-2 border-yellow-300">
              <div className="text-4xl font-bold mb-2">Medium Project</div>
              <div className="text-xl mb-4">$15,000 avg</div>
              <div className="text-sm opacity-90">Cost: $189/month</div>
              <div className="text-2xl font-bold mt-4 text-yellow-300">ROI: 7,800%</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
              <div className="text-4xl font-bold mb-2">Large Project</div>
              <div className="text-xl mb-4">$25,000+ avg</div>
              <div className="text-sm opacity-90">Cost: $189/month</div>
              <div className="text-2xl font-bold mt-4 text-yellow-300">ROI: 13,100%</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="section-container bg-white text-center">
        <h2 className="heading-md text-primary mb-6">Start Qualifying More Foundation Leads</h2>
        <div className="bg-surface rounded-3xl p-8 max-w-2xl mx-auto border-2 border-accent shadow-xl mb-8">
          <div className="text-5xl font-bold text-accent mb-2">$189/month</div>
          <div className="text-xl text-gray-600 mb-6">Foundation Repair Package</div>
          <ul className="text-left space-y-2 mb-6">
            <li className="flex items-center">
              <svg className="w-5 h-5 text-accent mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              300 calls/month • Advanced lead qualification
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-accent mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Free inspection scheduling
            </li>
          </ul>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/onboarding" className="btn-primary text-lg">Get Started Now</Link>
          <Link to="/demo" className="btn-secondary text-lg">Schedule Demo</Link>
        </div>
      </div>
    </div>
  )
}