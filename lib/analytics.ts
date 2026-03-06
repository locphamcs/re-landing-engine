export const trackEvent = (eventName: string) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", eventName);
  }
};
