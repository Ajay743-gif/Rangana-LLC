import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SERVICES, getService } from "../../data/services";

const PHONE = "+96899880403";
const PHONE_DISPLAY = "+968 9988 0403";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: `${service.title} in Oman`,
    description: service.tagline,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.title} | Rengana Capital`,
      description: service.tagline,
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = SERVICES.filter((s) => s.slug !== service.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.tagline,
    areaServed: { "@type": "Country", name: "Oman" },
    provider: { "@type": "FinancialService", name: "Rengana Capital", "@id": "https://renganallc.com/#organization" },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://renganallc.com/" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://renganallc.com/services" },
      { "@type": "ListItem", position: 3, name: service.title, item: `https://renganallc.com/services/${service.slug}` },
    ],
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      {/* Header band */}
      <section className="relative pt-[150px] pb-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-navy-deep"
          style={{ backgroundImage: `url(${service.image})`, backgroundSize: "cover", backgroundPosition: "center" }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(90deg, rgba(16,31,58,0.95) 0%, rgba(16,31,58,0.78) 55%, rgba(16,31,58,0.55) 100%)" }}
          aria-hidden="true"
        />
        <div className="relative z-10 wrap">
          <Link href="/services" className="text-sm text-paper/70 hover:text-gold transition-colors">
            ← All services
          </Link>
          <p className="eyebrow mt-6 mb-4" style={{ color: "#D8BC86" }}>
            Our services
          </p>
          <h1 className="text-4xl md:text-5xl mb-5 max-w-3xl" style={{ color: "#FBFAF7" }}>
            {service.title}
          </h1>
          <p className="text-lg text-paper/80 leading-relaxed max-w-2xl">{service.tagline}</p>
        </div>
      </section>

      {/* Intro + offerings */}
      <section className="bg-paper py-20">
        <div className="wrap grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <p className="text-lg text-ink leading-relaxed mb-10">{service.intro}</p>

            <h2 className="text-2xl mb-6">What we help with</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {service.helps.map((help) => (
                <div key={help.h} className="border-l-2 border-gold pl-4">
                  <h3 className="text-lg text-navy mb-1" style={{ fontWeight: 600 }}>
                    {help.h}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">{help.p}</p>
                </div>
              ))}
            </div>

            {service.steps && (
              <div className="mt-12">
                <h2 className="text-2xl mb-6">How we work</h2>
                <ol className="space-y-4">
                  {service.steps.map((step, i) => (
                    <li key={step} className="flex gap-4">
                      <span className="shrink-0 w-8 h-8 rounded-full bg-navy text-paper flex items-center justify-center text-sm font-semibold" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                        {i + 1}
                      </span>
                      <span className="text-ink leading-relaxed pt-1">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </div>

          {/* Sidebar CTA */}
          <aside className="lg:col-span-1">
            <div className="bg-navy-deep p-8 sticky top-24">
              <h3 className="text-xl mb-3" style={{ color: "#FBFAF7" }}>
                Talk it through
              </h3>
              <p className="text-sm text-paper/75 leading-relaxed mb-6">
                A quick call is the fastest way to find out how we can help — no obligation.
              </p>
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center justify-center gap-2 bg-gold text-navy-deep px-6 py-3.5 text-sm font-semibold hover:bg-gold-light transition-colors w-full"
              >
                Call now · {PHONE_DISPLAY}
              </a>
            </div>
          </aside>
        </div>
      </section>

      {/* Other services */}
      <section className="bg-surface py-16 border-t border-line">
        <div className="wrap">
          <h2 className="text-2xl mb-8">Explore other services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {others.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="block border border-line p-6 hover:border-gold transition-colors group"
              >
                <h3 className="text-lg text-navy mb-2" style={{ fontWeight: 600 }}>
                  {s.title}
                </h3>
                <span className="text-sm font-semibold text-gold-deep inline-flex items-center gap-2">
                  Learn more
                  <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
