import { useTranslation } from 'react-i18next'

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en'
    i18n.changeLanguage(newLang)
  }

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 px-3 py-2 rounded-lg border-2 border-gray-200 hover:border-accent transition-all"
      aria-label="Toggle language"
    >
      <span className="text-xl">
        {i18n.language === 'en' ? '🇺🇸' : '🇲🇽'}
      </span>
      <span className="text-sm font-semibold text-gray-700">
        {i18n.language === 'en' ? 'EN' : 'ES'}
      </span>
    </button>
  )
}