import type { Metadata } from "next";
import Link from "next/link";
import { SectionTitle } from "@/components/SectionTitle";
import { guides } from "@/data/guides";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Mens Tailoring Guides | Suits, Sherwani & Groom Wear",
  description: "Practical Minta Tailor guides for coat-pant fit, made-to-measure suits, wedding sherwanis, groom outfit choices and wedding tailoring timelines.",
  path: "/guides",
  keywords: ["mens tailoring guides", "suit fitting guide Punjab", "sherwani fitting guide", "groom tailoring guide"],
});

export default function GuidesPage() {
  const breadcrumbSchema = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Guides", path: "/guides" },
  ]);

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c") }} />
    <section className="bg-[#171512] py-24 text-white"><div className="container-shell">
      <p className="eyebrow">Minta tailoring journal</p>
      <h1 className="font-display mt-4 max-w-5xl text-5xl leading-[1.04] md:text-7xl">Practical guides for better-fitting menswear.</h1>
      <p className="mt-6 max-w-3xl text-base leading-8 text-white/65">Clear, useful guidance on suits, coat pants, wedding sherwanis and groom tailoring — written around the decisions customers actually make before a fitting.</p>
    </div></section>

    <section className="section-pad"><div className="container-shell">
      <SectionTitle eyebrow="Read & prepare" title="Know what to look for before your next fitting." text="These are educational guides, not substitutes for seeing a garment on the wearer. Use them to arrive with better questions and clearer preferences." />
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{guides.map((guide) => <Link key={guide.slug} href={`/guides/${guide.slug}`} className="group flex min-h-[310px] flex-col border border-black/10 bg-white p-7 transition hover:border-[#b78a46]/55">
        <p className="eyebrow">{guide.eyebrow}</p>
        <h2 className="font-display mt-4 text-3xl leading-tight">{guide.title}</h2>
        <p className="mt-4 text-sm leading-7 text-[#6f685f]">{guide.description}</p>
        <div className="mt-auto pt-7 text-xs font-bold uppercase tracking-[.14em] text-[#8f6833]">{guide.readTime} · Read guide →</div>
      </Link>)}</div>
    </div></section>
  </>;
}
