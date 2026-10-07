import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#48182F",
    theme_color: "#48182F",
    icons: [
      { src: siteConfig.images.icon, sizes: "512x512", type: "image/png" },
    ],
  };
}
