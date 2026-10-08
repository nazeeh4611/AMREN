import Image from "next/image";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import {
  breadcrumbJsonLd,
  buildMetadata,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from "@/lib/seo";
import { getBusinessBySlug, liveBusinesses } from "@/data/businesses";
import JsonLd from "@/components/seo/JsonLd";
import PageHero from "@/components/sections/PageHero";
import Faq from "@/components/sections/Faq";
import ContactCTA from "@/components/sections/ContactCTA";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return liveBusinesses.map((business) => ({ slug: business.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const business = getBusinessBySlug(slug);
  if (!business?.seo) return {};
  return buildMetadata({
    title: business.seo.title,
    description: business.seo.description,
    path: `/businesses/${business.slug}`,
    keywords: business.seo.keywords,
    absoluteTitle: true,
  });
}

export default async function BusinessPage({ params }: Props) {
  const { slug } = await params;
  const business = getBusinessBySlug(slug);
  if (!business) notFound();

  const path = `/businesses/${business.slug}`;
  const domain = new URL(business.href).host;
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Our Businesses", path: "/businesses" },
    { name: business.name, path },
  ];

  return (
    <>
      <JsonLd
        nodes={[
          webPageJsonLd({ name: business.seo?.title ?? business.name, description: business.description, path }),
          breadcrumbJsonLd(breadcrumbs),
          serviceJsonLd(business),
          ...(business.faqs ? [faqJsonLd(business.faqs)] : []),
        ]}
      />

      <PageHero
        breadcrumbs={breadcrumbs}
        label={business.category}
        title={business.name}
        description={business.description}
      >
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Button href={business.href} external variant="gold">
            Visit {domain}
          </Button>
        </div>
      </PageHero>

      <section className="section-pad bg-sand">
        <div className="container-amren grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionLabel>Overview</SectionLabel>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-brand sm:text-4xl">
              About {business.name}
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
              {business.overview?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            {business.audience && (
              <>
                <h3 className="mt-10 text-lg font-semibold text-brand">Who we work with</h3>
                <ul className="mt-4 space-y-3">
                  {business.audience.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-base text-muted">
                      <Check size={18} className="mt-0.5 shrink-0 text-gold-dark" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
          {business.image && (
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-white">
              <div className="absolute inset-[12%]">
                <Image
                  src={business.image.src}
                  alt={business.image.alt}
                  fill
                  sizes="(min-width: 1024px) 440px, 80vw"
                  unoptimized
                  className="object-contain"
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {business.services && (
        <section className="section-pad bg-brand" aria-labelledby="services-heading">
          <div className="container-amren">
            <SectionLabel light>Services</SectionLabel>
            <h2 id="services-heading" className="mt-4 max-w-2xl text-balance text-3xl font-semibold tracking-tight text-warmwhite sm:text-4xl">
              What {business.name} offers
            </h2>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {business.services.map((service) => (
                <div key={service.title} className="rounded-3xl border border-line bg-sand p-7">
                  <h3 className="text-lg font-semibold text-brand">{service.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {business.faqs && <Faq title="Frequently asked questions" faqs={business.faqs} />}


      <ContactCTA />
    </>
  );
}
