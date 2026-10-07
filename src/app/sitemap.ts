import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";
import { liveBusinesses } from "@/data/businesses";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(siteConfig.lastUpdated);

  const routes: { path: string; priority: number; changeFrequency: "weekly" | "monthly" | "yearly"; images?: string[] }[] = [
    { path: "/", priority: 1, changeFrequency: "weekly", images: [siteConfig.images.home] },
    { path: "/businesses", priority: 0.9, changeFrequency: "monthly" },
    ...liveBusinesses.map((business) => ({
      path: `/businesses/${business.slug}`,
      priority: 0.9,
      changeFrequency: "monthly" as const,
      images: business.image ? [business.image.src] : undefined,
    })),
    { path: "/about", priority: 0.8, changeFrequency: "monthly", images: [siteConfig.images.about] },
    { path: "/contact", priority: 0.8, changeFrequency: "yearly" },
    { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/terms-and-conditions", priority: 0.3, changeFrequency: "yearly" },
    { path: "/cookie-policy", priority: 0.3, changeFrequency: "yearly" },
  ];

  return routes.map(({ path, priority, changeFrequency, images }) => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency,
    priority,
    ...(images ? { images: images.map((src) => `${siteConfig.url}${src}`) } : {}),
  }));
}
