import type { Metadata } from "next";
import Link from "next/link";
import { priorityLocations, punjabCities } from "@/data/locations";
import { business } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Gents Tailor Serving Kharar, Mohali & Punjab",
  description: "Minta Tailor and Drapers is a Kharar-based gents tailor serving clients from Mohali, Landran, Kurali, Morinda and across Punjab for suits, pant coats, sherwanis and custom menswear.",
  path: "/locations",
  keywords: ["gents tailor Punjab", "best tailor Punjab", "tailor Mohali", "tailor Kharar", "tailor Landran", "tailor Kurali", "tailor Morinda"],
});

export default function LocationsPage() {
  return <>
    <section className="bg-[#171512] py-24 text-white">
      <div className="container-shell">
        <p className="eyebrow">Areas we serve</p>
        <h1 className="font-display mt-4 max-w-4xl text-5xl leading-[1.05] md:text-7xl">Kharar-based tailoring for clients across Mohali and Punjab.</h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-white/65">Our physical shop is on Civil Hospital Road, Kharar. Clients from nearby towns and across Punjab can contact us for made-to-measure pant coats, suits, wedding sherwanis, kurta pajamas, shirts, trousers and alterations.</p>
      </div>
    </section>

    <section className="section-pad">
      <div className="container-shell">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {priorityLocations.map((location) => <Link key={location.slug} href={`/locations/${location.slug}`} className="border border-black/10 bg-white p-7 transition hover:-translate-y-1 hover:border-[#b78a46]/50">
            <p className="eyebrow">{location.regionLabel}</p>
            <h2 className="font-display mt-3 text-3xl">Tailor near {location.name}</h2>
            <p className="mt-4 text-sm leading-7 text-[#6f685f]">{location.intro}</p>
            <p className="mt-6 text-xs font-bold uppercase tracking-[.14em] text-[#8f6833]">Explore location →</p>
          </Link>)}
        </div>
      </div>
    </section>

    <section className="bg-[#efe8dc] section-pad">
      <div className="container-shell grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
        <div><p className="eyebrow">Punjab-wide enquiries</p><h2 className="font-display mt-4 text-4xl md:text-5xl">One trusted Kharar shop. A wider Punjab reach.</h2></div>
        <div>
          <p className="text-base leading-8 text-[#6f685f]">Minta Tailor and Drapers does not claim branches in these cities. We are based in Kharar and welcome enquiries from clients travelling from across Punjab. For fittings, timelines and garment planning, contact us before travelling.</p>
          <div className="mt-7 flex flex-wrap gap-2">{punjabCities.map((city)=><span key={city} className="border border-black/10 bg-[#fbf8f1] px-3 py-2 text-xs font-semibold">{city}</span>)}</div>
          <p className="mt-7 text-sm text-[#6f685f]">Shop: {business.address} · Call/WhatsApp: {business.phoneDisplay}</p>
        </div>
      </div>
    </section>
  </>;
}
