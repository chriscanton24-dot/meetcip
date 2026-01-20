
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function CookieConsent() {
  const { t } = useTranslation();
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    setShowBanner(false);
    window.location.reload();
  };

  const handleDecline = () => {
    localStorage.setItem('cookie_consent', 'declined');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex-1 text-sm">
            <p className="mb-2">
              {t('cookieConsent.message', 'We use cookies to improve your experience and analyze site traffic.')}
            </p>
            <p className="text-gray-400 text-xs">
              {t('cookieConsent.details', 'By clicking Accept, you agree to our use of cookies.')}{' '}
              <Link to="/privacy" className="underline hover:text-white">
                {t('cookieConsent.learnMore', 'Learn more')}
              </Link>
            </p>
          </div>
          
          <div className="flex gap-3">
            <button
              onClick={handleDecline}
              className="px-4 py-2 text-sm border border-gray-600 rounded-lg hover:bg-gray-800 transition-colors"
            >
              {t('cookieConsent.decline', 'Decline')}
            </button>
            <button
              onClick={handleAccept}
              className="px-4 py-2 text-sm bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
            >
              {t('cookieConsent.accept', 'Accept')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CookieConsent;
