import type { Metadata } from "next";
import { business } from "@/data/site";

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://mintatailor.example"
).replace(/\/$/, "");

const defaultDescription =
  "Custom tailoring for pant coats, sherwanis, kurta pajamas, shirts, trousers and alterations in Kharar, Punjab.";

const defaultKeywords = [
  "tailor in Kharar",
  "custom tailor Kharar",
  "Minta Tailor",
  "pant coat stitching",
  "sherwani tailor",
  "mens tailor Kharar",
];

type PageMetadata = {
  title: string;
  description?: string;
  path?: string;
  keywords?: string[];
  image?: string;
};

export function createMetadata({
  title,
  description = defaultDescription,
  path = "/",
  keywords = [],
  image = "/og-cover.svg",
}: PageMetadata): Metadata {
  const canonicalPath = path.startsWith("/") ? path : `/${path}`;
  const socialTitle = `${title} | ${business.shortName}`;

  return {
    title,
    description,
    keywords: [...new Set([...defaultKeywords, ...keywords])],
    alternates: { canonical: canonicalPath },
    openGraph: {
      title: socialTitle,
      description,
      url: canonicalPath,
      siteName: business.name,
      locale: "en_IN",
      type: "website",
      images: [{ url: image, alt: `${business.name} — ${title}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#business`,
    name: business.name,
    description: defaultDescription,
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    image: `${siteUrl}/og-cover.svg`,
    telephone: `+${business.phoneRaw}`,
    foundingDate: business.established,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Civil Hospital Road",
      addressLocality: "Kharar",
      addressRegion: "Punjab",
      addressCountry: "IN",
    },
    areaServed: {
      "@type": "City",
      name: "Kharar",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "09:00",
      closes: "22:00",
    },
  };
}
