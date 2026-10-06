import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { locationBySlug, priorityLocations } from "@/data/locations";
import { business, services } from "@/data/site";
import { breadcrumbJsonLd, createMetadata, locationJsonLd } from "@/lib/seo";

export function generateStaticParams() { return priorityLocations.map((location) => ({ slug: location.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const location = locationBySlug(slug);
  if (!location) return {};
  return createMetadata({
    title: `Gents Tailor near ${location.name} | Suits & Sherwani`,
    description: `${location.intro} Visit Minta Tailor and Drapers in Kharar for custom suits, pant coats, sherwanis, kurta pajamas, shirts and trousers.`,
    path: `/locations/${location.slug}`,
    keywords: location.keywords,
  });
}

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const location = locationBySlug(slug);
  if (!location) notFound();

  const placeSchema = locationJsonLd(location);
  const breadcrumbSchema = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Locations", path: "/locations" },
    { name: location.name, path: `/locations/${location.slug}` },
  ]);

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(placeSchema).replace(/</g, "\\u003c") }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c") }} />

    <section className="bg-[#171512] py-24 text-white"><div className="container-shell">
      <p className="eyebrow">Serving {location.name} · From our Kharar shop</p>
      <h1 className="font-display mt-4 max-w-4xl text-5xl leading-[1.05] md:text-7xl">Gents tailor near {location.name} for suits, pant coats and sherwanis.</h1>
      <p className="mt-6 max-w-3xl text-base leading-8 text-white/65">{location.intro}</p>
      <div className="mt-9"><WhatsAppButton label={`Enquire from ${location.name}`} message={`Hello Minta Tailor and Drapers, I am enquiring from ${location.name} about custom tailoring.`} /></div>
    </div></section>

    <section className="section-pad"><div className="container-shell grid gap-12 lg:grid-cols-[1fr_.8fr]">
      <div><p className="eyebrow">Made-to-measure menswear</p><h2 className="font-display mt-4 text-4xl md:text-5xl">Personal fitting at Minta Tailor, Kharar.</h2><p className="mt-6 text-base leading-8 text-[#6f685f]">{location.localAngle}</p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">{services.slice(0,5).map((service)=><Link key={service.slug} href={`/services/${service.slug}`} className="border border-black/10 bg-white p-5 font-semibold hover:border-[#b78a46]/50">{service.title} →</Link>)}</div>
      </div>
      <aside className="h-fit border border-[#b78a46]/30 bg-white p-8"><p className="eyebrow">Visit details</p><p className="mt-5 text-sm leading-7 text-[#6f685f]"><strong className="text-[#171512]">Physical shop</strong><br/>{business.address}</p><p className="mt-5 text-sm leading-7 text-[#6f685f]"><strong className="text-[#171512]">Nearby search areas</strong><br/>{location.nearby.join(" · ")}</p><p className="mt-5 text-sm leading-7 text-[#6f685f]"><strong className="text-[#171512]">Phone / WhatsApp</strong><br/>{business.phoneDisplay}</p></aside>
    </div></section>

    <section className="bg-[#efe8dc] section-pad"><div className="container-shell"><p className="eyebrow">Common questions</p><div className="mt-8 grid gap-5 md:grid-cols-2">
      <div className="bg-[#fbf8f1] p-7"><h2 className="font-display text-2xl">Do you have a branch in {location.name}?</h2><p className="mt-3 text-sm leading-7 text-[#6f685f]">Our physical shop is in Kharar. This page helps clients from {location.name} find our services and plan a fitting visit without creating a false local branch listing.</p></div>
      <div className="bg-[#fbf8f1] p-7"><h2 className="font-display text-2xl">What can I get stitched?</h2><p className="mt-3 text-sm leading-7 text-[#6f685f]">Pant coats, suits, wedding sherwanis, kurta pajamas, shirts, trousers and selected alterations. Contact us with your occasion and expected date for guidance.</p></div>
    </div></div></section>
  </>;
}
