// MKT-WEBSITE-HOME-0001: Testimonials placeholder
// Director directive: Real testimonials pending — section preserved with placeholder copy
// Section 5 copy from homepage document: "Sound familiar?" / "They felt it too."
import { useTranslation } from 'react-i18next'

export default function Testimonials() {
  const { t } = useTranslation()

  return (
    <div className="bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="heading-md text-primary mb-4">
            {t('testimonials.headline')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('testimonials.subheadline')}
          </p>
        </div>

        {/* Placeholder — real testimonials pending */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-white to-surface rounded-2xl p-8 border-2 border-gray-100 hover:border-accent hover:shadow-xl transition-all duration-300 flex flex-col justify-between min-h-[260px]"
            >
              {/* Star row */}
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(5)].map((_, s) => (
                  <svg key={s} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote placeholder */}
              <div className="flex-grow">
                <div className="h-4 bg-gray-100 rounded-full mb-3 w-full" />
                <div className="h-4 bg-gray-100 rounded-full mb-3 w-5/6" />
                <div className="h-4 bg-gray-100 rounded-full mb-3 w-4/6" />
              </div>

              {/* Author placeholder */}
              <div className="flex items-center space-x-3 pt-6 border-t border-gray-200 mt-6">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-dark rounded-full flex-shrink-0" />
                <div className="space-y-2">
                  <div className="h-3 bg-gray-100 rounded-full w-24" />
                  <div className="h-3 bg-gray-100 rounded-full w-32" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Placeholder notice — internal only, remove when real testimonials added */}
        <p className="text-center text-sm text-gray-400 mt-8 italic">
          {t('testimonials.pendingNote')}
        </p>

      </div>
    </div>
  )
}
