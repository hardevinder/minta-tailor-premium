import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowIcon, PhoneIcon, PinIcon } from "@/components/Icons";
import { SectionTitle } from "@/components/SectionTitle";
import { ServiceCard } from "@/components/ServiceCard";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { business, processSteps, services, testimonials } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...createMetadata({
    title: "Custom Tailor in Kharar",
    description: "Made-to-measure pant coats, sherwanis, kurta pajamas, shirts, trousers and alterations by Minta Tailor and Drapers in Kharar.",
    path: "/",
    keywords: ["best tailor in Kharar", "gents tailor Kharar"],
  }),
  title: { absolute: `${business.name} | Custom Tailor in Kharar` },
};

export default function HomePage() {
  return <>
    <section className="relative min-h-[760px] overflow-hidden bg-[#171512] text-white">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, #b78a46 0, transparent 28%), radial-gradient(circle at 80% 70%, #5f4930 0, transparent 30%)" }} />
      <div className="container-shell relative grid min-h-[760px] items-center gap-12 py-20 lg:grid-cols-[1.05fr_.95fr]">
        <div className="z-10"><p className="eyebrow">Established {business.established} · {business.specialty} · Kharar</p><h1 className="font-display mt-6 max-w-3xl text-6xl leading-[.96] md:text-8xl">A better fit begins with better tailoring.</h1><p className="mt-7 max-w-xl text-base leading-8 text-white/65 md:text-lg">Pant coats, sherwanis, kurta pajamas and wardrobe essentials—measured carefully, fitted thoughtfully and finished with character.</p><div className="mt-9 flex flex-wrap gap-3"><WhatsAppButton label="Book a consultation" /><Link href="/gallery" className="ghost-button">View lookbook <ArrowIcon /></Link></div><div className="mt-12 flex flex-col gap-4 border-t border-white/15 pt-7 text-sm text-white/55 sm:flex-row sm:gap-8"><span className="flex items-center gap-2"><PinIcon />Civil Hospital Road, Kharar</span><a href={`tel:+${business.phoneRaw}`} className="flex items-center gap-2"><PhoneIcon />{business.phoneDisplay}</a></div></div>
        <div className="relative mx-auto w-full max-w-[540px]"><div className="absolute -left-8 top-12 h-48 w-36 border border-[#b78a46]/40"/><div className="image-frame relative aspect-[4/5]"><Image src="/images/hero-tailor.jpg" alt="Premium bespoke tailoring illustration" fill priority className="object-cover" /></div><div className="absolute -bottom-6 -right-4 bg-[#f4efe5] px-7 py-6 text-[#171512] shadow-2xl"><p className="eyebrow">Made for you</p><p className="font-display mt-2 text-2xl">Measured. Fitted. Refined.</p></div></div>
      </div>
    </section>

    <section className="section-pad"><div className="container-shell"><SectionTitle eyebrow="Our services" title="From everyday essentials to landmark occasions." text="Choose a service to see the tailoring approach, fitting details and ideal use." /><div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{services.map(service => <ServiceCard key={service.slug} service={service} />)}</div></div></section>

    <section className="bg-[#efe8dc] section-pad"><div className="container-shell grid items-center gap-14 lg:grid-cols-2"><div className="grid grid-cols-2 gap-4"><div className="image-frame mt-12 aspect-[3/4]"><Image src="/images/sewing-machine.jpg" alt="Tailoring detail" fill className="object-cover" /></div><div className="image-frame aspect-[3/4]"><Image src="/images/fabric.jpg" alt="Premium fabric detail" fill className="object-cover" /></div></div><div><SectionTitle eyebrow="The Minta standard" title="Precision should be visible. Comfort should be felt." text="We treat tailoring as a sequence of thoughtful decisions—from cloth and cut to balance, movement and final pressing." /><div className="mt-9 grid gap-5 sm:grid-cols-2">{["Detailed measurement profile","Fitting-led refinement","Occasion-aware styling","Clean finishing and pressing"].map((x,i)=><div key={x} className="border-t border-[#b78a46]/35 pt-4"><span className="font-display text-2xl text-[#b78a46]">0{i+1}</span><p className="mt-2 text-sm font-semibold">{x}</p></div>)}</div><Link href="/about" className="mt-9 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.16em] text-[#8f6833]">Our approach <ArrowIcon /></Link></div></div></section>

    <section className="section-pad bg-[#171512]"><div className="container-shell"><SectionTitle eyebrow="How it works" title="A considered process, from conversation to collection." light /><div className="mt-14 grid gap-px bg-white/10 md:grid-cols-4">{processSteps.map(step=><div key={step.number} className="bg-[#171512] p-7 md:p-8"><p className="font-display text-3xl text-[#b78a46]">{step.number}</p><h3 className="font-display mt-12 text-2xl text-white">{step.title}</h3><p className="mt-3 text-sm leading-7 text-white/55">{step.text}</p></div>)}</div></div></section>

    <section className="section-pad"><div className="container-shell"><SectionTitle eyebrow="Our promise" title="A quiet confidence in every detail." align="center" /><div className="mt-12 grid gap-5 md:grid-cols-3">{testimonials.map(t=><blockquote key={t.name} className="border border-black/10 bg-white p-8 text-center"><p className="font-display text-2xl leading-relaxed">“{t.quote}”</p><footer className="mt-6 text-[.68rem] font-bold uppercase tracking-[.18em] text-[#9b733c]">{t.name}</footer></blockquote>)}</div></div></section>

    <section className="bg-[#b78a46] py-16 text-white"><div className="container-shell flex flex-col items-start justify-between gap-7 lg:flex-row lg:items-center"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-white/70">Your next fitting</p><h2 className="font-display mt-3 text-4xl md:text-5xl">Let’s create something that fits properly.</h2></div><WhatsAppButton label="Start an enquiry" message="Hello Minta Tailor and Drapers, I would like to book a tailoring consultation." /></div></section>
  </>;
}
