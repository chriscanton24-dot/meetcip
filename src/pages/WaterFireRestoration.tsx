import { Link } from 'react-router-dom'

export default function WaterFireRestoration() {
  return (
    <div>
      {/* Hero Section */}
      <div className="gradient-mesh noise-overlay">
        <div className="section-container text-center">
          <div className="text-6xl mb-6">🔥</div>
          <h1 className="heading-xl text-primary mb-6">
            AI Phone Answering for Water & Fire Restoration
          </h1>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
            Handle 24/7 emergencies without 24/7 staff. Never miss a $2-5k disaster recovery lead.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/demo" className="btn-primary">
              Request Demo
            </Link>
            <Link to="/pricing" className="btn-secondary">
              View Pricing ($189/month)
            </Link>
          </div>
        </div>
      </div>

      {/* Problem Section */}
      <div className="section-container bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-md text-primary mb-8 text-center">The Problem: Emergency Calls Come at the Worst Times</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-red-700 mb-3">❌ Without MeetCIP</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Miss emergency calls while on job sites</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Lose $2-5k leads to competitors who answer first</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Can't prioritize emergency vs. routine calls</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Struggle with after-hours emergency coverage</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Insurance companies can't reach you for urgent claims</span>
                </li>
              </ul>
            </div>
            <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-green-700 mb-3">✅ With MeetCIP</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Answer every emergency call in 2-4 seconds, 24/7</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Capture every disaster recovery opportunity</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Auto-prioritize emergencies vs. routine inquiries</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Get instant SMS/email alerts for urgent situations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Professional, bilingual support (critical for EN/ES markets)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-surface">
        <div className="section-container">
          <h2 className="heading-md text-primary mb-12 text-center">Water/Fire Restoration Package - $189/month</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🚨',
                title: '24/7 Emergency Prioritization',
                description: 'AI instantly identifies and routes urgent calls (active flooding, fire damage, mold emergency) ahead of routine inquiries.'
              },
              {
                icon: '📋',
                title: 'Damage Type Classification',
                description: 'Automatically categorizes by damage type: fire, water, mold, storm, sewage. Routes to appropriate specialist.'
              },
              {
                icon: '🏥',
                title: 'Insurance Claim Assistance',
                description: 'Captures insurance company name, claim number, and adjuster contact info for seamless coordination.'
              },
              {
                icon: '📊',
                title: 'Job Tracker Dashboard',
                description: 'Track active emergencies, response times, and job status in real-time. See which calls need immediate dispatch.'
              },
              {
                icon: '🌍',
                title: 'Bilingual Support (EN/ES)',
                description: 'Seamless English/Spanish support - critical for water/fire restoration where every second counts.'
              },
              {
                icon: '📍',
                title: 'Service Area Verification',
                description: 'Instantly verifies caller is in your service area before dispatching crew, saving time and fuel costs.'
              },
              {
                icon: '⚡',
                title: 'Direct Dispatcher Routing',
                description: 'Emergency calls immediately sent to dispatch with full damage assessment and caller contact info.'
              },
              {
                icon: '📈',
                title: 'Response Time Metrics',
                description: 'Track average response time, emergency vs. standard call ratio, and conversion rates.'
              },
              {
                icon: '💼',
                title: 'Damage Assessment Intake',
                description: 'AI asks the right questions: extent of damage, water source, affected areas, immediate hazards.'
              }
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

      {/* How It Works */}
      <div className="section-container bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-md text-primary mb-12 text-center">How It Works: Emergency Call Example</h2>
          <div className="space-y-6">
            {[
              {
                step: 1,
                title: 'Emergency Call Received',
                description: 'Customer calls: "My basement is flooding right now! Water is pouring in from a burst pipe!"'
              },
              {
                step: 2,
                title: 'MeetCIP Answers Immediately',
                description: 'MeetCIP AI: "I understand this is an emergency. I\'m here to help. Can you shut off the main water valve? It\'s usually near the water heater or where the main line enters your home."'
              },
              {
                step: 3,
                title: 'Damage Assessment',
                description: 'AI asks: Location of flooding? How many rooms affected? Any electrical hazards? How deep is the water?'
              },
              {
                step: 4,
                title: 'Service Area Verified',
                description: 'AI confirms address is within your service area and estimates arrival time: "We can have a crew there within 60-90 minutes."'
              },
              {
                step: 5,
                title: 'Instant Dispatch',
                description: 'You receive SMS/email with: Customer contact, address, damage type, severity, caller\'s immediate actions taken.'
              },
              {
                step: 6,
                title: 'Job Tracked in Dashboard',
                description: 'Emergency logged in dashboard with status: ACTIVE EMERGENCY - Crew En Route. Updates in real-time.'
              }
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-4 bg-surface rounded-2xl p-6">
                <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xl">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ROI Calculator */}
      <div className="bg-gradient-to-br from-accent to-accent-dark text-white">
        <div className="section-container">
          <h2 className="heading-md text-white mb-8 text-center">ROI Calculator: What You Gain</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
              <div className="text-4xl font-bold mb-2">1 Job/Month</div>
              <div className="text-xl mb-4">Avg. $3,500 revenue</div>
              <div className="text-sm opacity-90">MeetCIP Cost: $189/month</div>
              <div className="text-2xl font-bold mt-4 text-yellow-300">ROI: 1,750%</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border-2 border-yellow-300">
              <div className="text-4xl font-bold mb-2">2 Jobs/Month</div>
              <div className="text-xl mb-4">Avg. $7,000 revenue</div>
              <div className="text-sm opacity-90">MeetCIP Cost: $189/month</div>
              <div className="text-2xl font-bold mt-4 text-yellow-300">ROI: 3,600%</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
              <div className="text-4xl font-bold mb-2">3 Jobs/Month</div>
              <div className="text-xl mb-4">Avg. $10,500 revenue</div>
              <div className="text-sm opacity-90">MeetCIP Cost: $189/month</div>
              <div className="text-2xl font-bold mt-4 text-yellow-300">ROI: 5,450%</div>
            </div>
          </div>
          <p className="text-center mt-8 text-xl">
            Pay for itself with just ONE captured emergency job per month! 💰
          </p>
        </div>
      </div>

      {/* Testimonial */}
      <div className="section-container bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-surface rounded-3xl p-8 border-2 border-accent">
            <div className="text-6xl mb-4">⭐⭐⭐⭐⭐</div>
            <p className="text-xl italic text-gray-700 mb-6">
              "We were losing thousands every month in missed emergency calls. MeetCIP answers 24/7, even when we're on job sites. The bilingual support has been a game-changer in our market. We've captured 8 additional jobs in the first month alone - that's $28,000 in revenue!"
            </p>
            <div className="font-bold text-primary">- Water Damage Restoration Company Owner</div>
            <div className="text-gray-600">Houston, TX</div>
          </div>
        </div>
      </div>

      {/* Pricing CTA */}
      <div className="bg-surface">
        <div className="section-container text-center">
          <h2 className="heading-md text-primary mb-6">Ready to Stop Missing Emergency Calls?</h2>
          <div className="bg-white rounded-3xl p-8 max-w-2xl mx-auto border-2 border-accent shadow-xl mb-8">
            <div className="text-5xl font-bold text-accent mb-2">$189/month</div>
            <div className="text-xl text-gray-600 mb-6">Water/Fire Restoration Package</div>
            <ul className="text-left space-y-2 mb-6">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-accent mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                300 calls/month included
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-accent mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                24/7 emergency call handling
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-accent mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Bilingual EN/ES support
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-accent mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Job tracker dashboard
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-accent mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                30-day money-back guarantee
              </li>
            </ul>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/onboarding" className="btn-primary text-lg">
              Get Started Now
            </Link>
            <Link to="/demo" className="btn-secondary text-lg">
              Schedule Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}