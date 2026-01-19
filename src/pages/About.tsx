import { useTranslation } from 'react-i18next'

export default function About() {
  const { t } = useTranslation()

  return (
    <div>
      <div className="gradient-mesh noise-overlay">
        <div className="section-container text-center">
          <h1 className="heading-xl text-primary mb-6">
            {t('about.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>
      </div>

      <div className="section-container bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-md text-primary mb-6">{t('about.missionTitle')}</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            {t('about.missionPara1')}
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            {t('about.missionPara2')}
          </p>
        </div>
      </div>

      <div className="bg-surface">
        <div className="section-container">
          <h2 className="heading-md text-center text-primary mb-12">{t('about.valuesTitle')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: t('about.values.accessibility.title'),
                description: t('about.values.accessibility.description'),
                icon: '🌐'
              },
              {
                title: t('about.values.reliability.title'),
                description: t('about.values.reliability.description'),
                icon: '✅'
              },
              {
                title: t('about.values.innovation.title'),
                description: t('about.values.innovation.description'),
                icon: '🚀'
              },
              {
                title: t('about.values.transparency.title'),
                description: t('about.values.transparency.description'),
                icon: '💎'
              },
              {
                title: t('about.values.customerFirst.title'),
                description: t('about.values.customerFirst.description'),
                icon: '🤝'
              },
              {
                title: t('about.values.privacy.title'),
                description: t('about.values.privacy.description'),
                icon: '🔒'
              }
            ].map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-accent transition-colors">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-display font-bold text-primary mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}