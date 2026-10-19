import { breadcrumbJsonLd, buildMetadata, itemListJsonLd, webPageJsonLd } from "@/lib/seo";
import Link from "next/link";
import { businesses, liveBusinesses } from "@/data/businesses";
import SectionLabel from "@/components/ui/SectionLabel";
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

export const metadata = buildMetadata({
  title,
  description,
  path: "/businesses",
  keywords: ["AMREN businesses", "UAE digital marketing agency", "UAE fresh produce supplier", "e-commerce UAE"],
});

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

      <section className="section-pad bg-ivory" aria-labelledby="overview-heading">
        <div className="container-amren">
          <SectionLabel>Overview</SectionLabel>
          <h2 id="overview-heading" className="mt-4 max-w-2xl text-balance text-3xl font-semibold tracking-tight text-brand sm:text-4xl">
            What each business does
          </h2>
          <div className="mt-12 grid gap-12 lg:grid-cols-2">
            {liveBusinesses.map((business) => (
              <article key={business.id}>
                <p className="text-sm text-muted">{business.category}</p>
                <h3 className="mt-1 text-2xl font-semibold tracking-tight text-brand">{business.name}</h3>
                <p className="mt-4 text-base leading-relaxed text-charcoal">{business.description}</p>
                {business.audience && (
                  <>
                    <p className="mt-6 text-sm font-medium text-brand">Who it serves</p>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-[15px] text-charcoal">
                      {business.audience.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </>
                )}
                <p className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium">
                  <Link href={`/businesses/${business.slug}`} className="text-brand underline underline-offset-4">
                    About {business.name}
                  </Link>
                  <a href={business.href} target="_blank" rel="noopener" className="text-brand underline underline-offset-4">
                    Visit {new URL(business.href).host}
                  </a>
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
