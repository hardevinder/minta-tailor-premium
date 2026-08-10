export const business = {
  name: "Minta Tailor and Drapers",
  shortName: "Minta Tailor",
  tagline: "Tailored with character. Finished with precision.",
  phoneDisplay: "+91 98885 19584",
  phoneRaw: "919888519584",
  secondaryPhoneDisplay: "+91 98151 88184",
  secondaryPhoneRaw: "919815188184",
  address: "Civil Hospital Road, Kharar, SAS Nagar, Distt. Mohali",
  city: "Kharar, SAS Nagar, Punjab",
  hours: "Daily · 9:00 AM–10:00 PM",
  established: "1990",
  specialty: "Gents Fashion Tailoring",
  whatsappMessage: "Hello Minta Tailor and Drapers, I would like to enquire about custom stitching.",
};

export type Service = {
  slug: string;
  eyebrow: string;
  title: string;
  short: string;
  description: string;
  image: string;
  highlights: string[];
  idealFor: string;
  turnaround: string;
};

export const services: Service[] = [
  {
    slug: "bespoke-pant-coat",
    eyebrow: "Signature tailoring",
    title: "Bespoke Pant & Coat",
    short: "Sharp proportions, clean structure and a fit made around you.",
    description: "From fabric consultation to final fitting, every suit is shaped for your posture, occasion and preferred silhouette. We focus on balanced shoulders, elegant drape and refined finishing.",
    image: "/images/pant-coat.jpg",
    highlights: ["Personal measurement profile", "Fabric and lining guidance", "Multiple fitting checkpoints", "Classic and contemporary cuts"],
    idealFor: "Weddings, business wear, receptions and special occasions",
    turnaround: "Timeline confirmed after design and fabric selection",
  },
  {
    slug: "wedding-sherwani",
    eyebrow: "Celebration wear",
    title: "Wedding Sherwani",
    short: "Regal occasionwear crafted to feel comfortable and look distinguished.",
    description: "A groom’s outfit should feel personal. We tailor sherwanis and coordinated bottoms with careful attention to length, movement, layering and the overall wedding look.",
    image: "/images/sherwani.jpg",
    highlights: ["Groom styling consultation", "Layering and comfort planning", "Button and trim detailing", "Coordinated pajama or trouser fit"],
    idealFor: "Wedding day, engagement and reception functions",
    turnaround: "Book early for wedding-season fittings",
  },
  {
    slug: "kurta-pajama",
    eyebrow: "Everyday elegance",
    title: "Kurta Pajama",
    short: "Traditional comfort with a cleaner, more polished modern fit.",
    description: "We create kurta pajama sets for everyday wear and celebrations, with thoughtful collar, cuff, pocket and hem details. The result is relaxed without looking loose or unfinished.",
    image: "/images/kurta.jpg",
    highlights: ["Straight and tapered silhouettes", "Custom collar and cuff options", "Occasion-specific detailing", "Comfort-focused measurements"],
    idealFor: "Festivals, family functions, office and daily wear",
    turnaround: "Depends on fabric, detailing and current workload",
  },
  {
    slug: "shirts-trousers",
    eyebrow: "Wardrobe essentials",
    title: "Shirts & Trousers",
    short: "Dependable daily tailoring with crisp lines and comfortable movement.",
    description: "Well-cut essentials make dressing effortless. Choose your preferred collar, cuff, pocket and trouser profile, and we will build a consistent fit you can reorder with confidence.",
    image: "/images/shirt-trouser.jpg",
    highlights: ["Reusable measurement profile", "Multiple collar and cuff styles", "Formal and semi-formal trouser cuts", "Balanced comfort and shape"],
    idealFor: "Office, events, uniforms and daily dressing",
    turnaround: "Confirmed at order placement",
  },
  {
    slug: "alterations-restyling",
    eyebrow: "Fit refinement",
    title: "Alterations & Restyling",
    short: "Bring trusted garments back into your regular wardrobe.",
    description: "We assess the garment, explain what can be improved and recommend alterations that preserve its balance. From waist and length adjustments to fit corrections, the goal is a natural-looking result.",
    image: "/images/alterations.jpg",
    highlights: ["Fit assessment before work", "Length and waist corrections", "Sleeve and shoulder refinements", "Honest feasibility guidance"],
    idealFor: "Existing suits, trousers, shirts and ethnic wear",
    turnaround: "Based on alteration complexity",
  },
  {
    slug: "fabric-draping-guidance",
    eyebrow: "Drapers’ desk",
    title: "Fabric & Draping Guidance",
    short: "Practical help choosing cloth, fall, texture and seasonal weight.",
    description: "The right fabric supports the design. We help you understand how different materials drape, feel and perform so the finished garment suits both your occasion and comfort expectations.",
    image: "/images/fabric.jpg",
    highlights: ["Season and occasion guidance", "Texture and drape comparison", "Colour coordination support", "Design suitability review"],
    idealFor: "Clients selecting fabric before placing a stitching order",
    turnaround: "Consultation available during shop hours",
  },
];

export const galleryCategories = [
  { slug: "suits", label: "Suits", intro: "Structured silhouettes and refined formal tailoring." },
  { slug: "wedding", label: "Wedding", intro: "Celebration looks designed for presence and comfort." },
  { slug: "ethnic", label: "Ethnic Wear", intro: "Traditional forms finished with modern precision." },
];

export const galleryItems = [
  { title: "Midnight Two-Piece", category: "suits", image: "/images/pant-coat.jpg" },
  { title: "Classic Charcoal", category: "suits", image: "/images/sherwani.jpg" },
  { title: "Ivory Wedding Edit", category: "wedding", image: "/images/kurta.jpg" },
  { title: "Deep Maroon Sherwani", category: "wedding", image: "/images/fitting.jpg" },
  { title: "Festive Kurta Set", category: "ethnic", image: "/images/fabric-cutting.jpg" },
  { title: "Modern Band Collar", category: "ethnic", image: "/images/shop-front.jpg" },
];

export const testimonials = [
  { quote: "A premium fit starts with patient listening and careful measurements.", name: "Our tailoring promise" },
  { quote: "Every garment should look composed while still allowing natural movement.", name: "Our fitting philosophy" },
  { quote: "Good finishing is noticed in the details—and felt every time you wear it.", name: "Our workmanship standard" },
];

export const processSteps = [
  { number: "01", title: "Consult", text: "Tell us the occasion, style preference and comfort expectations." },
  { number: "02", title: "Measure", text: "We record a detailed measurement and posture profile." },
  { number: "03", title: "Fit", text: "Fitting checkpoints help refine balance, ease and silhouette." },
  { number: "04", title: "Finish", text: "Final pressing and detail checks complete the garment." },
];
