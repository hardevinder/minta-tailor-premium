"use client";

import { FormEvent, useState } from "react";
import { business, services } from "@/data/site";

export function ContactForm() {
  const [status, setStatus] = useState("");
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const phone = String(data.get("phone") || "");
    const service = String(data.get("service") || "Custom stitching");
    const note = String(data.get("note") || "");
    const message = encodeURIComponent(`Hello Minta Tailor and Drapers,\n\nName: ${name}\nPhone: ${phone}\nService: ${service}\nMessage: ${note}`);
    window.open(`https://wa.me/${business.phoneRaw}?text=${message}`, "_blank", "noopener,noreferrer");
    setStatus("WhatsApp opened with your enquiry details.");
  }
  return <form onSubmit={submit} className="grid gap-5 bg-white p-7 shadow-[0_30px_80px_rgba(27,22,15,.09)] md:p-10"><div className="grid gap-5 md:grid-cols-2"><label className="grid gap-2 text-xs font-bold uppercase tracking-[.14em]">Your name<input required name="name" className="h-13 border border-black/15 bg-[#fbf8f1] px-4 text-sm font-normal tracking-normal outline-none focus:border-[#b78a46]" /></label><label className="grid gap-2 text-xs font-bold uppercase tracking-[.14em]">Phone number<input required name="phone" inputMode="tel" className="h-13 border border-black/15 bg-[#fbf8f1] px-4 text-sm font-normal tracking-normal outline-none focus:border-[#b78a46]" /></label></div><label className="grid gap-2 text-xs font-bold uppercase tracking-[.14em]">Interested in<select name="service" className="h-13 border border-black/15 bg-[#fbf8f1] px-4 text-sm font-normal tracking-normal outline-none focus:border-[#b78a46]"><option>Custom stitching</option>{services.map(s => <option key={s.slug}>{s.title}</option>)}</select></label><label className="grid gap-2 text-xs font-bold uppercase tracking-[.14em]">Tell us what you need<textarea name="note" rows={5} className="border border-black/15 bg-[#fbf8f1] p-4 text-sm font-normal tracking-normal outline-none focus:border-[#b78a46]" placeholder="Occasion, preferred style, expected date…" /></label><button className="gold-button w-full md:w-fit" type="submit">Send via WhatsApp ↗</button>{status && <p className="text-sm text-[#756d62]">{status}</p>}</form>;
}
