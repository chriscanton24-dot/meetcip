export default function FeatureComparison() {
  const features = [
    {
      category: 'Core Features',
      items: [
        { name: 'AI Phone Answering 24/7', starter: true, professional: true, business: true, enterprise: true, industry: true },
        { name: 'Call Logging & Transcripts', starter: true, professional: true, business: true, enterprise: true, industry: true },
        { name: 'Email Notifications', starter: true, professional: true, business: true, enterprise: true, industry: true },
        { name: 'Response Time: 2-4 seconds', starter: true, professional: true, business: true, enterprise: true, industry: true },
        { name: 'Basic Knowledge Base', starter: true, professional: true, business: true, enterprise: true, industry: true },
      ]
    },
    {
      category: 'Advanced AI Features',
      items: [
        { name: 'Advanced RAG Knowledge Base', starter: false, professional: true, business: true, enterprise: true, industry: true },
        { name: 'Custom AI Prompts', starter: false, professional: true, business: true, enterprise: true, industry: true },
        { name: 'Bilingual Support (EN/ES)', starter: false, professional: true, business: true, enterprise: true, industry: true },
        { name: 'Industry-Specific Templates', starter: false, professional: false, business: true, enterprise: true, industry: true },
        { name: 'Industry Dashboard (Coming Soon)', starter: false, professional: false, business: false, enterprise: false, industry: true },
      ]
    },
    {
      category: 'Phone Management',
      items: [
        { name: 'Phone Numbers Included', starter: '1', professional: '1', business: '3', enterprise: 'Unlimited', industry: '1' },
        { name: 'Call Recording', starter: true, professional: true, business: true, enterprise: true, industry: true },
        { name: 'Call Transfer (Coming Soon)', starter: false, professional: true, business: true, enterprise: true, industry: true },
        { name: 'Voicemail Transcription', starter: true, professional: true, business: true, enterprise: true, industry: true },
      ]
    },
    {
      category: 'Integrations',
      items: [
        { name: 'Email Integration', starter: true, professional: true, business: true, enterprise: true, industry: true },
        { name: 'SMS Notifications (Coming Soon)', starter: false, professional: true, business: true, enterprise: true, industry: true },
        { name: 'Calendar Sync', starter: false, professional: true, business: true, enterprise: true, industry: true },
        { name: 'CRM Integration', starter: false, professional: false, business: true, enterprise: true, industry: true },
        { name: 'API Access', starter: false, professional: false, business: true, enterprise: true, industry: false },
        { name: 'Webhooks', starter: false, professional: false, business: true, enterprise: true, industry: false },
      ]
    },
    {
      category: 'Support',
      items: [
        { name: 'Email Support', starter: true, professional: true, business: true, enterprise: true, industry: true },
        { name: 'Priority Support', starter: false, professional: true, business: true, enterprise: true, industry: true },
        { name: 'Phone Support', starter: false, professional: false, business: true, enterprise: true, industry: true },
        { name: 'Dedicated Account Manager', starter: false, professional: false, business: false, enterprise: true, industry: false },
        { name: 'Onboarding Assistance', starter: false, professional: false, business: false, enterprise: true, industry: true },
      ]
    },
    {
      category: 'Enterprise Features',
      items: [
        { name: 'Multi-User Accounts', starter: false, professional: false, business: true, enterprise: true, industry: false },
        { name: 'Multi-Location Support', starter: false, professional: false, business: false, enterprise: true, industry: false },
        { name: 'White-Label Options', starter: false, professional: false, business: false, enterprise: true, industry: false },
        { name: 'Custom Branding', starter: false, professional: false, business: false, enterprise: true, industry: false },
        { name: '99.9% SLA Guarantee', starter: false, professional: false, business: false, enterprise: true, industry: false },
        { name: 'Custom Integrations', starter: false, professional: false, business: false, enterprise: true, industry: false },
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
            Feature Comparison
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Compare plans to find the perfect fit for your business
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
                      Feature
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-bold text-primary uppercase tracking-wider">
                      <div>Starter</div>
                      <div className="text-2xl font-display text-accent mt-1">$49</div>
                      <div className="text-xs text-gray-600 font-normal mt-1">100 calls/mo</div>
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-bold text-primary uppercase tracking-wider bg-accent/10">
                      <div className="flex items-center justify-center gap-2">
                        <span>Professional</span>
                        <span className="bg-accent text-white text-xs px-2 py-0.5 rounded-full">POPULAR</span>
                      </div>
                      <div className="text-2xl font-display text-accent mt-1">$149</div>
                      <div className="text-xs text-gray-600 font-normal mt-1">300 calls/mo</div>
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-bold text-primary uppercase tracking-wider">
                      <div>Business</div>
                      <div className="text-2xl font-display text-accent mt-1">$249</div>
                      <div className="text-xs text-gray-600 font-normal mt-1">500 calls/mo</div>
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-bold text-primary uppercase tracking-wider">
                      <div>Enterprise</div>
                      <div className="text-2xl font-display text-accent mt-1">Custom</div>
                      <div className="text-xs text-gray-600 font-normal mt-1">Unlimited</div>
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-bold text-primary uppercase tracking-wider bg-green-50">
                      <div>Industry Packages</div>
                      <div className="text-2xl font-display text-accent mt-1">$149-189</div>
                      <div className="text-xs text-gray-600 font-normal mt-1">300 calls/mo</div>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {features.map((category, categoryIndex) => (
                    <>
                      <tr key={`category-${categoryIndex}`} className="bg-gray-50">
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
                    </>
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
            <h3 className="text-xl font-display font-bold text-primary mb-3">Lightning Fast</h3>
            <p className="text-gray-600">2-4 second response time across all plans. Industry-leading speed that beats competitors by 3-5 seconds.</p>
          </div>
          <div className="bg-surface rounded-2xl p-6 border-2 border-gray-200">
            <div className="text-4xl mb-4">🌍</div>
            <h3 className="text-xl font-display font-bold text-primary mb-3">Bilingual Support</h3>
            <p className="text-gray-600">Seamless English/Spanish support on Professional tier and above. Critical for home services markets.</p>
          </div>
          <div className="bg-surface rounded-2xl p-6 border-2 border-gray-200">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-display font-bold text-primary mb-3">Industry Templates</h3>
            <p className="text-gray-600">Pre-configured for 11 industries with specialized dashboards, lead qualification, and routing logic.</p>
          </div>
        </div>

        {/* Enterprise-Grade Infrastructure */}
        <div className="mt-16">
          <h2 className="heading-md text-primary mb-8 text-center">Enterprise-Grade Infrastructure</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🔒', name: 'Bank-Level Security', description: 'Enterprise encryption' },
              { icon: '⚡', name: 'Lightning-Fast', description: 'Sub-2-second responses' },
              { icon: '🌐', name: 'Global Scale', description: '99.9% uptime SLA' },
              { icon: '🔄', name: 'Auto-Scaling', description: 'Handles any call volume' },
              { icon: '📊', name: 'Real-Time Analytics', description: 'Instant insights' },
              { icon: '🛡️', name: 'HIPAA Ready', description: 'Healthcare compliant' },
              { icon: '☁️', name: 'Cloud-Native', description: 'Always available' },
              { icon: '🎯', name: 'Multi-Tenant', description: 'Isolated & secure' }
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
          <h2 className="heading-md text-primary mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: 'Can I upgrade or downgrade my plan?',
                a: 'Yes! You can change plans at any time. Upgrades take effect immediately, downgrades at the next billing cycle.'
              },
              {
                q: 'What happens if I exceed my call limit?',
                a: 'Overage charges apply: $0.50/call (Starter), $0.40/call (Professional), $0.35/call (Business). You\'ll receive alerts at 80% and 100% of your limit.'
              },
              {
                q: 'Do industry packages include all Professional features?',
                a: 'Yes! Industry packages include all Professional tier features PLUS industry-specific templates, dashboards, and specialized AI prompts.'
              },
              {
                q: 'Is there a setup fee?',
                a: 'No setup fees. No hidden costs. Just simple, transparent monthly pricing with a 30-day money-back guarantee.'
              },
              {
                q: 'What\'s the difference between Business and Industry packages?',
                a: 'Business tier is flexible for any industry. Industry packages are pre-configured with specialized templates, lead qualification, and dashboards for specific trades.'
              },
              {
                q: 'Can I cancel anytime?',
                a: 'Yes, cancel anytime with no penalties. Your service continues until the end of your current billing period.'
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