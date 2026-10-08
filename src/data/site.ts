export const siteConfig = {
  name: "AMREN Ventures",
  legalName: "AMREN VENTURES LLC",
  shortName: "AMREN",
  url: "https://amren.ae",
  description:
    "AMREN Ventures is a UAE company operating AMREN Digital, a digital marketing and web development agency, and AMREN Fresh, a fresh fruit and vegetable supplier serving businesses across the UAE.",
  slogan: "Different businesses. One vision.",
  // Core brand and service keywords, merged into every page's keywords.
  keywords: [
    "AMREN Ventures",
    "AMREN Ventures LLC",
    "AMREN UAE",
    "AMREN Digital",
    "AMREN Fresh",
    "AMREN Store",
    "UAE company",
    "Sharjah Media City company",
    "digital marketing UAE",
    "fresh produce supplier UAE",
  ],
  location: {
    street: "Sharjah Media City",
    city: "Sharjah",
    region: "Sharjah",
    country: "United Arab Emirates",
    countryCode: "AE",
  },
  // Shown on the contact page, footer and structured data. Remove a value to hide it.
  contact: {
    email: "hello@amren.ae",
    phones: ["+971 50 587 5088", "+971 56 885 7443"],
  },
  areaServed: ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Ras Al Khaimah", "Fujairah", "Umm Al Quwain"],
  links: {
    digital: "https://digital.amren.ae/",
    fresh: "https://fresh.amren.ae/",
    store: "https://store.amren.ae/",
  },
  // All site images live in /public/images. Replace a file with the same name to update it.
  images: {
    logo: "/images/logo/amren-ventures-logo.svg",
    logoWhite: "/images/logo/amren-ventures-logo-white.webp",
    icon: "/images/logo/amren-ventures-icon.png",
    og: "/images/og/amren-ventures-og.jpg",
    home: "/images/home/amren-ventures-who-we-are.webp",
    about: "/images/about/amren-ventures-about.webp",
  },
  // Bump when page content changes materially; used for sitemap lastModified.
  lastUpdated: "2026-10-07",
};

export type SiteConfig = typeof siteConfig;
