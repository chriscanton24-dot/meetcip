
import Hero from '../components/Hero'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

// BUILD-WEB-PRICING-SSOT-0001: Backend URL — prices read from pricing_config DB.
const BACKEND_URL = 'https://ai-answering-service-cloud.onrender.com'

// BUILD-WEB-PRICING-SSOT-0001: Fallback — used ONLY if /api/pricing unreachable.
const HOME_PRICING_FALLBACK = {
  starter:      { monthlyPrice: 59,  calls: 100 },
  professional: { monthlyPrice: 149, calls: 300 },
  business:     { monthlyPrice: 269, calls: 500 },
}

export default function Home() {
  const { t } = useTranslation()
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [homePricing, setHomePricing] = useState(HOME_PRICING_FALLBACK)

  // BUILD-WEB-PRICING-SSOT-0001: Fetch live prices on mount.
  // On success: state updated from DB. On failure: fallback values retained.
  useEffect(() => {
    fetch(`${BACKEND_URL}/api/pricing`)
      .then(res => res.json())
      .then(data => {
        if (data.success && Array.isArray(data.tiers)) {
          const map: typeof HOME_PRICING_FALLBACK = { ...HOME_PRICING_FALLBACK }
          data.tiers.forEach((tier: { tier_key: string; monthly_price: number | null; calls_per_month: number | null }) => {
            if (tier.tier_key in map) {
              map[tier.tier_key as keyof typeof map] = {
                monthlyPrice: tier.monthly_price ?? map[tier.tier_key as keyof typeof map].monthlyPrice,
                calls:        tier.calls_per_month ?? map[tier.tier_key as keyof typeof map].calls,
              }
            }
          })
          setHomePricing(map)
        }
      })
      .catch(err => {
        console.warn('BUILD-WEB-PRICING-SSOT-0001: /api/pricing fetch failed — using fallback', err)
      })
  }, [])

  const faqs = [
    {
      q: t('faq.q1'),
      a: t('faq.a1')
    },
    {
      q: t('faq.q2'),
      a: t('faq.a2')
    },
    {
      q: t('faq.q3'),
      a: t('faq.a3')
    },
    {
      q: t('faq.q4'),
      a: t('faq.a4')
    },
    {
      q: t('faq.q5'),
      a: t('faq.a5')
    },
    {
      q: t('faq.q6'),
      a: t('faq.a6')
    }
  ]

  return (
    <>
      <Hero />
      <Features />
      <Testimonials />
      
      {/* Updated Pricing Preview Section */}
      <div className="bg-surface">
        <div className="section-container text-center">
          <h2 className="heading-md text-primary mb-4">{t('pricing.previewTitle')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            {t('pricing.previewSubtitle')}
          </p>
          
          {/* Quick Pricing Cards Preview */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {/* Starter */}
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-accent transition-all">
              <h3 className="text-2xl font-display font-bold text-primary mb-2">{t('pricing.tiers.starter.name')}</h3>
              <div className="mb-4">
                <span className="text-5xl font-display font-bold text-accent">${homePricing.starter.monthlyPrice}</span>
                <span className="text-lg text-gray-600">{t('pricing.perMonth')}</span>
              </div>
              <p className="text-gray-600 mb-6">{homePricing.starter.calls} {t('pricing.callsPerMonth')}</p>
              <Link to="/onboarding" className="block w-full text-center py-3 px-6 bg-accent text-white rounded-xl font-bold hover:bg-accent-dark transition-colors">
                {t('pricing.getStarted')}
              </Link>
            </div>
            
            {/* Professional */}
            <div className="bg-gradient-to-br from-accent to-accent-dark text-white rounded-2xl p-8 transform scale-105 shadow-2xl">
              <div className="text-center mb-4">
                <span className="bg-white text-accent text-sm font-bold px-4 py-1 rounded-full">
                  {t('pricing.mostPopular')}
                </span>
              </div>
              <h3 className="text-2xl font-display font-bold mb-2">{t('pricing.tiers.professional.name')}</h3>
              <div className="mb-4">
                <span className="text-5xl font-display font-bold">${homePricing.professional.monthlyPrice}</span>
                <span className="text-lg text-white/80">{t('pricing.perMonth')}</span>
              </div>
              <p className="text-white/90 mb-6">{homePricing.professional.calls} {t('pricing.callsPerMonth')}</p>
              <Link to="/onboarding" className="block w-full text-center py-3 px-6 bg-white text-accent rounded-xl font-bold hover:bg-gray-100 transition-colors">
                {t('pricing.getStarted')}
              </Link>
            </div>
            
            {/* Business */}
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-accent transition-all">
              <h3 className="text-2xl font-display font-bold text-primary mb-2">{t('pricing.tiers.business.name')}</h3>
              <div className="mb-4">
                <span className="text-5xl font-display font-bold text-accent">${homePricing.business.monthlyPrice}</span>
                <span className="text-lg text-gray-600">{t('pricing.perMonth')}</span>
              </div>
              <p className="text-gray-600 mb-6">{homePricing.business.calls} {t('pricing.callsPerMonth')}</p>
              <Link to="/onboarding" className="block w-full text-center py-3 px-6 bg-accent text-white rounded-xl font-bold hover:bg-accent-dark transition-colors">
                {t('pricing.getStarted')}
              </Link>
            </div>
          </div>
          
          {/* Money-Back Guarantee */}
          <div className="flex items-center justify-center space-x-2 text-lg">
            <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-semibold text-primary">{t('pricing.moneyBackGuarantee')}</span>
          </div>
        </div>
      </div>
      
      {/* Industry-Specific FAQ */}
      <div className="bg-white">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="heading-md text-primary mb-4">{t('faq.title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('faq.subtitle')}
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-accent transition-colors">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between font-semibold text-lg text-primary hover:text-accent transition-colors"
                >
                  <span>{faq.q}</span>
                  <svg
                    className={`w-5 h-5 text-accent transform transition-transform ${openFaq === index ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">{t('faq.stillHaveQuestions')}</p>
            <Link to="/contact" className="text-accent font-semibold hover:text-accent-dark transition-colors">
              {t('faq.contactSupport')}
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
