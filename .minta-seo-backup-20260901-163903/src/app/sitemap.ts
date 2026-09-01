import type { MetadataRoute } from "next";
import { galleryCategories, services } from "@/data/site";
import { siteUrl } from "@/lib/seo";
export default function sitemap(): MetadataRoute.Sitemap {return ["","/services","/gallery","/about","/contact",...services.map(s=>`/services/${s.slug}`),...galleryCategories.map(c=>`/gallery/${c.slug}`)].map(url=>({url:`${siteUrl}${url}`,lastModified:new Date(),changeFrequency:url===""?"weekly":"monthly",priority:url===""?1:.7}));}
