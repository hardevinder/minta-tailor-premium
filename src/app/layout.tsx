import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { business } from "@/data/site";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mintatailor.example";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: `${business.name} | Custom Tailoring in Kharar`, template: `%s | ${business.shortName}` },
  description: "Premium custom stitching for pant coats, sherwanis, kurta pajamas, shirts, trousers and alterations in Kharar.",
  keywords: ["tailor in Kharar", "pant coat stitching", "sherwani tailor", "Minta Tailor", "custom tailoring Kharar"],
  openGraph: { title: business.name, description: business.tagline, type: "website", locale: "en_IN", images: ["/og-cover.svg"] },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><Header /><main>{children}</main><Footer /></body></html>;
}
