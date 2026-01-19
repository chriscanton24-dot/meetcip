
import Hero from '../components/Hero'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function Home() {
  const { t } = useTranslation()
  const [openFaq, setOpenFaq] = useState<number | null>(0)

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
                <span className="text-5xl font-display font-bold text-accent">$49</span>
                <span className="text-lg text-gray-600">{t('pricing.perMonth')}</span>
              </div>
              <p className="text-gray-600 mb-6">100 {t('pricing.callsPerMonth')}</p>
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
                <span className="text-5xl font-display font-bold">$149</span>
                <span className="text-lg text-white/80">{t('pricing.perMonth')}</span>
              </div>
              <p className="text-white/90 mb-6">300 {t('pricing.callsPerMonth')}</p>
              <Link to="/onboarding" className="block w-full text-center py-3 px-6 bg-white text-accent rounded-xl font-bold hover:bg-gray-100 transition-colors">
                {t('pricing.getStarted')}
              </Link>
            </div>
            
            {/* Business */}
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-accent transition-all">
              <h3 className="text-2xl font-display font-bold text-primary mb-2">{t('pricing.tiers.business.name')}</h3>
              <div className="mb-4">
                <span className="text-5xl font-display font-bold text-accent">$249</span>
                <span className="text-lg text-gray-600">{t('pricing.perMonth')}</span>
              </div>
              <p className="text-gray-600 mb-6">500 {t('pricing.callsPerMonth')}</p>
              <Link to="/onboarding" className="block w-full text-center py-3 px-6 bg-accent text-white rounded-xl font-bold hover:bg-accent-dark transition-colors">
                {t('pricing.getStarted')}
              </Link>
            </div>
          </div>
          
          {/* Industry Packages Teaser */}
          <div className="bg-white rounded-2xl p-8 max-w-4xl mx-auto border-2 border-accent mb-8">
            <h3 className="text-2xl font-display font-bold text-primary mb-4">{t('pricing.industryPackagesTitle')}</h3>
            <p className="text-gray-600 mb-6">
              {t('pricing.industryPackagesDesc')}
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <span className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold">🏡 {t('header.realEstate')}</span>
              <span className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold">🔥 {t('header.emergencyServices')}</span>
              <span className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold">🏠 {t('header.homeServices')}</span>
              <span className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold">🏗️ {t('header.propertyServices')}</span>
            </div>
            <Link to="/pricing" className="btn-primary inline-block">
              {t('pricing.viewAllPricing')}
            </Link>
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
