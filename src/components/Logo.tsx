import Link from "next/link";

export function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="Minta Tailor and Drapers home">
      <span className={`grid h-12 w-12 place-items-center border ${inverse ? "border-[#d8bb88] text-[#d8bb88]" : "border-[#b78a46] text-[#b78a46]"}`}>
        <span className="font-display text-xl tracking-[-.08em]">MT</span>
      </span>
      <span className="leading-none">
        <span className={`font-display block text-[1.05rem] tracking-[.08em] ${inverse ? "text-white" : "text-[#161513]"}`}>MINTA</span>
        <span className={`mt-1 block text-[.56rem] font-bold tracking-[.21em] ${inverse ? "text-[#d8bb88]" : "text-[#8b6a39]"}`}>TAILOR & DRAPERS</span>
      </span>
    </Link>
  );
}
