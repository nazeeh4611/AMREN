import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getBusiness } from "@/data/businesses";

/**
 * Three slanted photo panels. Each panel fills the whole collage box and is cut to
 * its own region with clip-path, so the diagonal gaps between panels stay aligned.
 */
const panels = [
  {
    id: "digital" as const,
    href: "/businesses/amren-digital",
    subtitle: "Digital Marketing & Web Solutions",
    clip: "polygon(27% 0, 100% 0, 100% 32%, 3% 60%)",
    label: "left-[24%] top-[30%] sm:left-[22%] sm:top-[31%]",
    sizes: "(min-width: 1024px) 760px, 100vw",
  },
  {
    id: "fresh" as const,
    href: "/businesses/amren-fresh",
    subtitle: "Wholesale Fruits & Vegetables",
    clip: "polygon(4% 64.5%, 66% 47.5%, 56% 100%, 0 100%)",
    label: "bottom-[6%] left-[7%]",
    sizes: "(min-width: 1024px) 520px, 70vw",
  },
  {
    id: "store" as const,
    href: "/businesses#amren-store",
    subtitle: "E-commerce & Retail",
    clip: "polygon(70.5% 46.2%, 100% 38%, 100% 100%, 60.5% 100%)",
    label: "bottom-[6%] left-[64%] right-[3%]",
    sizes: "(min-width: 1024px) 380px, 50vw",
  },
];

export default function HeroCollage() {
  return (
    <div className="relative h-[440px] w-full sm:h-[560px] lg:h-full lg:min-h-[680px]">
      {panels.map((panel, index) => {
        const business = getBusiness(panel.id);
        return (
          <Link
            key={panel.id}
            href={panel.href}
            aria-label={`${business.name}: ${panel.subtitle}`}
            className="group absolute inset-0 overflow-hidden"
            style={{ clipPath: panel.clip }}
          >
            {business.image && (
              <Image
                src={business.image.src}
                alt={business.image.alt}
                fill
                loading="eager"
                fetchPriority={index === 0 ? "high" : "auto"}
                sizes={panel.sizes}
                className="object-cover transition-transform duration-700 ease-premium group-hover:scale-[1.03]"
              />
            )}
            <span
              className={`absolute ${panel.label} block max-w-[36%] text-white [text-shadow:0_1px_14px_rgb(0_0_0)]`}
            >
              <span className="block text-lg font-semibold leading-tight sm:text-2xl">{business.name}</span>
              <span className="mt-1 block text-xs sm:text-sm">{panel.subtitle}</span>
              <span className="mt-3 flex h-9 w-9 items-center justify-center rounded-full border-2 border-white transition-colors duration-200 group-hover:bg-sand group-hover:text-ink sm:h-10 sm:w-10">
                <ArrowRight size={16} aria-hidden="true" />
              </span>
            </span>
          </Link>
        );
      })}
    </div>
  );
}
