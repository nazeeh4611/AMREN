import type { Metadata, Viewport } from "next";
import { Google_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { siteConfig } from "@/data/site";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { GA_ID } from "@/lib/analytics";

const googleSans = Google_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "AMREN Ventures | Digital Marketing & Fresh Produce in the UAE",
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.legalName, url: siteConfig.url }],
  creator: siteConfig.legalName,
  publisher: siteConfig.legalName,
  category: "business",
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [{ url: siteConfig.images.og, width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    images: [siteConfig.images.og],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || undefined,
    ...(process.env.BING_SITE_VERIFICATION
      ? { other: { "msvalidate.01": process.env.BING_SITE_VERIFICATION } }
      : {}),
  },
  formatDetection: { telephone: true, email: true, address: false },
  icons: {
    icon: siteConfig.images.icon,
    apple: siteConfig.images.icon,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#48182F",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AE" className={googleSans.variable}>
      <body className="font-sans antialiased bg-sand text-charcoal">
        <JsonLd nodes={[organizationJsonLd(), websiteJsonLd()]} />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-brand focus:text-warmwhite focus:px-4 focus:py-2 focus:rounded-md focus:text-sm"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
