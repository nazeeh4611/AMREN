import { breadcrumbJsonLd, buildMetadata, itemListJsonLd, webPageJsonLd } from "@/lib/seo";
import { businesses } from "@/data/businesses";
import JsonLd from "@/components/seo/JsonLd";
import PageHero from "@/components/sections/PageHero";
import BusinessAreas from "@/components/sections/BusinessAreas";
import ContactCTA from "@/components/sections/ContactCTA";

const title = "Our Businesses: AMREN Digital & AMREN Fresh";
const description =
  "AMREN Digital is a UAE digital marketing and web development agency. AMREN Fresh supplies fresh fruit and vegetables to businesses across the UAE.";
const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Our Businesses", path: "/businesses" },
];

export const metadata = buildMetadata({ title, description, path: "/businesses" });

export default function BusinessesPage() {
  return (
    <>
      <JsonLd
        nodes={[
          webPageJsonLd({ name: title, description, path: "/businesses", type: "CollectionPage" }),
          breadcrumbJsonLd(breadcrumbs),
          itemListJsonLd(businesses),
        ]}
      />

      <PageHero
        breadcrumbs={breadcrumbs}
        label="Our Businesses"
        title="The businesses of AMREN Ventures"
        description="AMREN Ventures operates two businesses serving UAE companies, with a third in development. Each has its own team, website and customers."
      />

      <BusinessAreas showHeader={false} />
      <ContactCTA />
    </>
  );
}
