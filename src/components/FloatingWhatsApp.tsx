import { business } from "@/data/site";

export function FloatingWhatsApp() {
  const message = encodeURIComponent(business.whatsappMessage);

  return (
    <a
      href={`https://wa.me/${business.whatsappRaw}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`WhatsApp enquiry - ${business.name}`}
      title="Enquire on WhatsApp"
      className="
        fixed bottom-5 right-5 z-[9999]
        flex items-center gap-3
        rounded-full bg-[#25D366]
        p-3 text-white
        shadow-[0_10px_35px_rgba(0,0,0,0.30)]
        transition duration-300
        hover:-translate-y-1
        hover:shadow-[0_14px_40px_rgba(0,0,0,0.38)]
        md:px-5 md:py-3
      "
    >
      <span
        className="
          flex h-11 w-11 shrink-0
          items-center justify-center
          rounded-full bg-white/15
        "
      >
        <svg
          viewBox="0 0 32 32"
          aria-hidden="true"
          className="h-7 w-7 fill-current"
        >
          <path d="M16.03 3C8.84 3 3 8.75 3 15.84c0 2.27.6 4.48 1.75 6.42L3 28.67l6.6-1.7a13.1 13.1 0 0 0 6.43 1.66C23.2 28.63 29 22.87 29 15.84 29 8.75 23.2 3 16.03 3Zm0 23.46c-2.03 0-4.02-.54-5.75-1.56l-.41-.24-3.92 1.01 1.05-3.8-.27-.43a10.47 10.47 0 0 1-1.61-5.6c0-5.91 4.9-10.72 10.91-10.72 6 0 10.88 4.81 10.88 10.72 0 5.85-4.88 10.62-10.88 10.62Zm5.98-7.96c-.33-.16-1.95-.95-2.25-1.06-.3-.11-.52-.16-.74.16-.22.32-.85 1.06-1.04 1.27-.19.22-.38.24-.71.08-.33-.16-1.39-.5-2.65-1.61a9.9 9.9 0 0 1-1.83-2.24c-.19-.32-.02-.5.14-.66.15-.14.33-.38.49-.57.16-.19.22-.32.33-.54.11-.22.05-.41-.03-.57-.08-.16-.74-1.76-1.01-2.41-.27-.64-.54-.55-.74-.56h-.63c-.22 0-.57.08-.87.41-.3.32-1.15 1.11-1.15 2.71 0 1.6 1.18 3.14 1.34 3.36.16.22 2.32 3.5 5.63 4.91.79.34 1.4.54 1.88.69.79.25 1.51.22 2.08.13.63-.09 1.95-.78 2.22-1.54.27-.76.27-1.41.19-1.54-.08-.14-.3-.22-.63-.38Z" />
        </svg>
      </span>

      <span className="hidden text-left md:block">
        <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-white/80">
          Quick enquiry
        </span>
        <span className="block text-sm font-bold">
          WhatsApp Us
        </span>
      </span>
    </a>
  );
}
