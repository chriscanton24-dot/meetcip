
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function PricingPage() {
  const { t } = useTranslation()
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly')

  const standardTiers = [
    {
      name: t('pricing.tiers.starter.name'),
      monthlyPrice: 59,
      annualPrice: 565,
      calls: 100,
      overage: 0.50,
      description: t('pricing.tiers.starter.description'),
      features: [
        t('pricing.tiers.starter.features.0'),
        t('pricing.tiers.starter.features.1'),
        t('pricing.tiers.starter.features.2'),
        t('pricing.tiers.starter.features.3'),
        t('pricing.tiers.starter.features.4'),
        t('pricing.tiers.starter.features.5'),
        t('pricing.tiers.starter.features.6')
      ]
    },
    {
      name: t('pricing.tiers.professional.name'),
      monthlyPrice: 149,
      annualPrice: 1430,
      calls: 300,
      overage: 0.40,
      description: t('pricing.tiers.professional.description'),
      features: [
        t('pricing.tiers.professional.features.0'),
        t('pricing.tiers.professional.features.1'),
        t('pricing.tiers.professional.features.2'),
        t('pricing.tiers.professional.features.3'),
        t('pricing.tiers.professional.features.4'),
        t('pricing.tiers.professional.features.5'),
        t('pricing.tiers.professional.features.6'),
        t('pricing.tiers.professional.features.7')
      ],
      highlighted: true
    },
    {
      name: t('pricing.tiers.business.name'),
      monthlyPrice: 269,
      annualPrice: 2588,
      calls: 500,
      overage: 0.35,
      description: t('pricing.tiers.business.description'),
      features: [
        t('pricing.tiers.business.features.0'),
        t('pricing.tiers.business.features.1'),
        t('pricing.tiers.business.features.2'),
        t('pricing.tiers.business.features.3'),
        t('pricing.tiers.business.features.4'),
        t('pricing.tiers.business.features.5'),
        t('pricing.tiers.business.features.6'),
        t('pricing.tiers.business.features.7'),
      ]
    },
    {
      name: t('pricing.tiers.enterprise.name'),
      monthlyPrice: null,
      annualPrice: null,
      calls: t('pricing.tiers.enterprise.callsUnlimited'),
      overage: null,
      description: t('pricing.tiers.enterprise.description'),
      features: [
        t('pricing.tiers.enterprise.features.0'),
        t('pricing.tiers.enterprise.features.1'),
        t('pricing.tiers.enterprise.features.2'),
        t('pricing.tiers.enterprise.features.3'),
        t('pricing.tiers.enterprise.features.4'),
        t('pricing.tiers.enterprise.features.5'),
        t('pricing.tiers.enterprise.features.6'),
        t('pricing.tiers.enterprise.features.7'),
        t('pricing.tiers.enterprise.features.8'),
        t('pricing.tiers.enterprise.features.9'),
        t('pricing.tiers.enterprise.features.10')
      ]
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <div className="gradient-mesh noise-overlay">
        <div className="section-container text-center">
          <h1 className="heading-xl text-primary mb-6">{t('pricing.heroTitle')}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {t('pricing.heroSubtitle')}
          </p>
          
          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-white rounded-full p-1 shadow-lg mb-12">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-6 py-3 rounded-full font-semibold transition-colors ${
                billingPeriod === 'monthly' 
                  ? 'bg-accent text-white' 
                  : 'text-gray-600 hover:text-accent'
              }`}
            >
              {t('pricing.monthly')}
            </button>
            <button
              onClick={() => setBillingPeriod('annual')}
              className={`px-6 py-3 rounded-full font-semibold transition-colors ${
                billingPeriod === 'annual' 
                  ? 'bg-accent text-white' 
                  : 'text-gray-600 hover:text-accent'
              }`}
            >
              {t('pricing.annual')} 
              <span className="ml-2 text-sm">({t('pricing.save20')})</span>
            </button>
          </div>
        </div>
      </div>

      {/* Standard Tiers */}
      <div className="bg-surface">
        <div className="section-container">
          <h2 className="heading-md text-primary mb-12 text-center">{t('pricing.standardTiersTitle')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {standardTiers.map((tier, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-2xl p-8 border-2 transition-all duration-300 hover:shadow-xl ${
                  tier.highlighted 
                    ? 'border-accent shadow-xl scale-105' 
                    : 'border-gray-100 hover:border-accent'
                }`}
              >
                {tier.highlighted && (
                  <div className="text-center mb-4">
                    <span className="bg-accent text-white text-sm font-bold px-4 py-1 rounded-full">
                      {t('pricing.mostPopular')}
                    </span>
                  </div>
                )}
                
                <h3 className="text-2xl font-display font-bold text-primary mb-2">{tier.name}</h3>
                <p className="text-gray-600 mb-6">{tier.description}</p>
                
                <div className="mb-6">
                  {tier.monthlyPrice ? (
                    <>
                      <div className="flex items-baseline mb-2">
                        <span className="text-5xl font-display font-bold text-accent">
                          ${billingPeriod === 'monthly' ? tier.monthlyPrice : tier.annualPrice}
                        </span>
                        <span className="text-lg text-gray-600">
                          {billingPeriod === 'monthly' ? t('pricing.perMonth') : t('pricing.perYear')}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{tier.calls} {t('pricing.callsPerMonth')}</p>
                    </>
                  ) : (
                    <div className="text-3xl font-display font-bold text-accent mb-2">
                      {t('pricing.contactUs')}
                    </div>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-sm">
                      <svg className="w-5 h-5 mt-0.5 flex-shrink-0 text-accent" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  to={tier.monthlyPrice ? "/onboarding" : "/demo"} 
                  className={`block w-full text-center py-3 px-6 rounded-xl font-bold transition-colors ${
                    tier.highlighted
                      ? 'bg-accent text-white hover:bg-accent-dark'
                      : 'bg-gray-100 text-primary hover:bg-accent hover:text-white'
                  }`}
                >
                  {tier.monthlyPrice ? t('pricing.getStarted') : t('pricing.contactSales')}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-accent to-accent-dark text-white">
        <div className="section-container text-center">
          <h2 className="heading-md text-white mb-4">{t('pricing.ctaTitle')}</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            {t('pricing.ctaSubtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/demo" className="btn-secondary inline-block bg-white text-accent hover:bg-gray-100">
              {t('header.requestDemo')}
            </Link>
            <Link to="/onboarding" className="btn-primary inline-block border-2 border-white hover:bg-white hover:text-accent">
              {t('header.getStarted')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}