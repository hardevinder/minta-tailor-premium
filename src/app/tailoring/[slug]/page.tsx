import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { priorityLocations } from "@/data/locations";
import { searchIntentBySlug, searchIntentPages } from "@/data/searchIntents";
import { business, services } from "@/data/site";
import { breadcrumbJsonLd, createMetadata, searchIntentJsonLd } from "@/lib/seo";

export function generateStaticParams() { return searchIntentPages.map((page) => ({ slug: page.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = searchIntentBySlug(slug);
  if (!page) return {};
  return createMetadata({
    title: page.title,
    description: page.description,
    path: `/tailoring/${page.slug}`,
    keywords: page.keywords,
  });
}

export default async function SearchIntentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = searchIntentBySlug(slug);
  if (!page) notFound();

  const primaryService = services.find((service) => service.slug === page.primaryServiceSlug);
  if (!primaryService) notFound();
  const secondaryServices = services.filter((service) => page.secondaryServiceSlugs.includes(service.slug));
  const relatedLocations = priorityLocations.filter((location) => page.relatedLocationSlugs.includes(location.slug));

  const serviceSchema = searchIntentJsonLd(page, primaryService);
  const breadcrumbSchema = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Tailoring", path: "/tailoring" },
    { name: page.title.split(" | ")[0], path: `/tailoring/${page.slug}` },
  ]);

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema).replace(/</g, "\\u003c") }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c") }} />

    <section className="bg-[#171512] py-24 text-white"><div className="container-shell">
      <p className="eyebrow">{page.eyebrow} · Minta Tailor</p>
      <h1 className="font-display mt-4 max-w-5xl text-5xl leading-[1.04] md:text-7xl">{page.h1}</h1>
      <p className="mt-6 max-w-3xl text-base leading-8 text-white/65">{page.intro}</p>
      <div className="mt-9 flex flex-wrap gap-3"><WhatsAppButton label="Discuss your fitting" message={`Hello Minta Tailor and Drapers, I found your ${page.title.split(" | ")[0]} page and would like to discuss a fitting.`} /><Link href={`/services/${primaryService.slug}`} className="ghost-button">View {primaryService.title}</Link></div>
    </div></section>

    <section className="section-pad"><div className="container-shell grid gap-14 lg:grid-cols-[1.05fr_.75fr]">
      <div><p className="eyebrow">Why fit matters</p><h2 className="font-display mt-4 text-4xl leading-tight md:text-5xl">Tailoring built around the wearer, occasion and garment.</h2><p className="mt-6 text-base leading-8 text-[#6f685f]">{page.whyMinta}</p>
        <div className="mt-9 grid gap-4 sm:grid-cols-2">{page.fitFocus.map((item, index)=><div key={item} className="border-t border-[#b78a46]/35 pt-4"><span className="font-display text-2xl text-[#b78a46]">0{index+1}</span><p className="mt-2 text-sm font-semibold">{item}</p></div>)}</div>
      </div>
      <aside className="h-fit border border-[#b78a46]/30 bg-[#fbf8f1] p-8"><p className="eyebrow">Good for</p><ul className="mt-5 space-y-3 text-sm leading-7 text-[#6f685f]">{page.idealFor.map((item)=><li key={item}>• {item}</li>)}</ul><div className="mt-7 border-t border-black/10 pt-6"><p className="text-sm leading-7 text-[#6f685f]"><strong className="text-[#171512]">Physical shop</strong><br/>{business.address}</p></div></aside>
    </div></section>

    <section className="bg-[#efe8dc] section-pad"><div className="container-shell"><p className="eyebrow">Related services</p><h2 className="font-display mt-4 text-4xl md:text-5xl">Continue with the service that matches your garment.</h2><div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-4"><Link href={`/services/${primaryService.slug}`} className="border border-black/10 bg-[#fbf8f1] p-6"><p className="font-display text-2xl">{primaryService.title}</p><p className="mt-3 text-sm leading-7 text-[#6f685f]">{primaryService.short}</p></Link>{secondaryServices.map((service)=><Link key={service.slug} href={`/services/${service.slug}`} className="border border-black/10 bg-[#fbf8f1] p-6"><p className="font-display text-2xl">{service.title}</p><p className="mt-3 text-sm leading-7 text-[#6f685f]">{service.short}</p></Link>)}</div></div></section>

    <section className="section-pad"><div className="container-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr]"><div><p className="eyebrow">Location clarity</p><h2 className="font-display mt-4 text-4xl md:text-5xl">One Minta Tailor shop in Kharar.</h2></div><div><p className="text-base leading-8 text-[#6f685f]">{page.locationNote}</p><div className="mt-7 flex flex-wrap gap-3">{relatedLocations.map((location)=><Link key={location.slug} href={`/locations/${location.slug}`} className="border border-black/10 px-4 py-3 text-xs font-bold uppercase tracking-[.12em] text-[#8f6833] hover:border-[#b78a46]/50">{location.name} service area →</Link>)}</div></div></div></section>

    <section className="bg-[#171512] section-pad text-white"><div className="container-shell"><p className="eyebrow">Questions before you visit</p><div className="mt-8 grid gap-5 md:grid-cols-2">{page.questions.map((item)=><div key={item.question} className="border border-white/10 p-7"><h2 className="font-display text-2xl">{item.question}</h2><p className="mt-3 text-sm leading-7 text-white/60">{item.answer}</p></div>)}</div></div></section>
  </>;
}
