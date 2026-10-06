export type LocationPage = {
  slug: string;
  name: string;
  regionLabel: string;
  intro: string;
  localAngle: string;
  nearby: string[];
  keywords: string[];
};

export const priorityLocations: LocationPage[] = [
  {
    slug: "kharar",
    name: "Kharar",
    regionLabel: "SAS Nagar (Mohali), Punjab",
    intro: "Minta Tailor and Drapers is based on Civil Hospital Road in Kharar and has served made-to-measure menswear clients since 1990.",
    localAngle: "Visit our Kharar shop for personal measurements, fabric guidance, fittings and collection for pant coats, suits, sherwanis, kurta pajamas, shirts, trousers and alterations.",
    nearby: ["Sunny Enclave", "Nijjar Road", "Gillco Valley", "Kharar-Landran Road"],
    keywords: ["best tailor in Kharar", "gents tailor Kharar", "pant coat tailor Kharar", "sherwani tailor Kharar"],
  },
  {
    slug: "mohali",
    name: "Mohali",
    regionLabel: "SAS Nagar, Punjab",
    intro: "Looking for a gents tailor near Mohali? Minta Tailor and Drapers welcomes clients at our Kharar shop for made-to-measure formalwear, weddingwear and everyday menswear.",
    localAngle: "Mohali clients can book a measurement and fitting visit at our Civil Hospital Road, Kharar shop. We focus on clean proportions, comfortable movement and fitting-led refinement rather than standard sizing.",
    nearby: ["SAS Nagar", "Sector 68", "Sector 70", "Sector 71"],
    keywords: ["best tailor in Mohali", "gents tailor Mohali", "coat pant tailor Mohali", "sherwani tailor Mohali"],
  },
  {
    slug: "landran",
    name: "Landran",
    regionLabel: "SAS Nagar, Punjab",
    intro: "For clients around Landran looking for custom menswear, Minta Tailor and Drapers provides made-to-measure tailoring from our nearby Kharar shop.",
    localAngle: "Book a fitting for wedding sherwanis, pant coats, suits, kurta pajamas, shirts and trousers. Our physical shop remains in Kharar, keeping our business details clear and consistent across search platforms.",
    nearby: ["Landran", "Kharar-Landran Road", "Sohana", "SAS Nagar"],
    keywords: ["tailor in Landran", "gents tailor Landran", "coat pant tailor Landran", "sherwani tailor Landran"],
  },
  {
    slug: "kurali",
    name: "Kurali",
    regionLabel: "SAS Nagar, Punjab",
    intro: "Minta Tailor and Drapers serves clients travelling from Kurali who want custom-fitted suits, pant coats, sherwanis, kurta pajamas and wardrobe essentials.",
    localAngle: "Appointments and fittings are handled at our Civil Hospital Road shop in Kharar. We recommend planning wedding and occasionwear early so there is enough time for fitting and refinement.",
    nearby: ["Kurali", "Kharar", "Mullanpur", "SAS Nagar"],
    keywords: ["best tailor in Kurali", "gents tailor Kurali", "pant coat tailor Kurali", "wedding tailor Kurali"],
  },
  {
    slug: "morinda",
    name: "Morinda",
    regionLabel: "Rupnagar, Punjab",
    intro: "Clients from Morinda can visit Minta Tailor and Drapers in Kharar for custom menswear, wedding tailoring and fit corrections.",
    localAngle: "Our Kharar shop provides personal measurement, fitting and finishing for suits, pant coats, sherwanis, kurta pajamas, shirts, trousers and selected alterations.",
    nearby: ["Morinda", "Kurali", "Kharar", "Rupnagar"],
    keywords: ["tailor in Morinda", "gents tailor Morinda", "coat pant tailor Morinda", "sherwani tailor Morinda"],
  },
];

export const punjabCities = [
  "Kharar", "Mohali", "Landran", "Kurali", "Morinda", "Rupnagar", "Mullanpur", "Chandigarh Tricity",
  "Ludhiana", "Patiala", "Fatehgarh Sahib", "Sirhind", "Khanna", "Rajpura", "Nabha", "Sangrur",
  "Barnala", "Bathinda", "Moga", "Jalandhar", "Phagwara", "Hoshiarpur", "Amritsar", "Pathankot",
  "Gurdaspur", "Kapurthala", "Firozpur", "Faridkot", "Muktsar", "Mansa"
];

export const locationBySlug = (slug: string) => priorityLocations.find((location) => location.slug === slug);
