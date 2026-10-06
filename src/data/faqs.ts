export type FaqItem = {
  question: string;
  answer: string;
  category: "Visit & Location" | "Suits & Coat Pant" | "Wedding & Sherwani" | "Everyday Tailoring" | "Orders & Fittings";
};

export const faqItems: FaqItem[] = [
  {
    category: "Visit & Location",
    question: "Where is Minta Tailor and Drapers located?",
    answer: "Minta Tailor and Drapers is located on Civil Hospital Road, Kharar, SAS Nagar, District Mohali, Punjab. This is the business's physical shop and the location shown across the website.",
  },
  {
    category: "Visit & Location",
    question: "Does Minta Tailor have a branch in Mohali?",
    answer: "Minta Tailor's physical shop is in Kharar. The business serves customers from Mohali, Landran, Kurali, Morinda and other parts of Punjab, but the website does not represent those service areas as separate branches.",
  },
  {
    category: "Visit & Location",
    question: "Can customers from anywhere in Punjab contact Minta Tailor?",
    answer: "Yes. Customers travelling from across Punjab can contact Minta Tailor to discuss the garment, fitting requirements and a suitable visit to the Kharar shop before placing an order.",
  },
  {
    category: "Visit & Location",
    question: "What are Minta Tailor's shop hours?",
    answer: "The website currently lists the shop as open daily from 9:00 AM to 10:00 PM. For a fitting or wedding-season visit, calling or messaging before travelling is a sensible option.",
  },
  {
    category: "Suits & Coat Pant",
    question: "Does Minta Tailor stitch custom coat pants and suits?",
    answer: "Yes. Minta Tailor provides made-to-measure pant-coat and suit tailoring, including measurement, style and fabric guidance, fitting refinement and final finishing.",
  },
  {
    category: "Suits & Coat Pant",
    question: "What should I bring for a coat-pant consultation?",
    answer: "Bring any fabric you have already selected, reference ideas if you have them, and the shoes or shirt style you expect to wear with the suit when relevant. The tailor can then discuss proportion, fit and practical design choices.",
  },
  {
    category: "Suits & Coat Pant",
    question: "Can Minta Tailor help choose a suit style?",
    answer: "Yes. The consultation can cover silhouette, lapel and overall styling, fabric fall, comfort and the type of occasion so the finished suit suits the wearer rather than relying on a one-size-fits-all trend.",
  },
  {
    category: "Suits & Coat Pant",
    question: "Is bespoke suit tailoring available for business wear as well as weddings?",
    answer: "Yes. Made-to-measure pant coats and suits can be planned for business wear, weddings, receptions and other formal occasions, with the fit adjusted around posture and intended use.",
  },
  {
    category: "Wedding & Sherwani",
    question: "Does Minta Tailor stitch wedding sherwanis for grooms?",
    answer: "Yes. Wedding sherwani tailoring is available for grooms, with attention to length, layering, movement, coordinated bottoms and the overall wedding look.",
  },
  {
    category: "Wedding & Sherwani",
    question: "How early should I plan wedding tailoring?",
    answer: "Wedding garments are best discussed early, especially in busy wedding periods. The exact timeline depends on the garment, fabric, detailing, fittings and current workload, so the shop confirms timing after the design is understood.",
  },
  {
    category: "Wedding & Sherwani",
    question: "Should a groom choose a sherwani or a suit?",
    answer: "It depends on the ceremony, personal style and how formal or traditional the event is. A sherwani usually creates a more ceremonial Indian wedding look, while a suit is versatile for receptions, engagements and formal events. Minta can help evaluate the fit and styling implications of either option.",
  },
  {
    category: "Wedding & Sherwani",
    question: "Can sherwani trousers or pajama be fitted with the main garment?",
    answer: "Yes. Coordinated pajama or trouser fit is part of planning the complete sherwani look so the layers work together comfortably and proportionately.",
  },
  {
    category: "Everyday Tailoring",
    question: "Does Minta Tailor stitch kurta pajama?",
    answer: "Yes. Custom kurta-pajama tailoring is available for festivals, family functions, office use and everyday wear, with options for collar, cuff, pocket and silhouette details.",
  },
  {
    category: "Everyday Tailoring",
    question: "Can I get custom shirts and trousers stitched?",
    answer: "Yes. Minta Tailor stitches made-to-measure shirts and trousers with choices for collars, cuffs, pockets and formal or semi-formal trouser profiles.",
  },
  {
    category: "Everyday Tailoring",
    question: "Does Minta Tailor do clothing alterations?",
    answer: "Yes. The shop assesses existing garments and can recommend practical alterations such as length, waist and fit corrections when the garment construction allows them.",
  },
  {
    category: "Everyday Tailoring",
    question: "Can I bring my own fabric?",
    answer: "Yes. Customers can discuss fabric they already have. Minta also provides practical guidance on drape, texture, seasonal weight and whether a fabric suits the intended garment.",
  },
  {
    category: "Orders & Fittings",
    question: "How long does stitching take?",
    answer: "There is no single fixed turnaround for every garment. Timing depends on the garment type, fabric, detailing, fitting requirements and current workload. The shop confirms the expected timeline when the order is discussed.",
  },
  {
    category: "Orders & Fittings",
    question: "Are fittings part of the tailoring process?",
    answer: "Yes. Minta's process is fitting-led. Measurements establish the starting profile, and fitting checkpoints can be used to refine balance, comfort and silhouette before final finishing.",
  },
  {
    category: "Orders & Fittings",
    question: "Can I ask questions on WhatsApp before visiting?",
    answer: "Yes. The website provides the shop's WhatsApp number so customers can make an initial enquiry before visiting, especially when planning a wedding garment or travelling from outside Kharar.",
  },
  {
    category: "Orders & Fittings",
    question: "Does Minta Tailor keep measurements for future orders?",
    answer: "For selected made-to-measure services, a reusable measurement profile can support future orders. A fresh fitting may still be useful if the garment style or the wearer's measurements have changed.",
  },
];

export const faqCategories = [
  "Visit & Location",
  "Suits & Coat Pant",
  "Wedding & Sherwani",
  "Everyday Tailoring",
  "Orders & Fittings",
] as const;
