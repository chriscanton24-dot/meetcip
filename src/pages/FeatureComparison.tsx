
import { useTranslation } from 'react-i18next'
import React from 'react'

export default function FeatureComparison() {
  const { t } = useTranslation()

  const features = [
    {
      category: t('featureComparison.categories.core'),
      items: [
        { name: t('featureComparison.features.aiAnswering247'), starter: true, professional: true, business: true, enterprise: true, industry: true },
        { name: t('featureComparison.features.callLogging'), starter: true, professional: true, business: true, enterprise: true, industry: true },
        { name: t('featureComparison.features.emailNotifications'), starter: true, professional: true, business: true, enterprise: true, industry: true },
        { name: t('featureComparison.features.responseTime'), starter: true, professional: true, business: true, enterprise: true, industry: true },
        { name: t('featureComparison.features.basicKnowledgeBase'), starter: true, professional: true, business: true, enterprise: true, industry: true },
        { name: t('featureComparison.features.basicAnalytics'), starter: true, professional: true, business: true, enterprise: true, industry: true },
      ]
    },
    {
      category: t('featureComparison.categories.advancedAI'),
      items: [
        { name: t('featureComparison.features.advancedRAG'), starter: false, professional: true, business: true, enterprise: true, industry: true },
        { name: t('featureComparison.features.customPrompts'), starter: false, professional: true, business: true, enterprise: true, industry: true },
        { name: t('featureComparison.features.bilingualSupport'), starter: true, professional: true, business: true, enterprise: true, industry: true },
        { name: t('featureComparison.features.industryTemplates'), starter: false, professional: false, business: true, enterprise: true, industry: true },
        { name: t('featureComparison.features.industryDashboard'), starter: false, professional: false, business: false, enterprise: false, industry: true },
      ]
    },
    {
      category: t('featureComparison.categories.phoneManagement'),
      items: [
        { name: t('featureComparison.features.phoneNumbers'), starter: '1', professional: '1', business: '3', enterprise: t('featureComparison.unlimited'), industry: '1' },
        { name: t('featureComparison.features.callRecording'), starter: true, professional: true, business: true, enterprise: true, industry: true },
        { name: t('featureComparison.features.callTransfer'), starter: false, professional: true, business: true, enterprise: true, industry: true },
        { name: t('featureComparison.features.voicemailTranscription'), starter: true, professional: true, business: true, enterprise: true, industry: true },
      ]
    },
    {
      category: t('featureComparison.categories.integrations'),
      items: [
        { name: t('featureComparison.features.emailIntegration'), starter: true, professional: true, business: true, enterprise: true, industry: true },
        { name: t('featureComparison.features.smsNotifications'), starter: false, professional: true, business: true, enterprise: true, industry: true },
        { name: t('featureComparison.features.calendarSync'), starter: false, professional: true, business: true, enterprise: true, industry: true },
        { name: t('featureComparison.features.crmIntegration'), starter: false, professional: false, business: true, enterprise: true, industry: true },
        { name: t('featureComparison.features.apiAccess'), starter: false, professional: false, business: true, enterprise: true, industry: false },
        { name: t('featureComparison.features.webhooks'), starter: false, professional: false, business: true, enterprise: true, industry: false },
      ]
    },
    {
      category: t('featureComparison.categories.support'),
      items: [
        { name: t('featureComparison.features.emailSupport'), starter: true, professional: true, business: true, enterprise: true, industry: true },
        { name: t('featureComparison.features.prioritySupport'), starter: false, professional: true, business: true, enterprise: true, industry: true },
        { name: t('featureComparison.features.phoneSupport'), starter: false, professional: false, business: true, enterprise: true, industry: true },
        { name: t('featureComparison.features.dedicatedManager'), starter: false, professional: false, business: false, enterprise: true, industry: false },
        { name: t('featureComparison.features.onboardingAssistance'), starter: false, professional: false, business: false, enterprise: true, industry: true },
      ]
    },
    {
      category: t('featureComparison.categories.enterprise'),
      items: [
        { name: t('featureComparison.features.multiUserAccounts'), starter: false, professional: false, business: true, enterprise: true, industry: false },
        { name: t('featureComparison.features.multiLocation'), starter: false, professional: false, business: false, enterprise: true, industry: false },
        { name: t('featureComparison.features.whiteLabel'), starter: false, professional: false, business: false, enterprise: true, industry: false },
        { name: t('featureComparison.features.customBranding'), starter: false, professional: false, business: false, enterprise: true, industry: false },
        { name: t('featureComparison.features.slaGuarantee'), starter: false, professional: false, business: false, enterprise: true, industry: false },
        { name: t('featureComparison.features.customIntegrations'), starter: false, professional: false, business: false, enterprise: true, industry: false },
      ]
    }
  ]

  const renderValue = (value: boolean | string) => {
    if (typeof value === 'boolean') {
      return value ? (
        <svg className="w-6 h-6 text-accent mx-auto" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ) : (
        <svg className="w-6 h-6 text-gray-300 mx-auto" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
        </svg>
      )
    }
    return <span className="text-sm font-semibold text-primary">{value}</span>
  }

  return (
    <div>
      <div className="gradient-mesh noise-overlay">
        <div className="section-container text-center">
          <h1 className="heading-xl text-primary mb-6">
            {t('featureComparison.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('featureComparison.subtitle')}
          </p>
        </div>
      </div>

      <div className="section-container bg-white">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden border border-gray-200 rounded-2xl">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-surface">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold text-primary uppercase tracking-wider sticky left-0 bg-surface z-10">
                      {t('featureComparison.featureColumn')}
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-bold text-primary uppercase tracking-wider">
                      <div>{t('pricing.tiers.starter.name')}</div>
                      <div className="text-2xl font-display text-accent mt-1">$49</div>
                      <div className="text-xs text-gray-600 font-normal mt-1">100 {t('pricing.callsPerMonth')}</div>
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-bold text-primary uppercase tracking-wider bg-accent/10">
                      <div className="flex items-center justify-center gap-2">
                        <span>{t('pricing.tiers.professional.name')}</span>
                        <span className="bg-accent text-white text-xs px-2 py-0.5 rounded-full">{t('pricing.popular')}</span>
                      </div>
                      <div className="text-2xl font-display text-accent mt-1">$149</div>
                      <div className="text-xs text-gray-600 font-normal mt-1">300 {t('pricing.callsPerMonth')}</div>
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-bold text-primary uppercase tracking-wider">
                      <div>{t('pricing.tiers.business.name')}</div>
                      <div className="text-2xl font-display text-accent mt-1">$249</div>
                      <div className="text-xs text-gray-600 font-normal mt-1">500 {t('pricing.callsPerMonth')}</div>
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-bold text-primary uppercase tracking-wider">
                      <div>{t('pricing.tiers.enterprise.name')}</div>
                      <div className="text-2xl font-display text-accent mt-1">{t('pricing.custom')}</div>
                      <div className="text-xs text-gray-600 font-normal mt-1">{t('featureComparison.unlimited')}</div>
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-bold text-primary uppercase tracking-wider bg-green-50">
                      <div>{t('featureComparison.industryPackages')}</div>
                      <div className="text-2xl font-display text-accent mt-1">$149+</div>
                      <div className="text-xs text-gray-600 font-normal mt-1">300+ {t('pricing.callsPerMonth')}</div>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {features.map((category, categoryIndex) => (
                    <React.Fragment key={`category-${categoryIndex}`}>
                      <tr className="bg-gray-50">
                        <td colSpan={6} className="px-6 py-3 text-left text-sm font-bold text-primary">
                          {category.category}
                        </td>
                      </tr>
                      {category.items.map((feature, featureIndex) => (
                        <tr key={`feature-${categoryIndex}-${featureIndex}`} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 sticky left-0 bg-white">
                            {feature.name}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-center">
                            {renderValue(feature.starter)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-center bg-accent/5">
                            {renderValue(feature.professional)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-center">
                            {renderValue(feature.business)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-center">
                            {renderValue(feature.enterprise)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-center bg-green-50">
                            {renderValue(feature.industry)}
                          </td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Key Features Summary */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-surface rounded-2xl p-6 border-2 border-gray-200">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-display font-bold text-primary mb-3">{t('featureComparison.keyFeatures.lightningFast.title')}</h3>
            <p className="text-gray-600">{t('featureComparison.keyFeatures.lightningFast.description')}</p>
          </div>
          <div className="bg-surface rounded-2xl p-6 border-2 border-gray-200">
            <div className="text-4xl mb-4">🌍</div>
            <h3 className="text-xl font-display font-bold text-primary mb-3">{t('featureComparison.keyFeatures.bilingualSupport.title')}</h3>
            <p className="text-gray-600">{t('featureComparison.keyFeatures.bilingualSupport.description')}</p>
          </div>
          <div className="bg-surface rounded-2xl p-6 border-2 border-gray-200">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-display font-bold text-primary mb-3">{t('featureComparison.keyFeatures.industryTemplates.title')}</h3>
            <p className="text-gray-600">{t('featureComparison.keyFeatures.industryTemplates.description')}</p>
          </div>
        </div>

        {/* Enterprise-Grade Infrastructure */}
        <div className="mt-16">
          <h2 className="heading-md text-primary mb-8 text-center">{t('featureComparison.infrastructureTitle')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🔒', name: t('featureComparison.infrastructure.security.name'), description: t('featureComparison.infrastructure.security.description') },
              { icon: '⚡', name: t('featureComparison.infrastructure.fast.name'), description: t('featureComparison.infrastructure.fast.description') },
              { icon: '🌐', name: t('featureComparison.infrastructure.global.name'), description: t('featureComparison.infrastructure.global.description') },
              { icon: '🔄', name: t('featureComparison.infrastructure.scaling.name'), description: t('featureComparison.infrastructure.scaling.description') },
              { icon: '📊', name: t('featureComparison.infrastructure.analytics.name'), description: t('featureComparison.infrastructure.analytics.description') },
              { icon: '🛡️', name: t('featureComparison.infrastructure.hipaa.name'), description: t('featureComparison.infrastructure.hipaa.description') },
              { icon: '☁️', name: t('featureComparison.infrastructure.cloud.name'), description: t('featureComparison.infrastructure.cloud.description') },
              { icon: '🎯', name: t('featureComparison.infrastructure.multiTenant.name'), description: t('featureComparison.infrastructure.multiTenant.description') }
            ].map((tech, index) => (
              <div key={index} className="bg-white rounded-xl p-4 border border-gray-200 text-center">
                <div className="text-3xl mb-2">{tech.icon}</div>
                <div className="font-bold text-primary">{tech.name}</div>
                <div className="text-xs text-gray-600">{tech.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h2 className="heading-md text-primary mb-8 text-center">{t('featureComparison.faqTitle')}</h2>
          <div className="space-y-6">
            {[
              {
                q: t('featureComparison.faq.q1'),
                a: t('featureComparison.faq.a1')
              },
              {
                q: t('featureComparison.faq.q2'),
                a: t('featureComparison.faq.a2')
              },
              {
                q: t('featureComparison.faq.q3'),
                a: t('featureComparison.faq.a3')
              },
              {
                q: t('featureComparison.faq.q4'),
                a: t('featureComparison.faq.a4')
              },
              {
                q: t('featureComparison.faq.q5'),
                a: t('featureComparison.faq.a5')
              },
              {
                q: t('featureComparison.faq.q6'),
                a: t('featureComparison.faq.a6')
              }
            ].map((faq, index) => (
              <details key={index} className="bg-surface rounded-xl p-6 border border-gray-200">
                <summary className="font-bold text-primary cursor-pointer flex items-center justify-between">
                  {faq.q}
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-gray-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}