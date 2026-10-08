import Image from "next/image";
import { breadcrumbJsonLd, buildMetadata, webPageJsonLd } from "@/lib/seo";
import { principles } from "@/data/company";
import { siteConfig } from "@/data/site";
import JsonLd from "@/components/seo/JsonLd";
import PageHero from "@/components/sections/PageHero";
import ContactCTA from "@/components/sections/ContactCTA";
import SectionLabel from "@/components/ui/SectionLabel";

const title = "About Us: UAE Digital & Fresh Supply Company";
const description =
  "AMREN Ventures LLC is a UAE company that operates AMREN Digital and AMREN Fresh. Learn how we work and the businesses we serve across the UAE.";
const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
];

const companyDetails = [
  { term: "Registered name", value: siteConfig.legalName },
  { term: "Registered office", value: `${siteConfig.location.street}, ${siteConfig.location.city}, UAE` },
  { term: "Sectors", value: "Digital services, fresh produce supply, e-commerce" },
  { term: "Areas served", value: "All seven emirates of the UAE" },
];

export const metadata = buildMetadata({
  title,
  description,
  path: "/about",
  keywords: ["about AMREN Ventures", "AMREN Ventures LLC Sharjah", "Sharjah Media City", "UAE business group"],
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        nodes={[
          webPageJsonLd({ name: title, description, path: "/about", type: "AboutPage" }),
          breadcrumbJsonLd(breadcrumbs),
        ]}
      />

      <PageHero
        breadcrumbs={breadcrumbs}
        label="About Us"
        title="About AMREN Ventures"
        description="A UAE company that builds and operates focused businesses for the UAE market."
      />

      <section className="section-pad bg-sand">
        <div className="container-amren grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-white">
            <div className="absolute inset-[12%]">
              <Image
                src={siteConfig.images.about}
                alt="AMREN Ventures logo"
                fill
                unoptimized
                sizes="(min-width: 1024px) 440px, 80vw"
                className="object-contain"
              />
            </div>
          </div>
          <div>
            <SectionLabel>Who We Are</SectionLabel>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-brand sm:text-4xl">
              One company, separate businesses, one standard
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
              <p>
                {siteConfig.legalName} is registered in {siteConfig.location.street}, United Arab
                Emirates. The company owns and operates businesses in digital services and fresh
                produce supply, and is developing an e-commerce platform.
              </p>
              <p>
                Rather than offering a long list of loosely connected services, AMREN builds
                businesses that each serve a specific market well.
              </p>
              <p>
                Each business is run by its own team with direct accountability to its clients,
                supported by shared standards, systems and management from AMREN Ventures.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-brand">
        <div className="container-amren">
          <SectionLabel light>Our Approach</SectionLabel>
          <h2 className="mt-4 max-w-2xl text-balance text-3xl font-semibold tracking-tight text-warmwhite sm:text-4xl">
            The principles behind every AMREN business
          </h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((item) => (
              <div key={item.title} className="rounded-3xl border border-line bg-sand p-7">
                <h3 className="text-lg font-semibold text-brand">{item.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-sand">
        <div className="container-amren grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <SectionLabel>Company Details</SectionLabel>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-brand sm:text-4xl">
              Company information
            </h2>
          </div>
          <dl className="divide-y divide-line rounded-3xl border border-line bg-sand px-7">
            {companyDetails.map((item) => (
              <div key={item.term} className="grid gap-1 py-5 sm:grid-cols-[170px_1fr] sm:gap-6">
                <dt className="text-sm text-muted">{item.term}</dt>
                <dd className="text-sm font-medium text-brand">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
