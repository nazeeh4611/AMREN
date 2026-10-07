import Breadcrumbs, { type Crumb } from "@/components/seo/Breadcrumbs";
import SectionLabel from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  label?: string;
  title: React.ReactNode;
  description?: string;
  breadcrumbs: Crumb[];
  theme?: "light" | "dark";
  children?: React.ReactNode;
};

export default function PageHero({
  label,
  title,
  description,
  breadcrumbs,
  theme = "dark",
  children,
}: PageHeroProps) {
  const isDark = theme === "dark";

  return (
    <section className="px-3 pt-[104px] md:px-4">
      <div
        className={cn(
          "relative overflow-hidden rounded-3xl pb-14 pt-10 md:rounded-[40px] md:pb-20 md:pt-14",
          isDark ? "bg-brand" : "bg-ivory"
        )}
      >
        <div className="container-amren relative">
          <Breadcrumbs items={breadcrumbs} light={isDark} />
          {label && (
            <SectionLabel light={isDark} className="mt-10">
              {label}
            </SectionLabel>
          )}
          <h1
            className={cn(
              "max-w-4xl text-balance text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl",
              label ? "mt-4" : "mt-10",
              isDark ? "text-warmwhite" : "text-brand"
            )}
          >
            {title}
          </h1>
          {description && (
            <p
              className={cn(
                "mt-6 max-w-2xl text-pretty text-lg leading-relaxed",
                isDark ? "text-mist" : "text-muted"
              )}
            >
              {description}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
