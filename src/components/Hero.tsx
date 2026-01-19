
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <div className="gradient-mesh noise-overlay">
      <div className="section-container">
        <div className="max-w-5xl mx-auto">
          <div className="text-center">
            <div className="inline-block bg-accent/10 text-accent text-sm font-bold px-4 py-2 rounded-full mb-6">
              {t('hero.badge')}
            </div>
            
            <h1 className="heading-xl text-primary mb-6">
              {t('hero.title')}
            </h1>
            
            <p className="text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
              {t('hero.subtitle')}
            </p>

            {/* Three key benefits */}
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
              <div className="flex items-center justify-center space-x-2">
                <svg className="w-5 h-5 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold text-gray-700">{t('hero.benefit1')}</span>
              </div>
              
              <div className="flex items-center justify-center space-x-2">
                <svg className="w-5 h-5 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold text-gray-700">{t('hero.benefit2')}</span>
              </div>
              
              <div className="flex items-center justify-center space-x-2">
                <svg className="w-5 h-5 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold text-gray-700">{t('hero.benefit3')}</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/onboarding" className="btn-primary px-8 py-4 text-lg">
                {t('hero.ctaPrimary')}
              </Link>
              <a href="tel:+12107563650" className="btn-secondary px-8 py-4 text-lg">
                {t('hero.ctaSecondary')}
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>{t('hero.trustNoContracts')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>{t('hero.trustCancelAnytime')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
