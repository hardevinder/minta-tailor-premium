import Link from "next/link";
import { business, services } from "@/data/site";
import { Logo } from "./Logo";
import { PhoneIcon, PinIcon } from "./Icons";

export function Footer() {
  return (
    <footer className="bg-[#171512] text-white">
      <div className="container-shell grid gap-12 py-20 lg:grid-cols-[1.4fr_.8fr_.9fr]">
        <div><Logo inverse /><p className="mt-6 max-w-md text-sm leading-7 text-white/60">Custom tailoring for men, shaped around your measurements, occasion and personal style.</p></div>
        <div><p className="eyebrow">Explore</p><div className="mt-5 grid gap-3 text-sm text-white/65"><Link href="/services">All services</Link>{services.slice(0,4).map(s => <Link key={s.slug} href={`/services/${s.slug}`}>{s.title}</Link>)}</div></div>
        <div><p className="eyebrow">Visit us</p><div className="mt-5 space-y-4 text-sm leading-6 text-white/65"><p className="flex gap-3"><PinIcon /><span>{business.address}</span></p><a href={`tel:+${business.phoneRaw}`} className="flex gap-3"><PhoneIcon />{business.phoneDisplay}</a><p>{business.hours}</p></div></div>
      </div>
      <div className="border-t border-white/10"><div className="container-shell flex flex-col gap-2 py-5 text-xs text-white/45 md:flex-row md:items-center md:justify-between"><p>© {new Date().getFullYear()} Minta Tailor and Drapers.</p><p>Crafted for a premium local presence.</p></div></div>
    </footer>
  );
}
