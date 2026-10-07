import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Business } from "@/data/businesses";
import { cn } from "@/lib/utils";

type BusinessCardProps = {
  business: Business;
  headingLevel?: "h2" | "h3";
};

export default function BusinessCard({ business, headingLevel = "h3" }: BusinessCardProps) {
  const Heading = headingLevel;
  const isLive = business.status === "live";

  return (
    <article
      id={business.slug}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-sand p-2",
        isLive && "transition-shadow duration-300"
      )}
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[24px] bg-brand-deep">
        {business.image ? (
          <Image
            src={business.image.src}
            alt={business.image.alt}
            fill
            sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <span className="text-2xl font-medium tracking-tight text-mist">{business.name}</span>
          </div>
        )}
        {!isLive && (
          <span className="absolute left-4 top-4 rounded-full bg-sand px-3 py-1 text-xs font-medium text-brand">
            In development
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5 md:p-6">
        <p className="text-sm text-muted">{business.category}</p>
        <Heading className="mt-1 text-xl font-semibold tracking-tight text-brand">
          {isLive ? (
            <Link href={`/businesses/${business.slug}`} className="after:absolute after:inset-0">
              {business.name}
            </Link>
          ) : (
            business.name
          )}
        </Heading>
        <p className="mt-3 flex-1 text-[15px] leading-relaxed text-charcoal">{business.summary}</p>
        {isLive && (
          <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand">
            Learn more
            <ArrowRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </span>
        )}
      </div>
    </article>
  );
}
