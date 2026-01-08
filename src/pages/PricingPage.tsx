import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly')

  const standardTiers = [
    {
      name: 'Starter',
      monthlyPrice: 49,
      annualPrice: 470,
      calls: 100,
      overage: 0.50,
      description: 'Perfect for solo entrepreneurs',
      features: [
        'AI Phone Answering 24/7',
        'Up to 100 calls/month',
        'Call logging & transcripts',
        'Email notifications',
        'Basic knowledge base',
        '1 phone number included',
        'Email support',
        '2-4 second response time'
      ]
    },
    {
      name: 'Professional',
      monthlyPrice: 149,
      annualPrice: 1430,
      calls: 300,
      overage: 0.40,
      description: 'Ideal for growing businesses',
      features: [
        'Everything in Starter, plus:',
        'Up to 300 calls/month',
        'Advanced RAG knowledge base',
        'Custom AI prompts',
        'Bilingual support (EN/ES)',
        'Priority support',
        'Call analytics dashboard',
        'SMS notifications (coming soon)',
        'CRM integration ready'
      ],
      highlighted: true
    },
    {
      name: 'Business',
      monthlyPrice: 249,
      annualPrice: 2390,
      calls: 500,
      overage: 0.35,
      description: 'For high-volume operations',
      features: [
        'Everything in Professional, plus:',
        'Up to 500 calls/month',
        'Industry templates included',
        '3 phone numbers included',
        'API access',
        'Webhooks',
        'Multi-user accounts',
        'Phone support',
        'Advanced analytics',
        'Custom reporting'
      ]
    },
    {
      name: 'Enterprise',
      monthlyPrice: null,
      annualPrice: null,
      calls: 'Unlimited',
      overage: null,
      description: 'Custom solutions at scale',
      features: [
        'Everything in Business, plus:',
        'Unlimited calls',
        'Multi-location support',
        'Custom AI training',
        'Dedicated account manager',
        'White-label options',
        'Custom branding',
        '99.9% SLA guarantee',
        'Advanced integrations',
        'Priority phone support',
        'Onboarding assistance'
      ]
    }
  ]

  const industryPackages = {
    emergency: [
      {
        icon: '🔥',
        name: 'Water/Fire Restoration',
        price: 189,
        calls: 300,
        description: 'Fire restoration, water damage, mold remediation, disaster recovery',
        features: [
          '24/7 emergency call prioritization',
          'Job tracker dashboard',
          'Damage type classification',
          'Insurance claim assistance',
          'Multi-language support (EN/ES)',
          'Direct dispatcher routing',
          'Response time metrics',
          'Service area verification'
        ],
        valueProposition: 'Handle 24/7 emergencies without 24/7 staff',
        slug: 'water-fire-restoration'
      },
      {
        icon: '🏗️',
        name: 'Foundation Repair',
        price: 189,
        calls: 300,
        description: 'Foundation repair, structural specialists, basement waterproofing',
        features: [
          'Foundation-specific AI prompts',
          'Damage assessment questions',
          'Foundation type identification',
          'Advanced lead qualification',
          'Inspection tracker dashboard',
          'Free inspection scheduling',
          'Financing options info',
          'Warranty information delivery'
        ],
        valueProposition: 'Qualify $20k+ foundation repair leads automatically',
        slug: 'foundation-repair'
      }
    ],
    home: [
      {
        icon: '❄️',
        name: 'HVAC',
        price: 169,
        calls: 300,
        description: 'HVAC contractors, heating & cooling companies',
        features: [
          'HVAC-specific AI prompts',
          'Emergency vs. scheduled routing',
          'Equipment type identification',
          'Age and brand detection',
          'Seasonal service prompts',
          'Maintenance scheduling',
          'Warranty status checking',
          'Financing questions handling'
        ],
        valueProposition: 'Handle summer and winter rushes without seasonal staff',
        slug: 'hvac'
      },
      {
        icon: '🚰',
        name: 'Plumbing',
        price: 169,
        calls: 300,
        description: 'Plumbers, drain cleaning, water heater specialists',
        features: [
          'Plumbing-specific AI prompts',
          'Emergency leak detection',
          'Shut-off valve guidance',
          'Service type routing',
          'Job tracker dashboard',
          'Appointment scheduling',
          'Water heater diagnostics',
          'Residential vs. commercial routing'
        ],
        valueProposition: 'Prioritize emergency leaks, capture maintenance calls',
        slug: 'plumbing'
      },
      {
        icon: '⚡',
        name: 'Electricians',
        price: 169,
        calls: 300,
        description: 'Electricians, electrical contractors, panel upgrades',
        features: [
          'Electrical-specific AI prompts',
          'Safety-first emergency protocols',
          'Service classification',
          'Project tracker',
          'Code compliance questions',
          'Permit requirement guidance',
          'Lead qualification',
          'EV charger installation tracking'
        ],
        valueProposition: 'Handle electrical emergencies safely, qualify upgrades',
        slug: 'electricians'
      },
      {
        icon: '🚪',
        name: 'Garage Door Repair',
        price: 149,
        calls: 300,
        description: 'Garage door repair & installation specialists',
        features: [
          'Garage door-specific prompts',
          'Emergency vs. standard routing',
          'Issue diagnosis (spring, opener, track)',
          'Service type routing',
          'Door type identification',
          'Project dashboard',
          'Safety inspection questions',
          'Opener brand identification'
        ],
        valueProposition: 'Handle stuck door emergencies, capture installations',
        promotional: true,
        slug: 'garage-door-repair'
      }
    ],
    property: [
      {
        icon: '🏠',
        name: 'Roofing',
        price: 169,
        calls: 300,
        description: 'Roofing contractors, storm damage, roof inspection',
        features: [
          'Roofing-specific AI prompts',
          'Storm damage prioritization',
          'Roof type identification',
          'Insurance claim questions',
          'Lead tracker dashboard',
          'Free inspection scheduling',
          'Material type questions',
          'Warranty information'
        ],
        valueProposition: 'Never miss a $15k+ insurance claim opportunity',
        slug: 'roofing'
      },
      {
        icon: '🛣️',
        name: 'Concrete Leveling',
        price: 179,
        calls: 300,
        description: 'Concrete leveling, mudjacking, polyfoam injection',
        features: [
          'Concrete-specific AI prompts',
          'Surface type identification',
          'Severity assessment',
          'Method education (mudjacking vs. poly)',
          'Project tracker',
          'Estimate scheduling',
          'Safety hazard detection',
          'Warranty questions'
        ],
        valueProposition: 'Qualify high-ticket concrete leveling projects',
        slug: 'concrete-leveling'
      },
      {
        icon: '🪵',
        name: 'Fencing',
        price: 159,
        calls: 300,
        description: 'Fence installation & repair contractors',
        features: [
          'Fencing-specific AI prompts',
          'Material type questions',
          'Property measurement questions',
          'Permit requirement guidance',
          'Project tracker',
          'Estimate scheduling',
          'HOA compliance questions',
          'Installation timeline info'
        ],
        valueProposition: 'Qualify fence projects, schedule estimates efficiently',
        slug: 'fencing'
      },
      {
        icon: '🌳',
        name: 'Landscaping',
        price: 149,
        calls: 300,
        description: 'Landscaping, lawn care, irrigation specialists',
        features: [
          'Landscaping-specific prompts',
          'Service type routing',
          'Seasonal service scheduling',
          'Property size questions',
          'Job tracker dashboard',
          'Recurring service setup',
          'Irrigation system questions',
          'Budget qualification'
        ],
        valueProposition: 'Capture seasonal rushes, book recurring services',
        promotional: true,
        slug: 'landscaping'
      }
    ],
    realestate: [
      {
        icon: '🏡',
        name: 'Real Estate',
        price: 169,
        calls: 300,
        description: 'Real estate agents, brokerages, property management',
        features: [
          'Real estate-specific prompts',
          'Property inquiry routing',
          'Showing scheduler',
          'Buyer qualification questions',
          'Lead tracker dashboard',
          'Property details capture',
          'Neighborhood questions',
          'Financing pre-qualification'
        ],
        valueProposition: 'Never miss a buyer call, respond instantly',
        slug: 'real-estate'
      }
    ]
  }

  const getPrice = (tier: typeof standardTiers[0]) => {
    if (!tier.monthlyPrice) return 'Custom'
    return billingPeriod === 'monthly' 
      ? `$${tier.monthlyPrice}` 
      : `$${Math.round(tier.annualPrice / 12)}`
  }

  const getPeriod = () => {
    return billingPeriod === 'monthly' ? '/month' : '/month*'
  }

  return (
    <div>
      <div className="gradient-mesh noise-overlay">
        <div className="section-container text-center">
          <h1 className="heading-xl text-primary mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose a standard tier or industry-specific package designed for your business
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className={`text-lg font-semibold ${billingPeriod === 'monthly' ? 'text-primary' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'annual' : 'monthly')}
              className={`relative w-16 h-8 rounded-full transition-colors ${
                billingPeriod === 'annual' ? 'bg-accent' : 'bg-gray-300'
              }`}
            >
              <div
                className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform ${
                  billingPeriod === 'annual' ? 'translate-x-8' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-lg font-semibold ${billingPeriod === 'annual' ? 'text-primary' : 'text-gray-500'}`}>
              Annual
            </span>
            {billingPeriod === 'annual' && (
              <span className="bg-accent text-white text-sm font-bold px-3 py-1 rounded-full">
                Save 20%
              </span>
            )}
          </div>
          {billingPeriod === 'annual' && (
            <p className="text-sm text-gray-600">* Billed annually</p>
          )}
        </div>
      </div>

      {/* Standard Tiers */}
      <div className="section-container bg-white">
        <h2 className="heading-md text-center text-primary mb-12">Standard Plans</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {standardTiers.map((tier, index) => (
            <div
              key={index}
              className={`rounded-3xl p-8 transition-all duration-300 ${
                tier.highlighted
                  ? 'bg-gradient-to-br from-accent to-accent-dark text-white shadow-2xl transform scale-105 border-4 border-accent'
                  : 'bg-white border-2 border-gray-200 hover:border-accent hover:shadow-xl'
              }`}
            >
              {tier.highlighted && (
                <div className="text-center mb-4">
                  <span className="bg-white text-accent text-sm font-bold px-4 py-1 rounded-full">
                    MOST POPULAR
                  </span>
                </div>
              )}
              <h3 className={`text-2xl font-display font-bold mb-2 ${tier.highlighted ? 'text-white' : 'text-primary'}`}>
                {tier.name}
              </h3>
              <div className="mb-4">
                <span className={`text-5xl font-display font-bold ${tier.highlighted ? 'text-white' : 'text-primary'}`}>
                  {getPrice(tier)}
                </span>
                {tier.monthlyPrice && (
                  <span className={`text-lg ${tier.highlighted ? 'text-white/80' : 'text-gray-600'}`}>
                    {getPeriod()}
                  </span>
                )}
              </div>
              <p className={`mb-6 text-sm ${tier.highlighted ? 'text-white/90' : 'text-gray-600'}`}>
                {tier.description}
              </p>
              <div className={`mb-6 pb-6 border-b ${tier.highlighted ? 'border-white/20' : 'border-gray-200'}`}>
                <p className={`text-sm font-semibold mb-2 ${tier.highlighted ? 'text-white' : 'text-primary'}`}>
                  {typeof tier.calls === 'number' ? `${tier.calls} calls/month` : tier.calls}
                </p>
                {tier.overage && (
                  <p className={`text-xs ${tier.highlighted ? 'text-white/70' : 'text-gray-500'}`}>
                    ${tier.overage}/call overage
                  </p>
                )}
              </div>
              <Link
                to="/onboarding"
                className={`block w-full text-center py-3 px-6 rounded-xl font-bold transition-all duration-200 mb-6 ${
                  tier.highlighted
                    ? 'bg-white text-accent hover:bg-gray-100'
                    : 'bg-accent text-white hover:bg-accent-dark'
                }`}
              >
                Get Started
              </Link>
              <ul className="space-y-3">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-2 text-sm">
                    <svg
                      className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                        tier.highlighted ? 'text-white' : 'text-accent'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className={tier.highlighted ? 'text-white/90' : 'text-gray-600'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Industry-Specific Packages */}
      <div className="bg-surface">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="heading-md text-primary mb-4">Industry-Specific Packages</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pre-configured AI templates designed for your industry. All include 300 calls/month.
            </p>
          </div>

          {/* Real Estate - MOVED TO TOP */}
          <div className="mb-16">
            <h3 className="text-3xl font-display font-bold text-primary mb-8 flex items-center justify-center">
              <span className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center mr-4">
                🏡
              </span>
              Real Estate
            </h3>
            <div className="grid md:grid-cols-1 max-w-2xl mx-auto">
              {industryPackages.realestate.map((pkg, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-accent transition-all duration-300 hover:shadow-xl">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <span className="text-5xl mr-4">{pkg.icon}</span>
                      <div>
                        <h4 className="text-2xl font-display font-bold text-primary">{pkg.name}</h4>
                        <p className="text-sm text-gray-600">{pkg.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-6">
                    <div className="flex items-baseline mb-2">
                      <span className="text-5xl font-display font-bold text-accent">${pkg.price}</span>
                      <span className="text-lg text-gray-600">/month</span>
                    </div>
                    <p className="text-sm text-gray-600">{pkg.calls} calls included</p>
                  </div>
                  <div className="bg-accent/10 rounded-xl p-4 mb-6">
                    <p className="text-sm font-semibold text-accent">{pkg.valueProposition}</p>
                  </div>
                  <ul className="grid md:grid-cols-2 gap-2 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm">
                        <svg className="w-5 h-5 mt-0.5 flex-shrink-0 text-accent" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to={`/industries/${pkg.slug}`} className="block w-full text-center py-3 px-6 bg-accent text-white rounded-xl font-bold hover:bg-accent-dark transition-colors">
                    Learn More
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Emergency Services */}
          <div className="mb-16">
            <h3 className="text-3xl font-display font-bold text-primary mb-8 flex items-center justify-center">
              <span className="w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center mr-4">
                🚨
              </span>
              Emergency Services
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {industryPackages.emergency.map((pkg, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-accent transition-all duration-300 hover:shadow-xl">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <span className="text-5xl mr-4">{pkg.icon}</span>
                      <div>
                        <h4 className="text-2xl font-display font-bold text-primary">{pkg.name}</h4>
                        <p className="text-sm text-gray-600">{pkg.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-6">
                    <div className="flex items-baseline mb-2">
                      <span className="text-5xl font-display font-bold text-accent">${pkg.price}</span>
                      <span className="text-lg text-gray-600">/month</span>
                    </div>
                    <p className="text-sm text-gray-600">{pkg.calls} calls included</p>
                  </div>
                  <div className="bg-accent/10 rounded-xl p-4 mb-6">
                    <p className="text-sm font-semibold text-accent">{pkg.valueProposition}</p>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm">
                        <svg className="w-5 h-5 mt-0.5 flex-shrink-0 text-accent" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to={`/industries/${pkg.slug}`} className="block w-full text-center py-3 px-6 bg-accent text-white rounded-xl font-bold hover:bg-accent-dark transition-colors">
                    Learn More
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Home Services */}
          <div className="mb-16">
            <h3 className="text-3xl font-display font-bold text-primary mb-8 flex items-center justify-center">
              <span className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mr-4">
                🏠
              </span>
              Home Services
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industryPackages.home.map((pkg, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-accent transition-all duration-300 hover:shadow-xl relative">
                  {pkg.promotional && (
                    <div className="absolute -top-3 -right-3 bg-yellow-400 text-primary text-xs font-bold px-3 py-1 rounded-full rotate-12 shadow-lg">
                      PROMO!
                    </div>
                  )}
                  <div className="text-center mb-4">
                    <span className="text-4xl">{pkg.icon}</span>
                    <h4 className="text-xl font-display font-bold text-primary mt-2">{pkg.name}</h4>
                  </div>
                  <div className="text-center mb-4">
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-display font-bold text-accent">${pkg.price}</span>
                      <span className="text-sm text-gray-600">/mo</span>
                    </div>
                    <p className="text-xs text-gray-600">{pkg.calls} calls</p>
                  </div>
                  <div className="bg-accent/10 rounded-lg p-3 mb-4">
                    <p className="text-xs font-semibold text-accent text-center">{pkg.valueProposition}</p>
                  </div>
                  <Link to={`/industries/${pkg.slug}`} className="block w-full text-center py-2 px-4 bg-accent text-white rounded-lg text-sm font-bold hover:bg-accent-dark transition-colors">
                    View Details
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Property Services */}
          <div className="mb-16">
            <h3 className="text-3xl font-display font-bold text-primary mb-8 flex items-center justify-center">
              <span className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mr-4">
                🏗️
              </span>
              Property Services
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industryPackages.property.map((pkg, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-accent transition-all duration-300 hover:shadow-xl relative">
                  {pkg.promotional && (
                    <div className="absolute -top-3 -right-3 bg-yellow-400 text-primary text-xs font-bold px-3 py-1 rounded-full rotate-12 shadow-lg">
                      PROMO!
                    </div>
                  )}
                  <div className="text-center mb-4">
                    <span className="text-4xl">{pkg.icon}</span>
                    <h4 className="text-xl font-display font-bold text-primary mt-2">{pkg.name}</h4>
                  </div>
                  <div className="text-center mb-4">
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-display font-bold text-accent">${pkg.price}</span>
                      <span className="text-sm text-gray-600">/mo</span>
                    </div>
                    <p className="text-xs text-gray-600">{pkg.calls} calls</p>
                  </div>
                  <div className="bg-accent/10 rounded-lg p-3 mb-4">
                    <p className="text-xs font-semibold text-accent text-center">{pkg.valueProposition}</p>
                  </div>
                  <Link to={`/industries/${pkg.slug}`} className="block w-full text-center py-2 px-4 bg-accent text-white rounded-lg text-sm font-bold hover:bg-accent-dark transition-colors">
                    View Details
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-accent to-accent-dark text-white">
        <div className="section-container text-center">
          <h2 className="heading-md text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            All plans include a 30-day money-back guarantee. Cancel anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/demo" className="btn-secondary inline-block bg-white text-accent hover:bg-gray-100">
              Request Demo
            </Link>
            <Link to="/onboarding" className="btn-primary inline-block border-2 border-white hover:bg-white hover:text-accent">
              Get Started Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}