import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "../components/PageHero";

const PHONE = "+96899880403";
const PHONE_DISPLAY = "+968 9988 0403";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Rengana Capital is led by R. Renganathan, a finance and business advisor with over two decades of experience across banks, NBFCs and enterprises in Oman.",
  alternates: { canonical: "/about-us" },
};

const values = ["Integrity", "Professionalism", "Confidentiality", "Client success", "Transparency"];

const whyUs = [
  { h: "Industry-focused expertise", p: "Two decades across banks, NBFCs, crowdfunding and enterprise, applied to your situation." },
  { h: "Implementation-driven", p: "Practical advice built to be acted on — not reports that sit on a shelf." },
  { h: "Built for the long term", p: "We measure success by the prosperity we help our clients sustain, not one-off transactions." },
  { h: "Aligned with Vision Oman", p: "Support tailored to Oman's evolving business ecosystem and national priorities." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  mainEntity: {
    "@type": "Person",
    name: "R. Renganathan",
    jobTitle: "Founder & Principal Advisor, Rengana Capital",
    worksFor: { "@type": "FinancialService", name: "Rengana Capital" },
    description:
      "Finance and business advisor with over two decades of experience across NBFCs, banks, crowdfunding institutions and UHNWI clients in Oman.",
  },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://renganallc.com/" },
    { "@type": "ListItem", position: 2, name: "About", item: "https://renganallc.com/about-us" },
  ],
};

export default function AboutUsPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <PageHero title="About" />

      {/* Founder */}
      <section className="bg-surface py-24">
        <div className="wrap grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-navy-deep">
                <Image
                  src="/founder-portrait.jpg"
                  alt="R. Renganathan, Founder of Rengana Capital, at the Rengana Capital office"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-gold hidden sm:block" aria-hidden="true" />
            </div>
          </div>

          <div className="lg:col-span-7">
            <p className="eyebrow mb-4">Who we are</p>
            <h2 className="text-4xl md:text-5xl mb-4">Led by R. Renganathan</h2>
            <div className="rule-gold mb-8" />
            <p className="text-lg text-ink leading-relaxed mb-5">
              Rengana Capital is a personal practice built on more than two decades of hands-on
              business and financial advisory experience.
            </p>
            <p className="text-muted leading-relaxed mb-5">
              Our founder, R. Renganathan, has worked across NBFCs, leading conventional banks,
              crowdfunding institutions, and with Ultra High Net Worth Individuals (UHNWI) — giving
              him a rare, 360-degree view of how finance actually gets done in Oman.
            </p>
            <p className="text-muted leading-relaxed mb-8">
              When you work with Rengana, you work directly with a seasoned professional who has sat
              on both sides of the table — the lender&apos;s and the business owner&apos;s — and knows
              how to bring them together.
            </p>
            <div className="flex flex-wrap gap-2.5">
              {values.map((v) => (
                <span key={v} className="text-xs font-medium text-navy border border-line px-3 py-1.5 bg-paper">
                  {v}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-paper py-20">
        <div className="wrap grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-surface border border-line p-8">
            <p className="eyebrow mb-3">Our vision</p>
            <p className="text-lg text-ink leading-relaxed">
              To become a trusted partner for businesses by providing reliable and efficient
              commercial and financial support services across Oman.
            </p>
          </div>
          <div className="bg-surface border border-line p-8">
            <p className="eyebrow mb-3">Our mission</p>
            <p className="text-lg text-ink leading-relaxed">
              To deliver high-quality advisory that helps businesses grow, secure the funding they
              need, and operate efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-surface py-24">
        <div className="wrap">
          <p className="eyebrow mb-4">Why Rengana</p>
          <h2 className="text-4xl md:text-5xl mb-4 max-w-2xl">What you get working with us</h2>
          <div className="rule-gold mb-14" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {whyUs.map((w) => (
              <div key={w.h} className="border-l-2 border-gold pl-5">
                <h3 className="text-xl text-navy mb-2" style={{ fontWeight: 600 }}>{w.h}</h3>
                <p className="text-muted leading-relaxed">{w.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-deep py-16">
        <div className="wrap flex flex-col sm:flex-row items-center justify-between gap-6">
          <h2 className="text-3xl md:text-4xl" style={{ color: "#FBFAF7" }}>
            Let&apos;s talk about your business.
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
