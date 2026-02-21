import { Link } from 'react-router-dom'

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '$49',
      period: '/month',
      description: 'For Small Businesses',
      features: [
        '24/7 call answering',
        'Up to 300 calls/month',
        'English + Spanish',
        'Detailed call summaries',
        'Email notifications',
        'Basic customization'
      ],
      highlighted: false
    },
    {
      name: 'Pro',
      price: '$149',
      period: '/month',
      description: 'For Growing Teams',
      features: [
        'Up to 1,000 calls/month',
        '24/7 call answering',
        'English + Spanish',
        'Complete call logs',
        'Advanced customization',
        'Priority support',
        'Calendar integration'
      ],
      highlighted: true
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'For Agencies & Multi-Locations',
      features: [
        'Unlimited calls',
        'Multi-location support',
        'Priority support',
        'Concierge setup',
        'Dedicated account manager',
        'Custom integrations',
        'Advanced reporting'
      ],
      highlighted: false
    }
  ]

  return (
    <div className="bg-surface">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-primary mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your business. Cancel anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-3xl p-8 transition-all duration-300 ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-accent to-accent-dark text-white shadow-2xl scale-105 border-4 border-accent'
                  : 'bg-white text-gray-900 border-2 border-gray-200 hover:border-accent hover:shadow-xl'
              }`}
            >
              {plan.highlighted && (
                <div className="text-center mb-4">
                  <span className="bg-white text-accent text-sm font-bold px-4 py-1 rounded-full">
                    MOST POPULAR
                  </span>
                </div>
              )}
              <h3 className={`text-2xl font-display font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-primary'}`}>
                {plan.name}
              </h3>
              <div className="mb-4">
                <span className={`text-6xl font-display font-bold ${plan.highlighted ? 'text-white' : 'text-primary'}`}>
                  {plan.price}
                </span>
                <span className={`text-lg ${plan.highlighted ? 'text-white/80' : 'text-gray-600'}`}>
                  {plan.period}
                </span>
              </div>
              <p className={`mb-6 ${plan.highlighted ? 'text-white/90' : 'text-gray-600'}`}>
                {plan.description}
              </p>
              <Link
                to="/demo"
                className={`block w-full text-center py-3 px-6 rounded-xl font-bold transition-all duration-200 mb-6 ${
                  plan.highlighted
                    ? 'bg-white text-accent hover:bg-gray-100 hover:scale-105'
                    : 'bg-accent text-white hover:bg-accent-dark hover:scale-105'
                }`}
              >
                Get Started
              </Link>
              <ul className="space-y-3">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <svg
                      className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                        plan.highlighted ? 'text-white' : 'text-accent'
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
                    <span className={plan.highlighted ? 'text-white/90' : 'text-gray-600'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
