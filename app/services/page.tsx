import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../components/PageHero";
import { SERVICES } from "../data/services";

const PHONE = "+96899880403";
const PHONE_DISPLAY = "+968 9988 0403";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Rengana Capital's services in Oman: finance facilitation, financial and business advisory, enterprise growth, and trading — arranged through banks and NBFCs.",
  alternates: { canonical: "/services" },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://renganallc.com/" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://renganallc.com/services" },
  ],
};

const itemListLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: SERVICES.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: s.title,
    url: `https://renganallc.com/services/${s.slug}`,
  })),
};

export default function ServicesIndexPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }} />
      <PageHero title="Services" />

      <section className="bg-paper py-20">
        <div className="wrap">
          <p className="eyebrow mb-4">What we do</p>
          <h2 className="text-4xl md:text-5xl mb-4 max-w-2xl">Finance and advisory, under one trusted roof</h2>
          <div className="rule-gold mb-4" />
          <p className="text-muted leading-relaxed max-w-2xl">
            From arranging the finance your business needs to strengthening how it runs, here&apos;s
            how Rengana Capital helps companies across Oman grow.
          </p>
        </div>

        <div className="wrap mt-16 flex flex-col gap-16 md:gap-20">
          {SERVICES.map((service, i) => (
            <div
              key={service.slug}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Image (clickable → detail page) */}
              <Link
                href={`/services/${service.slug}`}
                aria-label={`${service.title} — learn more`}
                className="group block w-full aspect-[3/2] bg-navy-deep overflow-hidden"
              >
                <div
                  className="w-full h-full transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${service.image})`, backgroundSize: "cover", backgroundPosition: "center" }}
                  role="img"
                  aria-label={`${service.title} — Rengana Capital`}
                />
              </Link>

              {/* Content */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-3xl text-navy" style={{ fontWeight: 600 }}>{service.title}</h3>
                  {service.featured && (
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-gold-deep bg-gold/10 px-2 py-1">
                      Our core
                    </span>
                  )}
                </div>
                <p className="text-muted leading-relaxed mb-6">{service.tagline}</p>
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
                  className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-gold-deep transition-colors group"
                >
                  Learn more
                  <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-deep py-16">
        <div className="wrap flex flex-col sm:flex-row items-center justify-between gap-6">
          <h2 className="text-3xl md:text-4xl" style={{ color: "#FBFAF7" }}>
            Not sure where to start?
          </h2>
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center justify-center gap-2 bg-gold text-navy-deep px-8 py-4 text-sm font-semibold hover:bg-gold-light transition-colors shrink-0"
          >
            Call now · {PHONE_DISPLAY}
          </a>
        </div>
      </section>
    </main>
  );
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0" aria-hidden="true">
      <path d="M20 6L9 17l-5-5" stroke="#C6A15B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
