import type { Metadata } from "next";
import Link from "next/link";
import { SectionTitle } from "@/components/SectionTitle";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { faqCategories, faqItems } from "@/data/faqs";
import { business } from "@/data/site";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Tailoring FAQ | Minta Tailor Kharar",
  description: "Answers to common questions about Minta Tailor in Kharar, coat-pant and suit stitching, wedding sherwanis, kurta pajama, alterations, fittings and customers visiting from Mohali and Punjab.",
  path: "/faq",
  keywords: ["Minta Tailor FAQ", "tailor Kharar questions", "coat pant stitching Kharar", "sherwani tailor Mohali"],
});

export default function FaqPage() {
  const breadcrumbSchema = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "FAQ", path: "/faq" },
  ]);

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c") }} />
    <section className="bg-[#171512] py-24 text-white"><div className="container-shell">
      <p className="eyebrow">Minta Tailor FAQ</p>
      <h1 className="font-display mt-4 max-w-5xl text-5xl leading-[1.04] md:text-7xl">Straight answers before you visit the tailor.</h1>
      <p className="mt-6 max-w-3xl text-base leading-8 text-white/65">Location, fittings, coat pants, suits, wedding sherwanis, everyday tailoring and order planning — based on the services offered at our physical shop on Civil Hospital Road, Kharar.</p>
    </div></section>

    <section className="section-pad"><div className="container-shell">
      <SectionTitle eyebrow="Common questions" title="Useful information, grouped by what you are planning." text="Timelines can vary by garment and workload, so we avoid one-size-fits-all promises. For an order-specific answer, contact the shop directly." />
      <div className="mt-12 space-y-16">
        {faqCategories.map((category) => {
          const items = faqItems.filter((item) => item.category === category);
          return <section key={category} aria-labelledby={category.replace(/\s+/g, "-").toLowerCase()}>
            <h2 id={category.replace(/\s+/g, "-").toLowerCase()} className="font-display text-3xl md:text-4xl">{category}</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">{items.map((item) => <details key={item.question} className="group border border-black/10 bg-white p-6 open:border-[#b78a46]/45">
              <summary className="cursor-pointer list-none pr-8 font-semibold leading-7 marker:content-none">{item.question}<span className="float-right text-[#b78a46] group-open:rotate-45">+</span></summary>
              <p className="mt-4 text-sm leading-7 text-[#6f685f]">{item.answer}</p>
            </details>)}</div>
          </section>;
        })}
      </div>
    </div></section>

    <section className="bg-[#efe8dc] section-pad"><div className="container-shell grid gap-10 lg:grid-cols-[1fr_.7fr]">
      <div><p className="eyebrow">Need an order-specific answer?</p><h2 className="font-display mt-4 text-4xl md:text-5xl">Ask Minta before making the trip.</h2><p className="mt-5 max-w-2xl text-base leading-8 text-[#6f685f]">The physical shop is at {business.address}. You can also explore our <Link href="/guides" className="font-semibold text-[#8f6833] underline underline-offset-4">tailoring guides</Link> or message us about the garment you have in mind.</p></div>
      <div className="flex items-center lg:justify-end"><WhatsAppButton label="Ask on WhatsApp" /></div>
    </div></section>
  </>;
}
