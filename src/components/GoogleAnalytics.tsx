
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface GoogleAnalyticsProps {
  measurementId: string;
}

function GoogleAnalytics({ measurementId }: GoogleAnalyticsProps) {
  const location = useLocation();
  const [consentGiven, setConsentGiven] = useState(false);

  // Check cookie consent on mount and when it changes
  useEffect(() => {
    const checkConsent = () => {
      const consent = localStorage.getItem('cookie_consent');
      setConsentGiven(consent === 'accepted');
    };

    // Check initial consent
    checkConsent();

    // Listen for storage changes (when consent is given in another tab or after reload)
    window.addEventListener('storage', checkConsent);
    
    return () => {
      window.removeEventListener('storage', checkConsent);
    };
  }, []);

  // Track page views when location changes (only if consent given)
  useEffect(() => {
    if (consentGiven && window.gtag) {
      window.gtag('config', measurementId, {
        page_path: location.pathname + location.search,
      });
    }
  }, [location, measurementId, consentGiven]);

  // Load gtag script only if consent is given
  useEffect(() => {
    if (!consentGiven) {
      console.log('[GoogleAnalytics] Consent not given - script not loaded');
      return;
    }

    // Check if script already loaded
    if (window.gtag) {
      console.log('[GoogleAnalytics] Script already loaded');
      return;
    }

    console.log('[GoogleAnalytics] Loading script - consent given');

    // Load gtag script
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    script.async = true;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', measurementId, {
      send_page_view: false, // We'll handle page views manually
    });

    return () => {
      // Note: We don't remove the script on unmount as it needs to persist
      // across route changes. It's only loaded once per session after consent.
    };
  }, [measurementId, consentGiven]);

  return null;
}

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export default GoogleAnalytics;
