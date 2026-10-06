import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { guideBySlug, guides } from "@/data/guides";
import { services } from "@/data/site";
import { articleJsonLd, breadcrumbJsonLd, createMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = guideBySlug(slug);
  if (!guide) return {};
  return createMetadata({
    title: guide.title,
    description: guide.description,
    path: `/guides/${guide.slug}`,
    keywords: guide.keywords,
  });
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = guideBySlug(slug);
  if (!guide) notFound();
  const relatedServices = services.filter((service) => guide.relatedServiceSlugs.includes(service.slug));
  const articleSchema = articleJsonLd(guide);
  const breadcrumbSchema = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Guides", path: "/guides" },
    { name: guide.title, path: `/guides/${guide.slug}` },
  ]);

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c") }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c") }} />

    <article>
      <header className="bg-[#171512] py-24 text-white"><div className="container-shell">
        <p className="eyebrow">{guide.eyebrow}</p>
        <h1 className="font-display mt-4 max-w-5xl text-5xl leading-[1.04] md:text-7xl">{guide.h1}</h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-white/65">{guide.intro}</p>
        <p className="mt-5 text-xs font-bold uppercase tracking-[.14em] text-[#d6b57a]">{guide.readTime} · By Minta Tailor and Drapers</p>
      </div></header>

      <div className="section-pad"><div className="container-shell grid gap-14 lg:grid-cols-[1fr_300px]">
        <div className="space-y-14">{guide.sections.map((section, index) => <section key={section.heading}>
          <p className="font-display text-2xl text-[#b78a46]">0{index + 1}</p>
          <h2 className="font-display mt-3 text-4xl leading-tight">{section.heading}</h2>
          <div className="mt-5 space-y-4">{section.paragraphs.map((paragraph) => <p key={paragraph} className="text-base leading-8 text-[#6f685f]">{paragraph}</p>)}</div>
          {section.bullets && <ul className="mt-6 space-y-3 border-l-2 border-[#b78a46]/45 pl-6 text-sm leading-7 text-[#5f5951]">{section.bullets.map((bullet) => <li key={bullet}>• {bullet}</li>)}</ul>}
        </section>)}</div>

        <aside className="h-fit border border-black/10 bg-[#fbf8f1] p-7 lg:sticky lg:top-28">
          <p className="eyebrow">Related tailoring</p>
          <div className="mt-5 space-y-4">{relatedServices.map((service) => <Link key={service.slug} href={`/services/${service.slug}`} className="block border-b border-black/10 pb-4"><p className="font-display text-xl">{service.title}</p><p className="mt-1 text-xs leading-5 text-[#746e64]">{service.short}</p></Link>)}</div>
          <div className="mt-6"><WhatsAppButton label="Discuss your fitting" /></div>
        </aside>
      </div></div>
    </article>

    <section className="bg-[#efe8dc] section-pad"><div className="container-shell flex flex-col gap-5 md:flex-row md:items-center md:justify-between"><div><p className="eyebrow">Keep learning</p><h2 className="font-display mt-3 text-4xl">More practical tailoring guidance.</h2></div><Link href="/guides" className="ghost-button">View all guides</Link></div></section>
  </>;
}
