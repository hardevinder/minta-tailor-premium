import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PhoneIcon, PinIcon } from "@/components/Icons";
import { business } from "@/data/site";

export const metadata:Metadata={title:"Contact",description:"Contact Minta Tailor and Drapers on Civil Hospital Road, Kharar."};
export default function ContactPage(){const maps=`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(business.address)}`;return <><section className="bg-[#171512] py-24 text-white"><div className="container-shell"><p className="eyebrow">Contact & visit</p><h1 className="font-display mt-4 max-w-3xl text-6xl leading-none md:text-7xl">Let’s talk about your next garment.</h1><p className="mt-6 max-w-xl text-lg leading-8 text-white/60">Share the occasion, garment type and expected date. We will guide you on the next fitting step.</p></div></section><section className="section-pad"><div className="container-shell grid gap-12 lg:grid-cols-[.72fr_1.28fr]"><div><p className="eyebrow">Visit the shop</p><h2 className="font-display mt-4 text-4xl">Minta Tailor and Drapers</h2><div className="mt-8 space-y-6 text-sm leading-7 text-[#6f685f]"><a href={maps} target="_blank" rel="noreferrer" className="flex gap-3"><PinIcon /><span>{business.address}</span></a><div className="space-y-3">
<a href={`tel:+${business.phoneRaw}`} className="flex gap-3"><PhoneIcon />{business.phoneDisplay}</a>
<a href={`tel:+${business.secondaryPhoneRaw}`} className="flex gap-3"><PhoneIcon />{business.secondaryPhoneDisplay}</a>
</div>
<p><strong className="text-[#171512]">Hours</strong><br/>{business.hours}</p>
<p><strong className="text-[#171512]">Established</strong><br/>{business.established}</p></div><a href={maps} target="_blank" rel="noreferrer" className="gold-button mt-8">Open directions ↗</a></div><ContactForm /></div></section></>}
