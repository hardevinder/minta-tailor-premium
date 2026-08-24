import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/Icons";
import { SectionTitle } from "@/components/SectionTitle";
import { galleryCategories, galleryItems } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata:Metadata=createMetadata({title:"Tailoring Lookbook",description:"Browse suit, wedding and ethnic-wear tailoring inspiration from Minta Tailor and Drapers in Kharar.",path:"/gallery",keywords:["tailoring designs Kharar","suit and sherwani designs"]});
export default function GalleryPage(){return <><section className="bg-[#171512] py-24"><div className="container-shell"><SectionTitle eyebrow="Lookbook" title="A visual language of fit, proportion and finish." text="Sample styling directions for suits, weddingwear and ethnicwear. Final garments are tailored to each client." light /></div></section><section className="section-pad"><div className="container-shell"><div className="mb-12 flex flex-wrap gap-3">{galleryCategories.map(c=><Link key={c.slug} href={`/gallery/${c.slug}`} className="border border-black/15 px-5 py-3 text-xs font-bold uppercase tracking-[.14em] hover:border-[#b78a46] hover:text-[#9b733c]">{c.label}</Link>)}</div><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{galleryItems.map(item=><div key={item.title} className="group"><div className="image-frame relative aspect-[4/5]"><Image src={item.image} alt={item.title} fill className="object-cover transition duration-700 group-hover:scale-[1.04]" /></div><div className="flex items-center justify-between py-5"><div><p className="text-[.65rem] font-bold uppercase tracking-[.18em] text-[#9b733c]">{galleryCategories.find(c=>c.slug===item.category)?.label}</p><h2 className="font-display mt-1 text-2xl">{item.title}</h2></div><ArrowIcon /></div></div>)}</div></div></section></>}
