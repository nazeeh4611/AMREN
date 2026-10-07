import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import PageHero from "@/components/sections/PageHero";
import LegalContent from "@/components/sections/LegalContent";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: "How AMREN Ventures LLC collects, uses and protects information.",
  path: "/privacy-policy",
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Privacy Policy", path: "/privacy-policy" },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd nodes={[breadcrumbJsonLd(breadcrumbs)]} />
      <PageHero breadcrumbs={breadcrumbs} label="Legal" title="Privacy Policy" />
      <LegalContent
        updated="September 2026"
        sections={[
          {
            heading: "Overview",
            body: [
              "AMREN Ventures LLC (“AMREN”, “we”, “us”) respects your privacy. This policy explains how information may be collected and used when you interact with this website.",
            ],
          },
          {
            heading: "Information We Collect",
            body: [
              "When you submit our contact form, we may collect information you choose to provide, such as your name, email address, phone number, company and message.",
              "We may also collect standard technical information, such as browser type and general usage data, to help us understand how the website is used.",
            ],
          },
          {
            heading: "How Information Is Used",
            body: [
              "Information submitted through this website is used to respond to your inquiry and to communicate with you about the services you have requested.",
              "We do not sell personal information to third parties.",
            ],
          },
          {
            heading: "Analytics",
            body: [
              "This website may use Google Analytics to understand how visitors use the site in aggregate, such as which pages are viewed most. Analytics data does not identify you personally and is used only to improve the website.",
            ],
          },
          {
            heading: "Third-Party Websites",
            body: [
              "This website links to AMREN Digital, AMREN Fresh and AMREN Store, which may operate under their own privacy practices. We encourage you to review the privacy policy of any site you visit.",
            ],
          },
          {
            heading: "Contact",
            body: [
              "If you have questions about this policy, please contact AMREN Ventures LLC through the contact form on this website.",
            ],
          },
        ]}
      />
    </>
  );
}
