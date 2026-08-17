import { business } from "@/data/site";

export function WhatsAppButton({
  label = "Enquire on WhatsApp",
  message,
}: {
  label?: string;
  message?: string;
}) {
  const text = encodeURIComponent(message || business.whatsappMessage);

  return (
    <a
      className="gold-button"
      href={`https://wa.me/${business.whatsappRaw}?text=${text}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {label}
      <span aria-hidden="true">↗</span>
    </a>
  );
}
