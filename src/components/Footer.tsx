import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-accent to-accent-dark rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">CIP</span>
              </div>
              <span className="font-display font-bold text-lg">MeetCIP</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              {t('footer.tagline')}
            </p>
          </div>

          <div>
            <h3 className="font-display font-bold mb-4">{t('footer.product')}</h3>
            <ul className="space-y-2">
              <li><Link to="/pricing" className="text-white/70 hover:text-accent transition-colors">{t('footer.pricing')}</Link></li>
              <li><Link to="/demo" className="text-white/70 hover:text-accent transition-colors">{t('footer.requestDemo')}</Link></li>
              <li><a href="/#features" className="text-white/70 hover:text-accent transition-colors">{t('footer.features')}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold mb-4">{t('footer.company')}</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-white/70 hover:text-accent transition-colors">{t('footer.aboutUs')}</Link></li>
              <li><Link to="/contact" className="text-white/70 hover:text-accent transition-colors">{t('footer.contact')}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold mb-4">{t('footer.legal')}</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-white/70 hover:text-accent transition-colors">{t('footer.privacy')}</Link></li>
              <li><Link to="/terms" className="text-white/70 hover:text-accent transition-colors">{t('footer.terms')}</Link></li>
              <li><Link to="/dpa" className="text-white/70 hover:text-accent transition-colors">{t('footer.dpa')}</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm">
            {t('footer.copyright')}
          </p>
          <p className="text-white/70 text-sm mt-2 md:mt-0">
            Contact us: demomeetcip@gmail.com
          </p>
        </div>
      </div>
    </footer>
  )
}