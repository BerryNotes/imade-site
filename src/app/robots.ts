import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap:
      "https://imade-site-git-master-berrynotes-projects.vercel.app/sitemap.xml",
  };
}
