import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

// Intrinsic sizes of the logo files, so the browser keeps their real proportions.
const variants = {
  dark: { src: siteConfig.images.logo, width: 1897, height: 632 },
  light: { src: siteConfig.images.logoWhite, width: 1469, height: 389 },
};

export default function Logo({ light = false, className }: { light?: boolean; className?: string }) {
  const logo = light ? variants.light : variants.dark;
  return (
    <Link href="/" aria-label="AMREN Ventures home" className={cn("inline-flex items-center", className)}>
      <Image
        src={logo.src}
        alt={siteConfig.name}
        width={logo.width}
        height={logo.height}
        unoptimized
        className="h-12 w-auto md:h-14"
      />
    </Link>
  );
}
