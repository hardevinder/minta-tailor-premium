import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { business } from "@/data/site";
import { localBusinessJsonLd, siteUrl } from "@/lib/seo";

const googleSiteVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: `${business.name} | Custom Tailoring in Kharar`, template: `%s | ${business.shortName}` },
  description: "Custom tailoring for pant coats, sherwanis, kurta pajamas, shirts, trousers and alterations in Kharar, Punjab.",
  icons: { icon: "/favicon.svg" },
  ...(googleSiteVerification
    ? { verification: { google: googleSiteVerification } }
    : {}),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = localBusinessJsonLd();
  return <html lang="en"><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} /><Header /><main>{children}</main><Footer /><FloatingWhatsApp /></body></html>;
}
