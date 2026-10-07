import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";
import { liveBusinesses } from "@/data/businesses";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(siteConfig.lastUpdated);

  const routes: { path: string; images?: string[] }[] = [
    { path: "/", images: [siteConfig.images.home] },
    { path: "/businesses" },
    ...liveBusinesses.map((business) => ({
      path: `/businesses/${business.slug}`,
      images: business.image ? [business.image.src] : undefined,
    })),
    { path: "/about", images: [siteConfig.images.about] },
    { path: "/contact" },
    { path: "/privacy-policy" },
    { path: "/terms-and-conditions" },
    { path: "/cookie-policy" },
  ];

  return routes.map(({ path, images }) => ({
    url: absoluteUrl(path),
    lastModified,
    ...(images ? { images: images.map((src) => `${siteConfig.url}${src}`) } : {}),
  }));
}
