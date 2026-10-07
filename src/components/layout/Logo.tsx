import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export default function Logo({ light = false, className }: { light?: boolean; className?: string }) {
  return (
    <Link href="/" aria-label="AMREN Ventures home" className={cn("inline-flex items-center", className)}>
      <Image
        src={light ? siteConfig.images.logoWhite : siteConfig.images.logo}
        alt={siteConfig.name}
        width={200}
        height={48}
        unoptimized
        className="h-12 w-auto md:h-[52px]"
      />
    </Link>
  );
}
