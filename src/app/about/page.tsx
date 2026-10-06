import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SectionTitle } from "@/components/SectionTitle";
import { business, processSteps } from "@/data/site";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "About Minta Tailor | Gents Tailor in Kharar Since 1990",
  description: "Learn about Minta Tailor and Drapers in Kharar, established in 1990, our made-to-measure philosophy, fitting-led process and approach to suits, sherwanis and everyday menswear.",
  path: "/about",
  keywords: ["Minta Tailor Kharar", "tailor Kharar since 1990", "made-to-measure menswear Kharar", "gents tailor Mohali"],
});

export default function AboutPage() {
  const breadcrumbSchema = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Our Story", path: "/about" },
  ]);

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c") }} />
    <section className="bg-[#171512] text-white"><div className="container-shell grid min-h-[650px] items-center gap-12 py-20 lg:grid-cols-2">
      <div><p className="eyebrow">Kharar · Established {business.established}</p><h1 className="font-display mt-5 text-6xl leading-[1.02] md:text-7xl">Tailoring built on patience, proportion and pride.</h1><p className="mt-7 max-w-xl text-lg leading-8 text-white/62">Minta Tailor and Drapers is a gents tailoring shop on Civil Hospital Road, Kharar, serving made-to-measure menswear customers from Kharar, Mohali and across Punjab.</p></div>
      <div className="image-frame relative aspect-[4/5]"><Image src="/images/about-workshop.jpg" alt="Tailoring work at Minta Tailor and Drapers in Kharar" fill priority className="object-cover" /></div>
    </div></section>

    <section className="section-pad"><div className="container-shell grid gap-14 lg:grid-cols-2">
      <SectionTitle eyebrow="Our philosophy" title="The garment should belong to the person wearing it." />
      <div className="space-y-6 text-base leading-8 text-[#6f685f]"><p>Good tailoring begins before the first cut. We listen to how the garment will be worn, study posture and movement, and then shape the fit around the wearer.</p><p>Our approach balances traditional tailoring discipline with modern preferences. The aim is not to chase every trend, but to create clothing that feels composed, comfortable and useful beyond a single photograph.</p><p>From a daily kurta pajama to a wedding sherwani or business suit, the same fundamentals matter: proportion, movement, fabric behaviour and finishing.</p></div>
    </div></section>

    <section className="bg-[#efe8dc] section-pad"><div className="container-shell"><SectionTitle eyebrow="Our process" title="Four stages. One consistent standard." text="A fitting-led workflow keeps the focus on the wearer rather than relying on measurements alone." /><div className="mt-12 grid gap-5 md:grid-cols-4">{processSteps.map((step)=><div key={step.number} className="bg-[#fbf8f1] p-7"><p className="font-display text-3xl text-[#b78a46]">{step.number}</p><h2 className="font-display mt-10 text-2xl">{step.title}</h2><p className="mt-3 text-sm leading-7 text-[#746e64]">{step.text}</p></div>)}</div></div></section>

    <section className="section-pad"><div className="container-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
      <div><p className="eyebrow">What we make</p><h2 className="font-display mt-4 text-4xl md:text-5xl">Menswear for workdays, celebrations and wedding days.</h2></div>
      <div className="grid gap-4 sm:grid-cols-2"><Link href="/services/bespoke-pant-coat" className="border border-black/10 p-6"><h3 className="font-display text-2xl">Pant coats & suits</h3><p className="mt-3 text-sm leading-7 text-[#6f685f]">Made-to-measure formalwear shaped around posture, occasion and preferred silhouette.</p></Link><Link href="/services/wedding-sherwani" className="border border-black/10 p-6"><h3 className="font-display text-2xl">Wedding sherwanis</h3><p className="mt-3 text-sm leading-7 text-[#6f685f]">Groom tailoring with attention to layering, movement, length and coordinated bottoms.</p></Link><Link href="/services/kurta-pajama" className="border border-black/10 p-6"><h3 className="font-display text-2xl">Kurta pajama</h3><p className="mt-3 text-sm leading-7 text-[#6f685f]">Traditional menswear with custom collar, cuff, pocket and silhouette choices.</p></Link><Link href="/services/alterations-restyling" className="border border-black/10 p-6"><h3 className="font-display text-2xl">Alterations</h3><p className="mt-3 text-sm leading-7 text-[#6f685f]">Practical fit corrections after assessing what the existing garment can support.</p></Link></div>
    </div></section>

    <section className="bg-[#171512] section-pad text-white"><div className="container-shell grid gap-10 lg:grid-cols-[1fr_.8fr]"><div><p className="eyebrow">Learn before your fitting</p><h2 className="font-display mt-4 text-4xl md:text-5xl">Clear guidance, not keyword filler.</h2><p className="mt-5 max-w-2xl text-base leading-8 text-white/60">Our FAQ and tailoring guides answer practical questions about suit fit, sherwani planning, wedding timelines and the services available at our Kharar shop.</p></div><div className="flex flex-wrap items-center gap-3 lg:justify-end"><Link href="/guides" className="ghost-button">Read tailoring guides</Link><Link href="/faq" className="ghost-button">View FAQ</Link></div></div></section>
  </>;
}
