
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function PricingPage() {
  const { t } = useTranslation()
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly')

  const standardTiers = [
    {
      name: t('pricing.tiers.starter.name'),
      monthlyPrice: 49,
      annualPrice: 470,
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
        t('pricing.tiers.starter.features.6'),
        t('pricing.tiers.starter.features.7')
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
        t('pricing.tiers.professional.features.7'),
        t('pricing.tiers.professional.features.8')
      ],
      highlighted: true
    },
    {
      name: t('pricing.tiers.business.name'),
      monthlyPrice: 249,
      annualPrice: 2390,
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
        t('pricing.tiers.business.features.8'),
        t('pricing.tiers.business.features.9')
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

  const industryPackages = {
    emergency: [
      {
        icon: '🔥',
        name: t('pricing.industries.waterFire.name'),
        price: 189,
        calls: 300,
        description: t('pricing.industries.waterFire.description'),
        features: [
          t('pricing.industries.waterFire.features.0'),
          t('pricing.industries.waterFire.features.1'),
          t('pricing.industries.waterFire.features.2'),
          t('pricing.industries.waterFire.features.3'),
          t('pricing.industries.waterFire.features.4'),
          t('pricing.industries.waterFire.features.5'),
          t('pricing.industries.waterFire.features.6'),
          t('pricing.industries.waterFire.features.7')
        ],
        valueProposition: t('pricing.industries.waterFire.valueProposition'),
        slug: 'water-fire-restoration'
      },
      {
        icon: '🏗️',
        name: t('pricing.industries.foundation.name'),
        price: 189,
        calls: 300,
        description: t('pricing.industries.foundation.description'),
        features: [
          t('pricing.industries.foundation.features.0'),
          t('pricing.industries.foundation.features.1'),
          t('pricing.industries.foundation.features.2'),
          t('pricing.industries.foundation.features.3'),
          t('pricing.industries.foundation.features.4'),
          t('pricing.industries.foundation.features.5'),
          t('pricing.industries.foundation.features.6'),
          t('pricing.industries.foundation.features.7')
        ],
        valueProposition: t('pricing.industries.foundation.valueProposition'),
        slug: 'foundation-repair'
      }
    ],
    home: [
      {
        icon: '❄️',
        name: t('pricing.industries.hvac.name'),
        price: 169,
        calls: 300,
        description: t('pricing.industries.hvac.description'),
        slug: 'hvac',
        valueProposition: t('pricing.industries.hvac.valueProposition')
      },
      {
        icon: '🚰',
        name: t('pricing.industries.plumbing.name'),
        price: 169,
        calls: 300,
        description: t('pricing.industries.plumbing.description'),
        slug: 'plumbing',
        valueProposition: t('pricing.industries.plumbing.valueProposition')
      },
      {
        icon: '⚡',
        name: t('pricing.industries.electricians.name'),
        price: 169,
        calls: 300,
        description: t('pricing.industries.electricians.description'),
        slug: 'electricians',
        valueProposition: t('pricing.industries.electricians.valueProposition')
      },
      {
        icon: '🚪',
        name: t('pricing.industries.garageDoor.name'),
        price: 149,
        calls: 300,
        description: t('pricing.industries.garageDoor.description'),
        slug: 'garage-door-repair',
        valueProposition: t('pricing.industries.garageDoor.valueProposition'),
        promotional: true
      }
    ],
    property: [
      {
        icon: '🏠',
        name: t('pricing.industries.roofing.name'),
        price: 169,
        calls: 300,
        description: t('pricing.industries.roofing.description'),
        slug: 'roofing',
        valueProposition: t('pricing.industries.roofing.valueProposition')
      },
      {
        icon: '🛣️',
        name: t('pricing.industries.concrete.name'),
        price: 179,
        calls: 300,
        description: t('pricing.industries.concrete.description'),
        slug: 'concrete-leveling',
        valueProposition: t('pricing.industries.concrete.valueProposition')
      },
      {
        icon: '🪵',
        name: t('pricing.industries.fencing.name'),
        price: 159,
        calls: 300,
        description: t('pricing.industries.fencing.description'),
        slug: 'fencing',
        valueProposition: t('pricing.industries.fencing.valueProposition')
      },
      {
        icon: '🌳',
        name: t('pricing.industries.landscaping.name'),
        price: 149,
        calls: 300,
        description: t('pricing.industries.landscaping.description'),
        slug: 'landscaping',
        valueProposition: t('pricing.industries.landscaping.valueProposition'),
        promotional: true
      }
    ],
    realestate: [
      {
        icon: '🏡',
        name: t('pricing.industries.realEstate.name'),
        price: 169,
        calls: 300,
        description: t('pricing.industries.realEstate.description'),
        slug: 'real-estate',
        valueProposition: t('pricing.industries.realEstate.valueProposition')
      }
    ]
  }

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

      {/* Industry Packages */}
      <div className="section-container bg-white">
        <div className="text-center mb-12">
          <h2 className="heading-md text-primary mb-4">{t('pricing.industryPackagesTitle')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('pricing.industryPackagesSubtitle')}
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Real Estate */}
          <div className="mb-16">
            <h3 className="text-3xl font-display font-bold text-primary mb-8 flex items-center justify-center">
              <span className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center mr-4">
                🏡
              </span>
              {t('pricing.categoryRealEstate')}
            </h3>
            <div className="grid md:grid-cols-1 gap-8 max-w-2xl mx-auto">
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
                      <span className="text-lg text-gray-600">{t('pricing.perMonth')}</span>
                    </div>
                    <p className="text-sm text-gray-600">{pkg.calls} {t('pricing.callsIncluded')}</p>
                  </div>
                  <div className="bg-accent/10 rounded-xl p-4 mb-6">
                    <p className="text-sm font-semibold text-accent">{pkg.valueProposition}</p>
                  </div>
                  <Link to={`/industries/${pkg.slug}`} className="block w-full text-center py-3 px-6 bg-accent text-white rounded-xl font-bold hover:bg-accent-dark transition-colors">
                    {t('pricing.learnMore')}
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
              {t('pricing.categoryEmergency')}
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
                      <span className="text-lg text-gray-600">{t('pricing.perMonth')}</span>
                    </div>
                    <p className="text-sm text-gray-600">{pkg.calls} {t('pricing.callsIncluded')}</p>
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
                    {t('pricing.learnMore')}
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
              {t('pricing.categoryHome')}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industryPackages.home.map((pkg, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-accent transition-all duration-300 hover:shadow-xl relative">
                  {pkg.promotional && (
                    <div className="absolute -top-3 -right-3 bg-yellow-400 text-primary text-xs font-bold px-3 py-1 rounded-full rotate-12 shadow-lg">
                      {t('pricing.promo')}
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
                    <p className="text-xs text-gray-600">{pkg.calls} {t('pricing.calls')}</p>
                  </div>
                  <div className="bg-accent/10 rounded-lg p-3 mb-4">
                    <p className="text-xs font-semibold text-accent text-center">{pkg.valueProposition}</p>
                  </div>
                  <Link to={`/industries/${pkg.slug}`} className="block w-full text-center py-2 px-4 bg-accent text-white rounded-lg text-sm font-bold hover:bg-accent-dark transition-colors">
                    {t('pricing.viewDetails')}
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
              {t('pricing.categoryProperty')}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industryPackages.property.map((pkg, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-accent transition-all duration-300 hover:shadow-xl relative">
                  {pkg.promotional && (
                    <div className="absolute -top-3 -right-3 bg-yellow-400 text-primary text-xs font-bold px-3 py-1 rounded-full rotate-12 shadow-lg">
                      {t('pricing.promo')}
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
                    <p className="text-xs text-gray-600">{pkg.calls} {t('pricing.calls')}</p>
                  </div>
                  <div className="bg-accent/10 rounded-lg p-3 mb-4">
                    <p className="text-xs font-semibold text-accent text-center">{pkg.valueProposition}</p>
                  </div>
                  <Link to={`/industries/${pkg.slug}`} className="block w-full text-center py-2 px-4 bg-accent text-white rounded-lg text-sm font-bold hover:bg-accent-dark transition-colors">
                    {t('pricing.viewDetails')}
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
