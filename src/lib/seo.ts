import type { Metadata } from "next";
import { business, type Service } from "@/data/site";

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://mintatailor.in"
).replace(/\/$/, "");

export const defaultDescription =
  "Gents tailor in Kharar for made-to-measure pant coats, wedding sherwanis, kurta pajamas, shirts, trousers and alterations. Serving Kharar, SAS Nagar and Mohali.";

export const defaultKeywords = [
  "gents tailor in Kharar",
  "tailor in Kharar",
  "custom tailor Kharar",
  "Minta Tailor Kharar",
  "pant coat tailor Kharar",
  "sherwani tailor Kharar",
  "mens tailor Kharar",
];

export const localAreas = ["Kharar", "SAS Nagar", "Mohali"];

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
  image = "/images/hero-tailor.jpg",
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

export function siteJsonLd() {
  const areaServed = localAreas.map((name) => ({
    "@type": "City",
    name,
  }));

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${siteUrl}/#business`,
        name: business.name,
        alternateName: business.shortName,
        description: defaultDescription,
        url: siteUrl,
        logo: `${siteUrl}/logo.png`,
        image: [
          `${siteUrl}/images/shop-front.jpg`,
          `${siteUrl}/images/hero-tailor.jpg`,
          `${siteUrl}/images/pant-coat.jpg`,
          `${siteUrl}/images/sherwani.jpg`,
        ],
        telephone: `+${business.phoneRaw}`,
        foundingDate: business.established,
        address: {
          "@type": "PostalAddress",
          streetAddress: "Civil Hospital Road",
          addressLocality: "Kharar",
          addressRegion: "Punjab",
          addressCountry: "IN",
        },
        areaServed,
        knowsAbout: [
          "Gents tailoring",
          "Made-to-measure suits",
          "Pant coat stitching",
          "Wedding sherwani tailoring",
          "Kurta pajama stitching",
          "Shirt and trouser tailoring",
          "Garment alterations",
        ],
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
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Gents Tailoring Services",
          itemListElement: [
            "Bespoke Pant & Coat",
            "Wedding Sherwani",
            "Kurta Pajama",
            "Shirts & Trousers",
            "Alterations & Restyling",
            "Fabric & Draping Guidance",
          ].map((name) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: business.name,
        publisher: { "@id": `${siteUrl}/#business` },
        inLanguage: "en-IN",
      },
    ],
  };
}

export function serviceJsonLd(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}/services/${service.slug}#service`,
    name: service.seoHeading,
    description: service.seoDescription,
    url: `${siteUrl}/services/${service.slug}`,
    image: `${siteUrl}${service.image}`,
    provider: { "@id": `${siteUrl}/#business` },
    areaServed: localAreas.map((name) => ({ "@type": "City", name })),
    serviceType: service.title,
  };
}

export function breadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`,
    })),
  };
}
