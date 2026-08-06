"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { business } from "@/data/site";
import { Logo } from "./Logo";
import { MenuIcon, PhoneIcon } from "./Icons";

const links = [
  ["Home", "/"], ["Services", "/services"], ["Gallery", "/gallery"], ["Our Story", "/about"], ["Contact", "/contact"],
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#fbf8f1]/95 backdrop-blur-xl">
      <div className="container-shell flex h-[82px] items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className={`text-[.72rem] font-bold uppercase tracking-[.15em] transition hover:text-[#b78a46] ${pathname === href || (href !== "/" && pathname.startsWith(href)) ? "text-[#b78a46]" : "text-[#34302a]"}`}>{label}</Link>
          ))}
        </nav>
        <a href={`tel:+${business.phoneRaw}`} className="hidden items-center gap-2 text-sm font-semibold text-[#2e2a25] md:flex"><PhoneIcon /> {business.phoneDisplay}</a>
        <button onClick={() => setOpen(!open)} className="grid h-11 w-11 place-items-center border border-black/15 lg:hidden" aria-label="Toggle menu"><MenuIcon open={open} /></button>
      </div>
      {open && (
        <div className="border-t border-black/10 bg-[#fbf8f1] lg:hidden">
          <nav className="container-shell flex flex-col py-4" aria-label="Mobile navigation">
            {links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)} className="border-b border-black/10 py-4 text-sm font-bold uppercase tracking-[.14em]">{label}</Link>)}
            <a href={`tel:+${business.phoneRaw}`} className="mt-4 flex items-center gap-2 py-2 font-semibold"><PhoneIcon /> {business.phoneDisplay}</a>
          </nav>
        </div>
      )}
    </header>
  );
}
