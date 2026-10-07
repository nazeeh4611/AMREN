type AnalyticsEvent = {
  name: string;
  params?: Record<string, string | number | boolean>;
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent({ name, params }: AnalyticsEvent) {
  if (!GA_ID) return;
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", name, params ?? {});
}

export function isAnalyticsEnabled() {
  return Boolean(GA_ID);
}

export { GA_ID };
