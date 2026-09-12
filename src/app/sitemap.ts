import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { rooms } from "@/data/rooms";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/rooms",
    "/experience",
    "/location",
    "/reviews",
    "/faq",
    "/gallery",
    "/contact",
    ...rooms.map((room) => `/rooms/${room.slug}`),
  ];

  return routes.flatMap((route) => {
    const en = `${siteConfig.url}${route}`;
    const ar = `${siteConfig.url}/ar${route}`;
    return [
      {
        url: en,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: route === "" ? 1 : 0.7,
        alternates: { languages: { en, ar } },
      },
      {
        url: ar,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: route === "" ? 0.9 : 0.6,
        alternates: { languages: { en, ar } },
      },
    ];
  });
}
