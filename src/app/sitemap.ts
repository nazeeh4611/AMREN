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
    // Legal pages stay live and linked from the footer, but are left out of
    // the sitemap: it lists only the pages we want ranking.
  ];

  return routes.map(({ path, images }) => ({
    url: absoluteUrl(path),
    lastModified,
    ...(images ? { images: images.map((src) => `${siteConfig.url}${src}`) } : {}),
  }));
}
