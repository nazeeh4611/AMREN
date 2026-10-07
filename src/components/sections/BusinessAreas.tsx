import { businesses } from "@/data/businesses";
import BusinessCard from "@/components/cards/BusinessCard";
import SectionLabel from "@/components/ui/SectionLabel";

type BusinessAreasProps = {
  showHeader?: boolean;
};

export default function BusinessAreas({ showHeader = true }: BusinessAreasProps) {
  return (
    <section id="businesses" className={showHeader ? "section-pad bg-brand" : "section-pad bg-sand"} aria-labelledby={showHeader ? "businesses-heading" : undefined}>
      <div className="container-amren">
        {showHeader && (
          <div className="mb-12 grid gap-6 md:grid-cols-2 md:items-end">
            <div>
              <SectionLabel light>What We Do</SectionLabel>
              <h2
                id="businesses-heading"
                className="mt-4 text-balance text-3xl font-semibold tracking-tight text-warmwhite sm:text-4xl"
              >
                Our businesses
              </h2>
            </div>
            <p className="text-pretty text-base leading-relaxed text-mist md:justify-self-end md:max-w-md">
              Two operating businesses and one in development, each focused on a single market.
            </p>
          </div>
        )}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {businesses.map((business) => (
            <BusinessCard key={business.id} business={business} headingLevel={showHeader ? "h3" : "h2"} />
          ))}
        </div>
      </div>
    </section>
  );
}
