import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import PageHero from "@/components/sections/PageHero";
import LegalContent from "@/components/sections/LegalContent";

export const metadata = buildMetadata({
  title: "Cookie Policy",
  description: "How AMREN Ventures LLC uses cookies and similar technologies.",
  path: "/cookie-policy",
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Cookie Policy", path: "/cookie-policy" },
];

export default function CookiePolicyPage() {
  return (
    <>
      <JsonLd nodes={[breadcrumbJsonLd(breadcrumbs)]} />
      <PageHero breadcrumbs={breadcrumbs} label="Legal" title="Cookie Policy" />
      <LegalContent
        updated="September 2026"
        sections={[
          {
            heading: "What Are Cookies",
            body: [
              "Cookies are small text files stored on your device that help websites function and, where enabled, help site owners understand how their website is used.",
            ],
          },
          {
            heading: "How We Use Cookies",
            body: [
              "This website may use essential cookies required for basic functionality, and analytics cookies to understand aggregate website usage.",
              "Analytics cookies, such as those set by Google Analytics, collect aggregate information about how visitors use the website. They do not identify you personally.",
            ],
          },
          {
            heading: "Managing Cookies",
            body: [
              "Most browsers allow you to control cookies through their settings, including blocking or deleting cookies. Restricting cookies may affect the functionality of this website.",
            ],
          },
          {
            heading: "Contact",
            body: [
              "If you have questions about this cookie policy, please contact AMREN Ventures LLC through the contact form on this website.",
            ],
          },
        ]}
      />
    </>
  );
}
