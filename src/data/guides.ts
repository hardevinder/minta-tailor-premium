export type GuideSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type Guide = {
  slug: string;
  title: string;
  h1: string;
  description: string;
  eyebrow: string;
  intro: string;
  keywords: string[];
  readTime: string;
  sections: GuideSection[];
  relatedServiceSlugs: string[];
};

export const guides: Guide[] = [
  {
    slug: "wedding-sherwani-fitting-guide",
    title: "Wedding Sherwani Fitting Guide for Grooms",
    h1: "A practical wedding sherwani fitting guide for grooms.",
    description: "Learn what to check in a groom sherwani fitting: length, shoulders, layering, movement, bottoms and planning ahead for wedding tailoring in Punjab.",
    eyebrow: "Wedding tailoring guide",
    intro: "A sherwani should look ceremonial without feeling restrictive. The best fitting decisions come from checking the complete outfit together rather than judging the jacket-like layer in isolation.",
    keywords: ["wedding sherwani fitting", "groom sherwani fitting Punjab", "sherwani tailor Kharar", "sherwani tailor Mohali"],
    readTime: "5 min read",
    relatedServiceSlugs: ["wedding-sherwani", "kurta-pajama", "fabric-draping-guidance"],
    sections: [
      {
        heading: "Start with the shoulder and upper body",
        paragraphs: ["The shoulder line establishes much of a sherwani's structure. It should look clean and composed while allowing the wearer to move naturally. The chest and upper back should feel supported, not compressed."],
        bullets: ["Check the shoulder line from front and back", "Move the arms naturally during the fitting", "Wear the intended inner layer when possible"],
      },
      {
        heading: "Judge length with the full outfit",
        paragraphs: ["Sherwani length changes how the wearer's proportions read. It should be assessed with the intended pajama or trousers and footwear so the complete silhouette feels balanced."],
      },
      {
        heading: "Leave room for wedding-day movement",
        paragraphs: ["A groom may sit, walk, greet guests and spend hours in the outfit. A visually sharp fit still needs enough practical ease for those movements. This is why a fitting is more useful than relying only on measurements."],
      },
      {
        heading: "Plan early when the wedding date is fixed",
        paragraphs: ["Fabric, design detail, fitting requirements and seasonal workload can all affect timing. Discuss the garment early and let the tailor confirm the actual schedule instead of assuming a universal turnaround time."],
      },
    ],
  },
  {
    slug: "how-to-choose-coat-pant",
    title: "How to Choose a Coat Pant for Your Occasion",
    h1: "How to choose a coat pant that suits the occasion and the wearer.",
    description: "A practical coat-pant guide covering fit, silhouette, fabric, occasion and fitting choices for custom suits in Kharar, Mohali and Punjab.",
    eyebrow: "Suit tailoring guide",
    intro: "A good coat pant is not defined by one fashionable cut. It should match the occasion, fabric, posture and comfort expectations of the person wearing it.",
    keywords: ["coat pant fitting guide", "coat pant tailor Kharar", "suit tailor Mohali", "custom suit Punjab"],
    readTime: "5 min read",
    relatedServiceSlugs: ["bespoke-pant-coat", "fabric-draping-guidance", "shirts-trousers"],
    sections: [
      {
        heading: "Decide what the suit has to do",
        paragraphs: ["A wedding suit, reception suit and everyday business suit may need different levels of structure, formality and versatility. Starting with the occasion narrows the useful design choices."],
      },
      {
        heading: "Choose proportion before decoration",
        paragraphs: ["Shoulder balance, coat length, trouser shape and overall silhouette have more impact on the finished look than small decorative details. A fitting-led approach gives these fundamentals priority."],
        bullets: ["Shoulders should sit cleanly", "Sleeve and trouser lengths should work with the intended shirt and shoes", "The coat should close comfortably without pulling"],
      },
      {
        heading: "Let fabric support the design",
        paragraphs: ["Fabric weight, texture and drape affect how a coat holds shape and how comfortable it feels in the season when it will be worn. Discuss the cloth together with the intended cut."],
      },
      {
        heading: "Use fittings to refine, not just confirm",
        paragraphs: ["Measurements are the start of a made-to-measure garment. A fitting lets the tailor assess how the cloth and construction behave on the actual wearer and refine balance where needed."],
      },
    ],
  },
  {
    slug: "groom-suit-vs-sherwani",
    title: "Groom Suit vs Sherwani: Which Should You Choose?",
    h1: "Groom suit or sherwani? Choose by ceremony, style and comfort.",
    description: "Compare a groom suit and wedding sherwani by ceremony, formality, styling, comfort and re-wear value before choosing your wedding outfit.",
    eyebrow: "Groom style guide",
    intro: "Both a sherwani and a tailored suit can create a strong groom look. The useful question is not which one is universally better, but which one fits the ceremony, personal style and events around the wedding.",
    keywords: ["groom suit vs sherwani", "wedding suit Punjab", "groom sherwani Kharar", "groom tailor Mohali"],
    readTime: "4 min read",
    relatedServiceSlugs: ["wedding-sherwani", "bespoke-pant-coat", "fabric-draping-guidance"],
    sections: [
      {
        heading: "Choose a sherwani for a more ceremonial traditional look",
        paragraphs: ["A sherwani naturally supports a traditional Indian wedding aesthetic and works well when the ceremony, family styling or coordinated wedding look calls for richer layering and detail."],
      },
      {
        heading: "Choose a suit for versatility and a modern formal look",
        paragraphs: ["A tailored suit can work especially well for engagements, receptions, formal dinners and grooms who prefer a cleaner Western formal silhouette. It also has strong re-wear potential after the wedding."],
      },
      {
        heading: "Comfort comes from fit, not garment category alone",
        paragraphs: ["Either option can feel comfortable when fabric, layering and ease are planned properly. Try the intended layers and footwear during relevant fittings so the complete outfit can be judged."],
      },
      {
        heading: "Many grooms use both across different functions",
        paragraphs: ["If the wedding schedule has multiple events, a sherwani for the main ceremony and a suit for the reception can give each event its own character without forcing one garment to serve every purpose."],
      },
    ],
  },
  {
    slug: "how-a-bespoke-suit-should-fit",
    title: "How a Made-to-Measure Suit Should Fit",
    h1: "How should a made-to-measure suit fit? Check these fundamentals.",
    description: "Understand the key signs of a well-fitted made-to-measure suit, from shoulders and jacket closure to sleeve, trouser and movement checks.",
    eyebrow: "Fit guide",
    intro: "A sharp suit should look composed when standing and continue to feel natural when the wearer moves. Fit is a balance of clean lines, proportion and practical ease.",
    keywords: ["how suit should fit", "bespoke suit fitting", "made to measure suit Punjab", "suit tailor Kharar"],
    readTime: "5 min read",
    relatedServiceSlugs: ["bespoke-pant-coat", "shirts-trousers", "alterations-restyling"],
    sections: [
      {
        heading: "Shoulders are the first checkpoint",
        paragraphs: ["The jacket shoulder should follow the wearer's natural shoulder cleanly. An obvious overhang, collapse or strain usually changes the whole appearance of the jacket."],
      },
      {
        heading: "The jacket should close without obvious stress",
        paragraphs: ["When buttoned in the intended way, the front should look controlled rather than pulling aggressively. At the same time, the jacket should not feel excessively loose through the body."],
      },
      {
        heading: "Sleeve and trouser lengths belong to the whole outfit",
        paragraphs: ["Sleeve length should be considered with the shirt, and trouser length with the shoes and preferred trouser profile. Small length changes can noticeably alter overall proportion."],
      },
      {
        heading: "Sit, walk and move during the fitting",
        paragraphs: ["A suit is worn in motion. Basic movement checks help confirm that a visually clean fit still has enough ease for the actual occasion or workday."],
      },
    ],
  },
  {
    slug: "wedding-tailoring-timeline",
    title: "Wedding Tailoring Timeline: When Should a Groom Start?",
    h1: "When should a groom start wedding tailoring? Plan backwards from the event.",
    description: "A practical wedding tailoring timeline for grooms covering outfit decisions, fabric, measurements, fittings and final collection without relying on unrealistic fixed deadlines.",
    eyebrow: "Wedding planning guide",
    intro: "Wedding tailoring is easier when the garment, fabric and fittings are not left to the last moment. There is no universal number of days for every order, so the best plan is to start early and confirm the schedule with the tailor.",
    keywords: ["wedding tailoring timeline", "when to stitch sherwani", "groom suit timeline", "wedding tailor Punjab"],
    readTime: "4 min read",
    relatedServiceSlugs: ["wedding-sherwani", "bespoke-pant-coat", "kurta-pajama"],
    sections: [
      {
        heading: "First decide the event and garment",
        paragraphs: ["Before measurements, decide whether the main need is a sherwani, suit, kurta-pajama set or more than one outfit across wedding functions. This makes fabric and fitting planning more focused."],
      },
      {
        heading: "Allow time for fabric and design decisions",
        paragraphs: ["A rushed fabric decision can affect both comfort and the finished silhouette. If the cloth still needs to be sourced or compared, include that decision in the timeline rather than treating stitching as the only step."],
      },
      {
        heading: "Keep room for fitting refinement",
        paragraphs: ["The purpose of a fitting is to assess the garment on the wearer and refine it when needed. Starting early creates room for that process instead of turning every adjustment into a deadline problem."],
      },
      {
        heading: "Confirm the actual delivery plan with the shop",
        paragraphs: ["Complexity, detailing and current workload vary. Once the tailor understands the garment, ask for the expected fitting and completion schedule and plan collection around that confirmed timeline."],
      },
    ],
  },
];

export function guideBySlug(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}
