
import { useTranslation } from 'react-i18next'

export default function Features() {
  const { t } = useTranslation()

  const features = [
    {
      icon: '🤖',
      titleKey: 'features.feature1Title',
      descKey: 'features.feature1Desc'
    },
    {
      icon: '🌍',
      titleKey: 'features.feature2Title',
      descKey: 'features.feature2Desc'
    },
    {
      icon: '📝',
      titleKey: 'features.feature3Title',
      descKey: 'features.feature3Desc'
    },
    {
      icon: '🎯',
      titleKey: 'features.feature4Title',
      descKey: 'features.feature4Desc'
    },
    {
      icon: '🔔',
      titleKey: 'features.feature5Title',
      descKey: 'features.feature5Desc'
    },
    {
      icon: '📅',
      titleKey: 'features.feature6Title',
      descKey: 'features.feature6Desc'
    },
    {
      icon: '🏭',
      titleKey: 'features.feature7Title',
      descKey: 'features.feature7Desc'
    },
    {
      icon: '📊',
      titleKey: 'features.feature8Title',
      descKey: 'features.feature8Desc'
    },
    {
      icon: '🔗',
      titleKey: 'features.feature9Title',
      descKey: 'features.feature9Desc'
    },
    {
      icon: '🎨',
      titleKey: 'features.feature10Title',
      descKey: 'features.feature10Desc'
    },
    {
      icon: '🚨',
      titleKey: 'features.feature11Title',
      descKey: 'features.feature11Desc'
    },
    {
      icon: '💬',
      titleKey: 'features.feature12Title',
      descKey: 'features.feature12Desc'
    }
  ]

  return (
    <div className="bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-primary mb-4">
            {t('features.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('features.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-surface rounded-2xl border-2 border-gray-100 hover:border-accent transition-all hover:shadow-lg"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-display font-bold text-primary mb-2">
                {t(feature.titleKey)}
              </h3>
              <p className="text-gray-600">{t(feature.descKey)}</p>
            </div>
          ))}
        </div>

        {/* Built for Scale Section */}
        <div className="mt-20 bg-gradient-to-br from-accent to-accent-dark rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl font-display font-bold mb-4">
            {t('features.scaleTitle')}
          </h3>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            {t('features.scaleSubtitle')}
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="text-4xl font-display font-bold mb-2">99.9%</div>
              <div className="text-white/80">{t('features.uptime')}</div>
            </div>
            <div>
              <div className="text-4xl font-display font-bold mb-2">&lt;2s</div>
              <div className="text-white/80">{t('features.responseTime')}</div>
            </div>
            <div>
              <div className="text-4xl font-display font-bold mb-2">24/7</div>
              <div className="text-white/80">{t('features.availability')}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
