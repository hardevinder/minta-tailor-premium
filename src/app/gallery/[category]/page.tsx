import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowIcon } from "@/components/Icons";
import { galleryCategories, galleryItems } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export function generateStaticParams(){return galleryCategories.map(c=>({category:c.slug}));}
export async function generateMetadata({params}:{params:Promise<{category:string}>}):Promise<Metadata>{const {category}=await params;const c=galleryCategories.find(x=>x.slug===category);return c?createMetadata({title:`${c.label} Lookbook`,description:`${c.intro} Browse tailoring inspiration from Minta Tailor and Drapers in Kharar.`,path:`/gallery/${c.slug}`,keywords:[`${c.label.toLowerCase()} tailor Kharar`,`${c.label.toLowerCase()} designs`]}):{};}
export default async function CategoryPage({params}:{params:Promise<{category:string}>}){const {category}=await params;const c=galleryCategories.find(x=>x.slug===category);if(!c)notFound();const items=galleryItems.filter(x=>x.category===category);return <><section className="bg-[#171512] py-24 text-white"><div className="container-shell"><p className="eyebrow">Lookbook collection</p><h1 className="font-display mt-4 text-6xl md:text-7xl">{c.label}</h1><p className="mt-5 max-w-xl text-lg text-white/60">{c.intro}</p></div></section><section className="section-pad"><div className="container-shell"><Link href="/gallery" className="mb-10 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.15em] text-[#9b733c]">← Full lookbook</Link><div className="grid gap-7 md:grid-cols-2">{items.map(item=><div key={item.title}><div className="image-frame relative aspect-[4/5]"><Image src={item.image} alt={item.title} fill className="object-cover" /></div><h2 className="font-display mt-5 text-3xl">{item.title}</h2></div>)}</div><Link href="/contact" className="gold-button mt-12">Discuss your style <ArrowIcon /></Link></div></section></>}
