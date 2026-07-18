import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import ContactForm from "../components/ContactForm";
import WhatsAppIcon from "../components/WhatsAppIcon";

const PHONE = "+96899880403";
const PHONE_DISPLAY = "+968 9988 0403";
const WHATSAPP = "https://wa.me/96899880403";
const EMAIL = "info@renganallc.com";
const MAPS = "https://www.google.com/maps/search/?api=1&query=Al+Khuwair+Muscat+Oman";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Rengana Capital in Al Khuwair, Muscat. Call, WhatsApp or email to discuss finance and business advisory for your company in Oman.",
  alternates: { canonical: "/contact" },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://renganallc.com/" },
    { "@type": "ListItem", position: 2, name: "Contact", item: "https://renganallc.com/contact" },
  ],
};

export default function ContactPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <PageHero title="Contact" />

      <section className="bg-paper py-24">
        <div className="wrap grid grid-cols-1 lg:grid-cols-2 gap-14">
          {/* Details */}
          <div>
            <p className="eyebrow mb-4">Get in touch</p>
            <h2 className="text-4xl md:text-5xl mb-4">Speak with us today</h2>
            <div className="rule-gold mb-8" />
            <p className="text-muted leading-relaxed mb-10 max-w-md">
              The fastest way to find out how we can help is a quick call — no obligation, just an
              honest conversation about your business and your options.
            </p>

            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-3 bg-navy text-paper px-8 py-4 text-base font-semibold hover:bg-navy-deep transition-colors mb-10"
            >
              <PhoneIcon />
              Call now · {PHONE_DISPLAY}
            </a>

            <ul className="space-y-5 text-sm">
              <li className="flex items-center gap-3">
                <WhatsAppIcon size={18} className="text-gold-deep shrink-0" />
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="text-ink hover:text-gold-deep transition-colors">
                  Message us on WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-gold-deep font-medium w-16 shrink-0">Email</span>
                <a href={`mailto:${EMAIL}`} className="text-ink hover:text-gold-deep transition-colors">{EMAIL}</a>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold-deep font-medium w-16 shrink-0">Office</span>
                <address className="not-italic text-ink">
                  Al Khuwair, Muscat, Sultanate of Oman
                  <br />
                  <a href={MAPS} target="_blank" rel="noopener noreferrer" className="text-gold-deep hover:underline text-sm">
                    View on Google Maps →
                  </a>
                </address>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold-deep font-medium w-16 shrink-0">Hours</span>
                <span className="text-ink">Sunday – Thursday, 9:00 AM – 6:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Form */}
          <div className="bg-surface border border-line p-8 md:p-10">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}

function PhoneIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 512 512" fill="currentColor" aria-hidden="true">
      <path d="M391 351c-14-14-32-14-46 0-11 11-22 22-32 33-7 7-13 8-21 4-16-9-33-16-48-26-36-27-67-59-94-96-13-18-25-37-33-58-2-4-1-8 2-11 11-11 22-22 32-33 15-15 15-32 0-47-9-9-17-17-26-26-9-9-18-18-27-26-14-14-32-14-46 0-11 11-22 22-33 34-10 11-15 24-16 38-2 22 4 43 11 64 15 43 39 82 68 117 39 48 86 86 141 113 25 12 51 22 79 27 20 4 39 3 57-8 11-6 20-15 28-24 13-15 13-33-1-47-9-9-18-18-27-27z" />
    </svg>
  );
}
