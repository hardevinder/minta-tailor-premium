import type { Metadata } from "next";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Gents Tailoring Services in Kharar",
  description:
    "Explore gents tailoring services in Kharar including pant coats, wedding sherwanis, kurta pajamas, shirts, trousers and alterations at Minta Tailor and Drapers.",
  path: "/services",
  keywords: [
    "tailoring services Kharar",
    "gents tailoring Kharar",
    "custom stitching Kharar",
    "mens tailor Kharar",
  ],
});

export default function ServicesPage(){
  return <>
    <section className="bg-[#171512] py-24 text-white">
      <div className="container-shell">
        <p className="eyebrow">Gents tailoring services in Kharar</p>
        <h1 className="font-display mt-4 max-w-4xl text-5xl leading-[1.08] md:text-7xl">Custom tailoring made around your measurements.</h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-white/62">Explore custom tailoring for formalwear, weddingwear, ethnicwear, shirts, trousers and alterations at our Civil Hospital Road shop in Kharar.</p>
      </div>
    </section>
    <section className="section-pad"><div className="container-shell grid gap-6 md:grid-cols-2 lg:grid-cols-3">{services.map(s=><ServiceCard key={s.slug} service={s}/>)}</div></section>
  </>
}
