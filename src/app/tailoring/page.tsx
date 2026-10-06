import type { Metadata } from "next";
import Link from "next/link";
import { SectionTitle } from "@/components/SectionTitle";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { business } from "@/data/site";
import { searchIntentPages } from "@/data/searchIntents";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Tailoring Guides | Kharar, Mohali & Punjab",
  description: "Explore Minta Tailor and Drapers guides for suits, coat pants, wedding sherwanis, groom tailoring and made-to-measure menswear in Kharar, near Mohali and across Punjab.",
  path: "/tailoring",
  keywords: ["tailor Kharar", "gents tailor Mohali", "coat pant tailor Punjab", "sherwani tailor Punjab"],
});

export default function TailoringHubPage() {
  const breadcrumbSchema = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Tailoring", path: "/tailoring" },
  ]);

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c") }} />
    <section className="bg-[#171512] py-24 text-white"><div className="container-shell">
      <p className="eyebrow">Tailoring by need & location</p>
      <h1 className="font-display mt-4 max-w-5xl text-5xl leading-[1.04] md:text-7xl">Useful guides for finding the right Minta tailoring service.</h1>
      <p className="mt-6 max-w-3xl text-base leading-8 text-white/65">Explore coat-pant, suit, groom and sherwani tailoring for Kharar, nearby Mohali and clients who travel from across Punjab. Our only physical shop is on Civil Hospital Road, Kharar.</p>
    </div></section>

    <section className="section-pad"><div className="container-shell">
      <SectionTitle eyebrow="Popular tailoring searches" title="Choose the service or area that matches what you need." text="These pages explain the fitting process, location details and related services without pretending that Minta has branches where it does not." />
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{searchIntentPages.map((page)=><Link key={page.slug} href={`/tailoring/${page.slug}`} className="group border border-black/10 bg-white p-7 transition hover:border-[#b78a46]/55"><p className="eyebrow">{page.eyebrow}</p><h2 className="font-display mt-4 text-3xl leading-tight">{page.title.split(" | ")[0]}</h2><p className="mt-4 text-sm leading-7 text-[#6f685f]">{page.description}</p><p className="mt-6 text-xs font-bold uppercase tracking-[.14em] text-[#8f6833]">Read guide →</p></Link>)}</div>
    </div></section>

    <section className="bg-[#efe8dc] section-pad"><div className="container-shell grid gap-10 lg:grid-cols-[1fr_.7fr]">
      <div><p className="eyebrow">One real shop</p><h2 className="font-display mt-4 text-4xl md:text-5xl">Kharar since {business.established}. Clear service-area information everywhere else.</h2><p className="mt-5 max-w-2xl text-base leading-8 text-[#6f685f]">Search pages are useful only when they help a real customer. Every guide points back to the same Kharar business, services and contact details, keeping location information consistent for customers and search engines.</p></div>
      <div className="flex items-center lg:justify-end"><WhatsAppButton label="Ask about a fitting" /></div>
    </div></section>

    <section className="section-pad"><div className="container-shell grid gap-6 md:grid-cols-2"><Link href="/guides" className="border border-black/10 p-7"><p className="eyebrow">Learn</p><h2 className="font-display mt-3 text-3xl">Tailoring guides</h2><p className="mt-3 text-sm leading-7 text-[#6f685f]">Read practical guidance on suit fit, sherwani fittings, groom outfit choices and wedding tailoring timelines.</p></Link><Link href="/faq" className="border border-black/10 p-7"><p className="eyebrow">Ask</p><h2 className="font-display mt-3 text-3xl">Frequently asked questions</h2><p className="mt-3 text-sm leading-7 text-[#6f685f]">Get clear answers about our Kharar location, fittings, services, timelines and customers visiting from Mohali and across Punjab.</p></Link></div></section>
  </>;
}
