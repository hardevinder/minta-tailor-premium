import type { MetadataRoute } from "next";
import { galleryCategories, services } from "@/data/site";
import { priorityLocations } from "@/data/locations";
import { searchIntentPages } from "@/data/searchIntents";
import { guides } from "@/data/guides";
import { siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/gallery", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/locations", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/tailoring", priority: 0.92, changeFrequency: "monthly" as const },
    { path: "/guides", priority: 0.86, changeFrequency: "monthly" as const },
    { path: "/faq", priority: 0.84, changeFrequency: "monthly" as const },
  ];

  return [
    ...staticPages.map((page) => ({
      url: `${siteUrl}${page.path}`,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
    ...services.map((service) => ({
      url: `${siteUrl}/services/${service.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    ...priorityLocations.map((location) => ({
      url: `${siteUrl}/locations/${location.slug}`,
      changeFrequency: "monthly" as const,
      priority: location.slug === "kharar" ? 0.95 : 0.86,
    })),
    ...searchIntentPages.map((page) => ({
      url: `${siteUrl}/tailoring/${page.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...guides.map((guide) => ({
      url: `${siteUrl}/guides/${guide.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.82,
    })),
    ...galleryCategories.map((category) => ({
      url: `${siteUrl}/gallery/${category.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
