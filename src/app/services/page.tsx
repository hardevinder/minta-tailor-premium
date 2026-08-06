import type { Metadata } from "next";
import { SectionTitle } from "@/components/SectionTitle";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/data/site";

export const metadata: Metadata = { title: "Tailoring Services", description: "Explore custom stitching services by Minta Tailor and Drapers in Kharar." };
export default function ServicesPage(){return <><section className="bg-[#171512] py-24 text-white"><div className="container-shell"><SectionTitle eyebrow="Tailoring services" title="Made around your measurements, not a standard size." text="Explore our tailoring services for formalwear, weddingwear, ethnicwear, essentials and alterations." light /></div></section><section className="section-pad"><div className="container-shell grid gap-6 md:grid-cols-2 lg:grid-cols-3">{services.map(s=><ServiceCard key={s.slug} service={s}/>)}</div></section></>}
