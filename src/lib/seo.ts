import type { Metadata } from "next";
import { business, type Service } from "@/data/site";
import type { LocationPage } from "@/data/locations";
import type { SearchIntentPage } from "@/data/searchIntents";
import type { Guide } from "@/data/guides";

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://mintatailor.in"
).replace(/\/$/, "");

export const defaultDescription =
  "Minta Tailor and Drapers is a Kharar-based gents tailor for made-to-measure pant coats, suits, wedding sherwanis, kurta pajamas, shirts, trousers and alterations, serving Mohali and clients across Punjab.";

export const defaultKeywords = [
  "gents tailor in Kharar",
  "tailor in Kharar",
  "custom tailor Kharar",
  "Minta Tailor Kharar",
  "pant coat tailor Kharar",
  "sherwani tailor Kharar",
  "mens tailor Kharar",
  "gents tailor Mohali",
  "tailor Punjab",
  "wedding tailor Punjab",
];

export const localAreas = ["Kharar", "SAS Nagar", "Mohali", "Landran", "Kurali", "Morinda"];

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
  const areaServed = [
    ...localAreas.map((name) => ({ "@type": "City", name })),
    { "@type": "AdministrativeArea", name: "Punjab" },
  ];

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
        slogan: business.tagline,
        priceRange: "₹₹",
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
    areaServed: [
      ...localAreas.map((name) => ({ "@type": "City", name })),
      { "@type": "AdministrativeArea", name: "Punjab" },
    ],
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


export function locationJsonLd(location: LocationPage) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}/locations/${location.slug}#service-area`,
    name: `Gents tailoring for clients from ${location.name}`,
    description: location.intro,
    url: `${siteUrl}/locations/${location.slug}`,
    provider: { "@id": `${siteUrl}/#business` },
    areaServed: {
      "@type": "Place",
      name: `${location.name}, Punjab`,
    },
    serviceType: "Made-to-measure gents tailoring",
  };
}


export function searchIntentJsonLd(page: SearchIntentPage, service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}/tailoring/${page.slug}#service`,
    name: page.title.split(" | ")[0],
    description: page.description,
    url: `${siteUrl}/tailoring/${page.slug}`,
    provider: { "@id": `${siteUrl}/#business` },
    serviceType: service.title,
    areaServed: page.relatedLocationSlugs.includes("mohali")
      ? [
          { "@type": "City", name: "Kharar" },
          { "@type": "City", name: "Mohali" },
          { "@type": "AdministrativeArea", name: "Punjab" },
        ]
      : [
          { "@type": "City", name: "Kharar" },
          { "@type": "AdministrativeArea", name: "Punjab" },
        ],
    offers: {
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: service.title },
    },
  };
}


export function articleJsonLd(guide: Guide) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${siteUrl}/guides/${guide.slug}#article`,
    headline: guide.title,
    description: guide.description,
    url: `${siteUrl}/guides/${guide.slug}`,
    author: { "@id": `${siteUrl}/#business` },
    publisher: { "@id": `${siteUrl}/#business` },
    mainEntityOfPage: `${siteUrl}/guides/${guide.slug}`,
    inLanguage: "en-IN",
    about: guide.keywords,
  };
}
