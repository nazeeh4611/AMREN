import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { businesses, type Business, type FaqItem } from "@/data/businesses";

type PageSeoInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  /** Use the title as-is instead of applying the "| AMREN Ventures" template. */
  absoluteTitle?: boolean;
  noIndex?: boolean;
};

const ORG_ID = `${siteConfig.url}/#organization`;
const WEBSITE_ID = `${siteConfig.url}/#website`;

export const absoluteUrl = (path: string) => `${siteConfig.url}${path === "/" ? "" : path}`;

export function buildMetadata({
  title,
  description,
  path,
  image,
  absoluteTitle = false,
  noIndex = false,
}: PageSeoInput): Metadata {
  const url = absoluteUrl(path);

  const ogImage = image ?? siteConfig.images.og;
  const images = [{ url: ogImage, width: 1200, height: 630, alt: siteConfig.name }];

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_AE",
      type: "website",
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    ...(noIndex ? { robots: { index: false, follow: true } } : {}),
  };
}

function contactFields() {
  const { email, phones } = siteConfig.contact;
  return {
    email,
    telephone: phones[0],
    contactPoint: phones.map((telephone) => ({
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone,
      email,
      areaServed: siteConfig.location.countryCode,
      availableLanguage: ["English"],
    })),
  };
}

const areaServed = [
  { "@type": "Country", name: siteConfig.location.country },
  ...siteConfig.areaServed.map((name) => ({ "@type": "City", name })),
];

export function organizationJsonLd() {
  return {
    "@type": "Organization",
    "@id": ORG_ID,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.url}${siteConfig.images.icon}`,
      width: 512,
      height: 512,
    },
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.location.street,
      addressLocality: siteConfig.location.city,
      addressRegion: siteConfig.location.region,
      addressCountry: siteConfig.location.countryCode,
    },
    areaServed,
    knowsAbout: [
      "Digital marketing",
      "Website development",
      "Search engine optimisation",
      "Social media marketing",
      "Branding",
      "Fresh produce supply",
      "Fruit and vegetable wholesale",
    ],
    subOrganization: businesses
      .filter((b) => b.status === "live")
      .map((b) => ({ "@type": "Organization", name: b.name, url: b.href, description: b.description })),
    sameAs: businesses.filter((b) => b.status === "live").map((b) => b.href),
    ...contactFields(),
  };
}

export function websiteJsonLd() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: siteConfig.name,
    alternateName: [siteConfig.legalName, siteConfig.shortName],
    url: siteConfig.url,
    inLanguage: "en-AE",
    publisher: { "@id": ORG_ID },
  };
}

export function webPageJsonLd({
  name,
  description,
  path,
  type = "WebPage",
}: {
  name: string;
  description: string;
  path: string;
  type?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage";
}) {
  const url = absoluteUrl(path);
  return {
    "@type": type,
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: "en-AE",
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    dateModified: siteConfig.lastUpdated,
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqJsonLd(faqs: FaqItem[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function serviceJsonLd(business: Business) {
  return {
    "@type": "Service",
    "@id": `${absoluteUrl(`/businesses/${business.slug}`)}#service`,
    name: business.name,
    serviceType: business.category,
    description: business.description,
    url: business.href,
    provider: { "@id": ORG_ID },
    areaServed,
    ...(business.image ? { image: `${siteConfig.url}${business.image.src}` } : {}),
    ...(business.services
      ? {
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: `${business.name} services`,
            itemListElement: business.services.map((service) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: service.title, description: service.description },
            })),
          },
        }
      : {}),
  };
}

export function itemListJsonLd(items: Business[]) {
  return {
    "@type": "ItemList",
    itemListElement: items.map((b, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: b.name,
      url: b.status === "live" ? absoluteUrl(`/businesses/${b.slug}`) : b.href,
    })),
  };
}

/** Wraps nodes in a single @graph document. */
export function jsonLdGraph(...nodes: object[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}
