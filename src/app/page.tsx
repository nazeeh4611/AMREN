import Image from "next/image";
import { buildMetadata, itemListJsonLd, webPageJsonLd } from "@/lib/seo";
import { businesses } from "@/data/businesses";
import { principles } from "@/data/company";
import { siteConfig } from "@/data/site";
import { Building2, ShieldCheck, TrendingUp, Users } from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import HeroCollage from "@/components/hero/HeroCollage";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import BusinessAreas from "@/components/sections/BusinessAreas";
import ContactCTA from "@/components/sections/ContactCTA";

const title = "AMREN Ventures | Digital Marketing & Fresh Produce in the UAE";
const description =
  "AMREN Ventures LLC is a UAE company operating businesses in digital marketing and web development, and fresh fruit and vegetable supply, serving clients across the UAE.";

export const metadata = buildMetadata({ title, description, path: "/", absoluteTitle: true });

const highlights = [
  { icon: Building2, title: "3+", text: "Businesses" },
  { icon: Users, title: "UAE", text: "Focused Operations" },
  { icon: TrendingUp, title: "Long-Term", text: "Growth Driven" },
  { icon: ShieldCheck, title: "Trusted", text: "By Partners & Clients" },
];

export default function HomePage() {
  return (
    <>
      <JsonLd nodes={[webPageJsonLd({ name: title, description, path: "/" }), itemListJsonLd(businesses)]} />

      {/* Hero */}
      <section className="px-3 pt-[104px] md:px-4">
        <div className="overflow-hidden rounded-3xl bg-brand md:rounded-[40px]">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch lg:gap-6">
            <div className="self-center px-6 pb-4 pt-14 sm:px-10 md:pt-20 lg:py-24 lg:pl-16 xl:pl-[max(4rem,calc((100vw-1280px)/2+2rem))]">
              <SectionLabel light className="text-base font-semibold tracking-wide">
                AMREN VENTURES LLC
              </SectionLabel>
              <h1 className="mt-5 text-[3.25rem] font-bold leading-[0.98] tracking-[-0.04em] text-warmwhite sm:text-7xl xl:text-[5.75rem]">
                Different businesses. <span className="text-gold">One vision.</span>
              </h1>
              <p className="mt-7 max-w-md text-pretty text-lg leading-relaxed text-mist md:text-xl">
                Building and operating businesses across the United Arab Emirates, from digital
                solutions to wholesale supply and commerce.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <Button href="/businesses" variant="gold" className="px-7 py-3.5 text-base">
                  Explore Our Businesses
                </Button>
                <Button href="/about" variant="outline-light" showArrow={false} className="px-7 py-3.5 text-base">
                  Learn About Us
                </Button>
              </div>
            </div>
            <HeroCollage />
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section aria-label="Company highlights" className="bg-sand">
        <ul className="container-amren grid grid-cols-2 gap-y-8 py-10 md:py-12 lg:grid-cols-4 lg:divide-x lg:divide-line">
          {highlights.map(({ icon: Icon, title, text }) => (
            <li key={title} className="flex items-center justify-center gap-4 px-4">
              <Icon size={34} strokeWidth={1.5} className="shrink-0 text-gold-dark" aria-hidden="true" />
              <span>
                <span className="block text-xl font-semibold text-brand">{title}</span>
                <span className="block text-sm text-muted">{text}</span>
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Company overview */}
      <section className="section-pad bg-sand" aria-labelledby="overview-heading">
        <div className="container-amren grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl">
            <Image
              src={siteConfig.images.home}
              alt="Aerial view of the UAE coastline"
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionLabel>Who We Are</SectionLabel>
            <h2 id="overview-heading" className="mt-4 text-balance text-3xl font-semibold tracking-tight text-brand sm:text-4xl">
              Practical businesses, built with purpose
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
              <p>
                AMREN Ventures was established to build and operate businesses that solve
                everyday problems for companies across the region.
              </p>
              <p>
                Each business is run by its own dedicated team and held to shared standards for
                quality, reliability and straightforward service.
              </p>
            </div>
            <div className="mt-8">
              <Button href="/about" variant="outline">
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      <BusinessAreas />

      {/* Approach */}
      <section className="section-pad bg-sand" aria-labelledby="approach-heading">
        <div className="container-amren">
          <SectionLabel>Our Approach</SectionLabel>
          <h2 id="approach-heading" className="mt-4 max-w-2xl text-balance text-3xl font-semibold tracking-tight text-brand sm:text-4xl">
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

      <ContactCTA />
    </>
  );
}
