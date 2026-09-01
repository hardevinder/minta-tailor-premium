import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowIcon } from "@/components/Icons";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { services } from "@/data/site";
import { breadcrumbJsonLd, createMetadata, serviceJsonLd } from "@/lib/seo";

export function generateStaticParams(){return services.map(service=>({slug:service.slug}));}

export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
  const {slug}=await params;
  const service=services.find(s=>s.slug===slug);
  if(!service)return{};
  return createMetadata({
    title:service.seoTitle,
    description:service.seoDescription,
    path:`/services/${service.slug}`,
    keywords:service.seoKeywords,
    image:service.image,
  });
}

export default async function ServicePage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const service=services.find(s=>s.slug===slug);
  if(!service)notFound();

  const serviceSchema=serviceJsonLd(service);
  const breadcrumbSchema=breadcrumbJsonLd([
    {name:"Home",path:"/"},
    {name:"Services",path:"/services"},
    {name:service.title,path:`/services/${service.slug}`},
  ]);

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(serviceSchema).replace(/</g,"\\u003c")}} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(breadcrumbSchema).replace(/</g,"\\u003c")}} />
    <section className="bg-[#171512] text-white"><div className="container-shell grid min-h-[650px] items-center gap-12 py-20 lg:grid-cols-2"><div><p className="eyebrow">{service.eyebrow} · Kharar</p><h1 className="font-display mt-5 text-6xl leading-none md:text-7xl">{service.seoHeading}</h1><p className="mt-7 max-w-xl text-lg leading-8 text-white/62">{service.description}</p><div className="mt-9 flex flex-wrap gap-3"><WhatsAppButton label="Enquire about this" message={`Hello Minta Tailor and Drapers, I would like to enquire about ${service.title}.`} /><Link href="/services" className="ghost-button">All services <ArrowIcon /></Link></div></div><div className="image-frame relative aspect-[4/5]"><Image src={service.image} alt={`${service.seoHeading} at Minta Tailor and Drapers`} fill priority className="object-cover" /></div></div></section>

    <section className="section-pad"><div className="container-shell grid gap-14 lg:grid-cols-[1fr_.8fr]"><div><p className="eyebrow">Local tailoring in Kharar</p><h2 className="font-display mt-4 text-4xl md:text-5xl">Made-to-measure service with personal fitting.</h2><p className="mt-6 max-w-3xl text-base leading-8 text-[#6f685f]">{service.localIntro}</p><div className="mt-10 grid gap-px bg-black/10 sm:grid-cols-2">{service.highlights.map((h,i)=><div className="bg-[#fbf8f1] p-6" key={h}><span className="font-display text-2xl text-[#b78a46]">0{i+1}</span><p className="mt-4 font-semibold">{h}</p></div>)}</div></div><aside className="h-fit border border-[#b78a46]/30 bg-white p-8"><p className="eyebrow">At a glance</p><div className="mt-6 border-t border-black/10 pt-6"><p className="text-xs font-bold uppercase tracking-[.14em]">Ideal for</p><p className="mt-2 text-sm leading-7 text-[#746e64]">{service.idealFor}</p></div><div className="mt-6 border-t border-black/10 pt-6"><p className="text-xs font-bold uppercase tracking-[.14em]">Turnaround</p><p className="mt-2 text-sm leading-7 text-[#746e64]">{service.turnaround}</p></div><div className="mt-6 border-t border-black/10 pt-6"><p className="text-xs font-bold uppercase tracking-[.14em]">Service area</p><p className="mt-2 text-sm leading-7 text-[#746e64]">Kharar · SAS Nagar · Mohali</p></div></aside></div></section>
  </>
}
