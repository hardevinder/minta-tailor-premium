import type { MetadataRoute } from "next";
import { galleryCategories, services } from "@/data/site";
export default function sitemap(): MetadataRoute.Sitemap {const base=process.env.NEXT_PUBLIC_SITE_URL||"https://mintatailor.example";return ["","/services","/gallery","/about","/contact",...services.map(s=>`/services/${s.slug}`),...galleryCategories.map(c=>`/gallery/${c.slug}`)].map(url=>({url:`${base}${url}`,lastModified:new Date(),changeFrequency:url===""?"weekly":"monthly",priority:url===""?1:.7}));}
