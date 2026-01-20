
import React, { createContext, useContext, ReactNode } from 'react';

interface AnalyticsContextType {
  trackEvent: (eventName: string, eventParams?: Record<string, any>) => void;
  trackConversion: (conversionName: string, value?: number) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

interface AnalyticsProviderProps {
  children: ReactNode;
}

export function AnalyticsProvider({ children }: AnalyticsProviderProps) {
  const trackEvent = (eventName: string, eventParams: Record<string, any> = {}) => {
    const consent = localStorage.getItem('cookie_consent');
    if (consent !== 'accepted') {
      console.log('[Analytics] Event blocked - no consent:', eventName);
      return;
    }

    if (window.gtag) {
      window.gtag('event', eventName, eventParams);
      console.log('[Analytics] Event tracked:', eventName, eventParams);
    }
  };

  const trackConversion = (conversionName: string, value: number = 0) => {
    trackEvent('conversion', {
      conversion_name: conversionName,
      value: value,
      currency: 'USD',
    });
  };

  return (
    <AnalyticsContext.Provider value={{ trackEvent, trackConversion }}>
      {children}
    </AnalyticsContext.Provider>
  );
}

export function useAnalytics() {
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalytics must be used within AnalyticsProvider');
  }
  return context;
}
