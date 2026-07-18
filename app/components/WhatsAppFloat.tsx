import WhatsAppIcon from "./WhatsAppIcon";

const WHATSAPP = "https://wa.me/96899880403";

export default function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      title="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex items-center justify-center w-14 h-14 rounded-full text-white transition-transform hover:scale-105"
      style={{ backgroundColor: "#25D366", boxShadow: "0 8px 24px rgba(0,0,0,0.28)" }}
    >
      <span
        className="absolute inline-flex h-full w-full rounded-full animate-ping"
        style={{ backgroundColor: "#25D366", opacity: 0.3 }}
        aria-hidden="true"
      />
      <WhatsAppIcon size={30} className="relative" />
    </a>
  );
}
