export type SearchIntentPage = {
  slug: string;
  eyebrow: string;
  title: string;
  h1: string;
  description: string;
  keywords: string[];
  intro: string;
  whyMinta: string;
  fitFocus: string[];
  idealFor: string[];
  locationNote: string;
  primaryServiceSlug: string;
  secondaryServiceSlugs: string[];
  relatedLocationSlugs: string[];
  questions: Array<{ question: string; answer: string }>;
};

export const searchIntentPages: SearchIntentPage[] = [
  {
    slug: "best-tailor-kharar",
    eyebrow: "Kharar tailoring guide",
    title: "Best Tailor in Kharar | Custom Menswear Since 1990",
    h1: "Looking for the best tailor in Kharar? Start with fit, finish and experience.",
    description: "Discover Minta Tailor and Drapers in Kharar for made-to-measure suits, pant coats, sherwanis, kurta pajamas, shirts and trousers. Established in 1990 on Civil Hospital Road.",
    keywords: ["best tailor in Kharar", "best gents tailor Kharar", "top tailor Kharar", "custom tailor Kharar"],
    intro: "There is no single objective ‘best’ tailor for every person. A useful way to choose is to look for careful measurements, fitting-led refinement, clear advice and workmanship that suits your occasion. Minta Tailor and Drapers has served Kharar from Civil Hospital Road since 1990.",
    whyMinta: "Our approach is built around personal measurements rather than standard sizing. We discuss the occasion, preferred silhouette and comfort expectations before cutting, then use fitting checkpoints where the garment needs refinement.",
    fitFocus: ["Detailed measurement and posture profile", "Pant-coat, suit and weddingwear fitting", "Fabric and drape guidance", "Final pressing and finishing checks"],
    idealFor: ["Wedding and reception tailoring", "Business and formal suits", "Kurta pajama and ethnicwear", "Shirts, trousers and fit corrections"],
    locationNote: "Minta Tailor and Drapers is physically located on Civil Hospital Road, Kharar. We do not claim additional branches on this page.",
    primaryServiceSlug: "bespoke-pant-coat",
    secondaryServiceSlugs: ["wedding-sherwani", "kurta-pajama", "shirts-trousers"],
    relatedLocationSlugs: ["kharar", "mohali", "landran"],
    questions: [
      { question: "What should I check before choosing a tailor in Kharar?", answer: "Ask how measurements and fittings are handled, whether the tailor can explain fabric and cut choices, and how much time is recommended before your event." },
      { question: "Does Minta Tailor stitch wedding and formal menswear?", answer: "Yes. Our core work includes pant coats, made-to-measure suits, wedding sherwanis, kurta pajamas, shirts, trousers and selected alterations." },
    ],
  },
  {
    slug: "gents-tailor-mohali",
    eyebrow: "Mohali clients",
    title: "Gents Tailor near Mohali | Custom Suits & Sherwani",
    h1: "Gents tailor near Mohali for made-to-measure suits, pant coats and sherwanis.",
    description: "Mohali clients can visit Minta Tailor and Drapers in nearby Kharar for custom suits, pant coats, wedding sherwanis and menswear fittings.",
    keywords: ["gents tailor Mohali", "best gents tailor Mohali", "tailor near Mohali", "custom suit tailor Mohali"],
    intro: "For clients in Mohali who prefer made-to-measure menswear, Minta Tailor and Drapers welcomes fitting visits at our Kharar shop. The focus is on proportion, comfort and a repeatable personal fit rather than off-the-rack sizing.",
    whyMinta: "Mohali clients commonly contact us for weddingwear, reception suits, business formalwear and wardrobe essentials. Because the physical shop is in Kharar, all measurements, fittings and collections are planned there with clear appointment guidance.",
    fitFocus: ["Personal measurements at the Kharar shop", "Suit and pant-coat silhouette planning", "Sherwani length and layering balance", "Shirt and trouser profile consistency"],
    idealFor: ["Mohali wedding clients", "Reception and engagement outfits", "Office and business formalwear", "Made-to-measure wardrobe refresh"],
    locationNote: "Our physical shop is in Kharar, not a separate Mohali branch. This page is for Mohali clients planning a visit to Minta Tailor and Drapers.",
    primaryServiceSlug: "bespoke-pant-coat",
    secondaryServiceSlugs: ["wedding-sherwani", "shirts-trousers"],
    relatedLocationSlugs: ["mohali", "kharar", "landran"],
    questions: [
      { question: "Is Minta Tailor located in Mohali?", answer: "Our physical shop is on Civil Hospital Road in Kharar. Mohali clients are welcome to visit for measurements, fittings and collection." },
      { question: "What should I bring for a suit or sherwani consultation?", answer: "Bring your event date, footwear if it affects trouser length, and any reference for the silhouette or styling you prefer. Fabric questions can be discussed during the visit." },
    ],
  },
  {
    slug: "coat-pant-tailor-kharar-mohali",
    eyebrow: "Formal tailoring",
    title: "Coat Pant Tailor in Kharar & near Mohali | Minta Tailor",
    h1: "Coat pant tailoring for Kharar and Mohali clients, shaped around your measurements.",
    description: "Custom coat pant and suit tailoring at Minta Tailor in Kharar for Kharar and Mohali clients. Personal measurements, fittings, fabric guidance and refined formalwear finishing.",
    keywords: ["coat pant tailor Kharar", "coat pant tailor Mohali", "pant coat stitching Kharar", "suit tailor Mohali"],
    intro: "A well-fitted coat and trouser should look balanced while allowing comfortable movement. At Minta Tailor and Drapers, the process starts with measurements and the occasion, then moves through cut, fitting and finishing rather than relying on a generic size.",
    whyMinta: "We pay attention to shoulder balance, jacket length, trouser line, ease and how the garment sits when standing and moving. Styling can be kept classic or adjusted toward a more contemporary silhouette depending on the client.",
    fitFocus: ["Shoulder and jacket balance", "Trouser rise, break and taper", "Sleeve and jacket length", "Lining, fabric and occasion guidance"],
    idealFor: ["Wedding and reception suits", "Business suits and formal meetings", "Engagement and family functions", "Clients replacing standard-size formalwear"],
    locationNote: "Coat-pant measurements and fittings take place at our Civil Hospital Road shop in Kharar. We welcome nearby Mohali clients and enquiries from across Punjab.",
    primaryServiceSlug: "bespoke-pant-coat",
    secondaryServiceSlugs: ["fabric-draping-guidance", "alterations-restyling"],
    relatedLocationSlugs: ["kharar", "mohali", "landran", "kurali"],
    questions: [
      { question: "How early should I plan a wedding coat pant?", answer: "Earlier is better, especially in wedding season. Contact us with your event date so the current fitting timeline can be confirmed before you place the order." },
      { question: "Can I discuss fabric before stitching?", answer: "Yes. Fabric weight, drape, texture and occasion suitability can be discussed before the final design and stitching plan." },
    ],
  },
  {
    slug: "sherwani-tailor-kharar-mohali",
    eyebrow: "Groom & wedding tailoring",
    title: "Sherwani Tailor in Kharar & near Mohali | Wedding Groom",
    h1: "Wedding sherwani tailoring for grooms in Kharar and Mohali.",
    description: "Custom groom sherwani tailoring at Minta Tailor in Kharar for Kharar and Mohali clients, with attention to proportion, layering, movement and coordinated bottoms.",
    keywords: ["sherwani tailor Kharar", "sherwani tailor Mohali", "wedding sherwani Kharar", "groom tailor Mohali"],
    intro: "A groom’s sherwani has to work across photographs, ceremonies, sitting, walking and long hours of wear. We plan the overall proportion, length, layering and coordinated pajama or trouser fit so the outfit feels composed rather than restrictive.",
    whyMinta: "Wedding tailoring benefits from time and fittings. We discuss the event, footwear, preferred silhouette and detailing before confirming the final approach, with practical attention to comfort as well as visual presence.",
    fitFocus: ["Sherwani length and body balance", "Comfort for layered weddingwear", "Sleeve, collar and shoulder refinement", "Coordinated pajama or trouser fit"],
    idealFor: ["Wedding day sherwani", "Engagement and pre-wedding functions", "Reception and family occasionwear", "Traditional groom styling"],
    locationNote: "Wedding sherwani consultations and fittings are handled at our Kharar shop. Mohali and nearby clients can contact us before visiting to discuss their event date.",
    primaryServiceSlug: "wedding-sherwani",
    secondaryServiceSlugs: ["kurta-pajama", "fabric-draping-guidance"],
    relatedLocationSlugs: ["kharar", "mohali", "landran", "morinda"],
    questions: [
      { question: "Do you tailor sherwanis for grooms?", answer: "Yes. Wedding sherwanis are one of our core services, including fit planning for the sherwani and coordinated bottoms." },
      { question: "When should a groom book a fitting?", answer: "Contact us as early as practical before the wedding, particularly during busy wedding months, so the current workload and fitting schedule can be discussed." },
    ],
  },
  {
    slug: "groom-suit-tailor-punjab",
    eyebrow: "Punjab groom tailoring",
    title: "Groom Suit Tailor in Punjab | Wedding Suits at Minta Tailor",
    h1: "Made-to-measure groom suits for Punjab weddings, tailored from Kharar.",
    description: "Minta Tailor and Drapers in Kharar creates made-to-measure groom suits and wedding formalwear for clients visiting from across Punjab.",
    keywords: ["groom suit tailor Punjab", "wedding suit tailor Punjab", "groom coat pant Punjab", "custom wedding suit Punjab"],
    intro: "For a groom, the suit has to suit the ceremony, venue, season and the rest of the wedding styling. Minta Tailor and Drapers creates made-to-measure groom suits at our Kharar shop for clients who visit from nearby towns and across Punjab.",
    whyMinta: "We start with the occasion and the person wearing the garment. Fabric, structure, proportions, comfort and accessories can then be considered together so the suit feels intentional rather than assembled from unrelated choices.",
    fitFocus: ["Wedding-specific silhouette planning", "Personal measurement and posture profile", "Fabric, lining and drape discussion", "Fitting checkpoints before final finishing"],
    idealFor: ["Wedding day suits", "Reception suits", "Engagement formalwear", "Coordinated groom-event wardrobe"],
    locationNote: "Minta Tailor does not claim branches across Punjab. The physical shop is in Kharar; Punjab-wide wording describes clients who travel or enquire from other parts of the state.",
    primaryServiceSlug: "bespoke-pant-coat",
    secondaryServiceSlugs: ["wedding-sherwani", "fabric-draping-guidance"],
    relatedLocationSlugs: ["kharar", "mohali", "kurali", "morinda"],
    questions: [
      { question: "Can clients from outside Kharar order a groom suit?", answer: "Yes, provided you can plan the required visit or visits to our Kharar shop for measurements and fittings. Contact us with your city and wedding date before travelling." },
      { question: "Can you help choose a suit fabric for a Punjab wedding?", answer: "We can discuss fabric weight, drape, texture and occasion suitability so the choice works with the season and planned suit style." },
    ],
  },
  {
    slug: "bespoke-suit-tailor-punjab",
    eyebrow: "Made-to-measure Punjab",
    title: "Bespoke Suit Tailor in Punjab | Minta Tailor Kharar",
    h1: "Made-to-measure suits from Kharar for clients across Punjab.",
    description: "Minta Tailor and Drapers offers made-to-measure suit and pant-coat tailoring from Kharar for clients across Punjab, with personal measurements and fitting-led refinement.",
    keywords: ["bespoke suit tailor Punjab", "custom suit tailor Punjab", "made to measure suit Punjab", "pant coat tailor Punjab"],
    intro: "A made-to-measure suit is most useful when the fit is built around the wearer, not when ‘bespoke’ is used only as a marketing word. Our process records personal measurements and considers posture, proportions, comfort and the intended use of the garment.",
    whyMinta: "Minta Tailor and Drapers has operated in Kharar since 1990. Clients visit for formal suits, wedding suits, pant coats and related menswear, with fitting and finishing handled at the same physical shop.",
    fitFocus: ["Personal measurement profile", "Proportion and posture considerations", "Classic or contemporary silhouette", "Repeatable fit for future tailoring"],
    idealFor: ["Business formalwear", "Weddings and receptions", "Special occasions", "Clients seeking a consistent personal fit"],
    locationNote: "The shop is in Kharar, Punjab. ‘Across Punjab’ refers to the wider client service area and enquiries, not multiple physical branches.",
    primaryServiceSlug: "bespoke-pant-coat",
    secondaryServiceSlugs: ["shirts-trousers", "fabric-draping-guidance", "alterations-restyling"],
    relatedLocationSlugs: ["kharar", "mohali", "landran", "kurali", "morinda"],
    questions: [
      { question: "Where is Minta Tailor located?", answer: "Minta Tailor and Drapers is located on Civil Hospital Road, Kharar, SAS Nagar, District Mohali, Punjab." },
      { question: "Do you offer online-only suit measurements?", answer: "Our site positions the service around in-person measurement and fitting at the Kharar shop. Contact us before travelling to plan the process for your order." },
    ],
  },
];

export const searchIntentBySlug = (slug: string) => searchIntentPages.find((page) => page.slug === slug);
