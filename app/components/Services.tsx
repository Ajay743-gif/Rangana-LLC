import Link from "next/link";
import { SERVICES } from "../data/services";

export default function Services() {
  return (
    <section id="services" className="bg-paper py-24">
      <div className="wrap">
        <p className="eyebrow mb-4">What we do</p>
        <h2 className="text-4xl md:text-5xl mb-4 max-w-2xl">
          Finance and advisory, under one trusted roof
        </h2>
        <div className="rule-gold mb-14" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.slug}
              className="bg-surface border border-line p-8 flex flex-col"
              style={service.featured ? { borderTop: "3px solid #C6A15B" } : undefined}
            >
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-2xl text-navy" style={{ fontWeight: 600 }}>
                  {service.title}
                </h3>
                {service.featured && (
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-gold-deep bg-gold/10 px-2 py-1">
                    Our core
                  </span>
                )}
              </div>
              <p className="text-sm text-muted leading-relaxed mb-6">{service.tagline}</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mb-7">
                {service.offerings.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-ink">
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={`/services/${service.slug}`}
                className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-gold-deep transition-colors group"
              >
                Learn more
                <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
              </Link>
            </div>
          ))}
        </div>

        <p className="text-sm text-muted mt-8 max-w-2xl">
          Financing is arranged through licensed banks and NBFCs. Approval and terms are subject to
          the lender&apos;s assessment.
        </p>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0" aria-hidden="true">
      <path d="M20 6L9 17l-5-5" stroke="#C6A15B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
