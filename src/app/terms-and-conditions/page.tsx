import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import PageHero from "@/components/sections/PageHero";
import LegalContent from "@/components/sections/LegalContent";

export const metadata = buildMetadata({
  title: "Terms & Conditions",
  description: "The terms and conditions governing use of the AMREN Ventures website.",
  path: "/terms-and-conditions",
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Terms & Conditions", path: "/terms-and-conditions" },
];

export default function TermsPage() {
  return (
    <>
      <JsonLd nodes={[breadcrumbJsonLd(breadcrumbs)]} />
      <PageHero breadcrumbs={breadcrumbs} label="Legal" title="Terms & Conditions" />
      <LegalContent
        updated="September 2026"
        sections={[
          {
            heading: "Acceptance of Terms",
            body: [
              "By accessing this website, you agree to these terms of use. If you do not agree, please discontinue use of the website.",
            ],
          },
          {
            heading: "Use of This Website",
            body: [
              "This website is provided by AMREN Ventures LLC to introduce AMREN Digital, AMREN Fresh and AMREN Store. Content is provided for general informational purposes and may be updated from time to time without notice.",
            ],
          },
          {
            heading: "Intellectual Property",
            body: [
              "The AMREN name, branding and website content are the property of AMREN Ventures LLC unless otherwise stated, and may not be reproduced without permission.",
            ],
          },
          {
            heading: "External Links",
            body: [
              "This website links to AMREN Digital, AMREN Fresh and AMREN Store. AMREN Ventures LLC is not responsible for the content or availability of external websites.",
            ],
          },
          {
            heading: "Limitation of Liability",
            body: [
              "This website is provided on an “as is” basis. AMREN Ventures LLC makes no warranties regarding the completeness or accuracy of information on this website.",
            ],
          },
          {
            heading: "Governing Law",
            body: [
              "These terms are governed by the laws of the Emirate of Sharjah and the federal laws of the United Arab Emirates.",
            ],
          },
        ]}
      />
    </>
  );
}
