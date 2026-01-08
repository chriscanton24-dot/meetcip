import { Link } from 'react-router-dom'

export default function RealEstate() {
  return (
    <div>
      <div className="gradient-mesh noise-overlay">
        <div className="section-container text-center">
          <div className="text-6xl mb-6">🏡</div>
          <h1 className="heading-xl text-primary mb-6">AI Phone Answering for Real Estate Agents</h1>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
            Never miss a buyer call. Respond instantly to property inquiries. Capture $5-15k commission opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/demo" className="btn-primary">Request Demo</Link>
            <Link to="/pricing" className="btn-secondary">View Pricing ($169/month)</Link>
          </div>
        </div>
      </div>

      <div className="section-container bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-md text-primary mb-8 text-center">The Real Estate Problem</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-red-700 mb-3">❌ Without MeetCIP</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Miss buyer calls during showings</li>
                <li>• Lose $10k+ commissions to faster-responding agents</li>
                <li>• Can't track which properties generate most interest</li>
                <li>• Struggle with after-hours buyer inquiries</li>
                <li>• Buyers frustrated by voicemail</li>
              </ul>
            </div>
            <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-green-700 mb-3">✅ With MeetCIP</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Answer every buyer call in 2-4 seconds</li>
                <li>• Capture leads while competitors send to voicemail</li>
                <li>• Track property-specific inquiry volume</li>
                <li>• 24/7 availability builds trust with buyers</li>
                <li>• Professional presence for your brand</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-surface">
        <div className="section-container">
          <h2 className="heading-md text-primary mb-12 text-center">Real Estate Package - $169/month</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '🏠', title: 'Property Inquiry Routing', description: 'AI identifies which property the buyer is calling about and captures details' },
              { icon: '📅', title: 'Showing Scheduler', description: 'Books property showings directly into your calendar with buyer contact info' },
              { icon: '💰', title: 'Buyer Qualification', description: 'Asks pre-approval status, timeline, budget, must-haves to qualify leads' },
              { icon: '📍', title: 'Neighborhood Questions', description: 'Provides school district, walkability, amenities info you\'ve pre-loaded' },
              { icon: '🏦', title: 'Financing Pre-Qualification', description: 'Identifies cash vs. financed buyers, connects to preferred lenders' },
              { icon: '📊', title: 'Lead Tracker Dashboard', description: 'Shows property-specific interest, buyer follow-ups, showing conversions' }
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

      <div className="bg-gradient-to-br from-accent to-accent-dark text-white">
        <div className="section-container">
          <h2 className="heading-md text-white mb-8 text-center">ROI: One Extra Sale Pays for a Year</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
              <div className="text-4xl font-bold mb-2">Starter Home</div>
              <div className="text-xl mb-4">$250k @ 3% = $7,500</div>
              <div className="text-sm opacity-90">Annual Cost: $2,028</div>
              <div className="text-2xl font-bold mt-4 text-yellow-300">ROI: 370%</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border-2 border-yellow-300">
              <div className="text-4xl font-bold mb-2">Mid-Range Home</div>
              <div className="text-xl mb-4">$500k @ 3% = $15,000</div>
              <div className="text-sm opacity-90">Annual Cost: $2,028</div>
              <div className="text-2xl font-bold mt-4 text-yellow-300">ROI: 740%</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
              <div className="text-4xl font-bold mb-2">Luxury Home</div>
              <div className="text-xl mb-4">$1M+ @ 3% = $30,000+</div>
              <div className="text-sm opacity-90">Annual Cost: $2,028</div>
              <div className="text-2xl font-bold mt-4 text-yellow-300">ROI: 1,480%</div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-container bg-white text-center">
        <h2 className="heading-md text-primary mb-6">Ready to Stop Missing Buyer Calls?</h2>
        <div className="bg-surface rounded-3xl p-8 max-w-2xl mx-auto border-2 border-accent shadow-xl mb-8">
          <div className="text-5xl font-bold text-accent mb-2">$169/month</div>
          <div className="text-xl text-gray-600 mb-6">Real Estate Package • 300 calls included</div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/onboarding" className="btn-primary text-lg">Start Free Trial</Link>
          <Link to="/demo" className="btn-secondary text-lg">Schedule Demo</Link>
        </div>
      </div>
    </div>
  )
}
