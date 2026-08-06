import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/data/site";
import { ArrowIcon } from "./Icons";

export function ServiceCard({ service }: { service: Service }) {
  return <Link href={`/services/${service.slug}`} className="card-lift group bg-white"><div className="image-frame aspect-[4/3]"><Image src={service.image} alt={service.title} fill className="object-cover transition duration-700 group-hover:scale-[1.04]" /></div><div className="p-7"><p className="eyebrow">{service.eyebrow}</p><h3 className="font-display mt-3 text-3xl">{service.title}</h3><p className="mt-3 text-sm leading-7 text-[#746e64]">{service.short}</p><span className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.16em] text-[#9b733c]">Discover <ArrowIcon /></span></div></Link>;
}
