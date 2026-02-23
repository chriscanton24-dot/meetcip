import { useTranslation } from 'react-i18next'

export default function Features() {
  const { t } = useTranslation()

  const features = [
    { icon: '🤖', titleKey: 'features.feature1Title',  descKey: 'features.feature1Desc'  },
    { icon: '🌍', titleKey: 'features.feature2Title',  descKey: 'features.feature2Desc'  },
    { icon: '📝', titleKey: 'features.feature3Title',  descKey: 'features.feature3Desc'  },
    { icon: '🔔', titleKey: 'features.feature5Title',  descKey: 'features.feature5Desc'  },
    { icon: '📅', titleKey: 'features.feature6Title',  descKey: 'features.feature6Desc'  },
    { icon: '📊', titleKey: 'features.feature8Title',  descKey: 'features.feature8Desc'  },
    { icon: '🎨', titleKey: 'features.feature10Title', descKey: 'features.feature10Desc' },
    { icon: '🚨', titleKey: 'features.feature11Title', descKey: 'features.feature11Desc' },
    { icon: '💬', titleKey: 'features.feature12Title', descKey: 'features.feature12Desc' },
    { icon: '▶️', titleKey: 'features.feature13Title', descKey: 'features.feature13Desc' },
    { icon: '🌙', titleKey: 'features.feature14Title', descKey: 'features.feature14Desc' },
    { icon: '💰', titleKey: 'features.feature15Title', descKey: 'features.feature15Desc' },
  ]

  const crmCards = [
    { icon: '📞', titleKey: 'features.crmCard1Title', descKey: 'features.crmCard1Desc' },
    { icon: '👋', titleKey: 'features.crmCard2Title', descKey: 'features.crmCard2Desc' },
    { icon: '🗃️', titleKey: 'features.crmCard3Title', descKey: 'features.crmCard3Desc' },
    { icon: '📋', titleKey: 'features.crmCard4Title', descKey: 'features.crmCard4Desc' },
    { icon: '🧠', titleKey: 'features.crmCard5Title', descKey: 'features.crmCard5Desc' },
    { icon: '🏆', titleKey: 'features.crmCard6Title', descKey: 'features.crmCard6Desc' },
  ]

  return (
    <div className="bg-white">
      <div className="section-container">

        {/* ── CRM + AI DIFFERENTIATOR SECTION (top) ── */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <span className="inline-block bg-accent text-white text-sm font-bold px-4 py-2 rounded-full mb-4">
              {t('features.crmDifferentiatorBadge')}
            </span>
            <h2 className="heading-lg text-primary mb-4">
              {t('features.crmSectionTitle')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('features.crmSectionSubtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {crmCards.map((card, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-to-br from-accent/5 to-accent/10 rounded-2xl border-2 border-accent/20 hover:border-accent transition-all hover:shadow-lg"
              >
                <div className="text-4xl mb-3">{card.icon}</div>
                <h3 className="text-lg font-display font-bold text-primary mb-2">
                  {t(card.titleKey)}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{t(card.descKey)}</p>
              </div>
            ))}
          </div>

          {/* VS banner */}
          <div className="mt-10 bg-primary rounded-2xl p-8 text-white text-center">
            <p className="text-lg font-semibold text-white/80 mb-2">The difference is clear</p>
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mt-4">
              <div className="bg-white/10 rounded-xl p-4">
                <div className="text-2xl mb-2">📟</div>
                <div className="font-bold text-white/60 text-sm uppercase tracking-wide mb-1">Other Answering Services</div>
                <div className="text-white/80 text-sm">Take a message. That's it.</div>
              </div>
              <div className="flex items-center justify-center text-3xl font-bold text-accent">VS</div>
              <div className="bg-accent/30 rounded-xl p-4 border border-accent">
                <div className="text-2xl mb-2">🤖</div>
                <div className="font-bold text-accent text-sm uppercase tracking-wide mb-1">MeetCIP</div>
                <div className="text-white/90 text-sm">Answers calls + runs your CRM + gets smarter every call</div>
              </div>
            </div>
          </div>
        </div>

        {/* ── FEATURES GRID ── */}
        <div className="text-center mb-16">
          <h2 className="heading-lg text-primary mb-4">
            {t('features.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('features.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
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

        {/* Built for Scale */}
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
