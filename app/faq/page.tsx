import type { Metadata } from "next";
import PageHero from "../components/PageHero";

const PHONE = "+96899880403";
const PHONE_DISPLAY = "+968 9988 0403";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about Rengana Capital — how we arrange finance through banks and NBFCs, who we work with, deal sizes, fees and confidentiality in Oman.",
  alternates: { canonical: "/faq" },
};

const faqs = [
  {
    q: "What does Rengana Capital do?",
    a: "We help businesses in Oman raise finance and grow. That means arranging equipment, trade, vehicle and project finance through banks and NBFCs, and providing business and financial advisory — from restructuring and project reports to operational improvement.",
  },
  {
    q: "Do you lend money directly?",
    a: "No. We are advisors and facilitators. We connect you to the right licensed lenders (banks and NBFCs), structure the proposal, and guide it through to approval. Final approval and terms are decided by the lender.",
  },
  {
    q: "Who do you work with?",
    a: "Startups, MSMEs and SMEs, established enterprises, and corporates across Oman. MSMEs and SMEs are our core focus, but we support businesses at every stage of growth.",
  },
  {
    q: "What types of finance can you help arrange?",
    a: "Equipment finance, trade finance, vehicle finance, and project or working-capital finance — arranged through licensed banks and NBFCs and structured to your business and cash flow.",
  },
  {
    q: "What deal sizes do you handle?",
    a: "Facilities typically range from around OMR 250,000 up to larger corporate arrangements, depending on the business, the security, and the lender's assessment.",
  },
  {
    q: "Which areas of Oman do you cover?",
    a: "We are based in Al Khuwair, Muscat, and work with clients across the Sultanate of Oman.",
  },
  {
    q: "How do your fees work?",
    a: "Our fee structure depends on the nature and complexity of the engagement. We are fully transparent about fees during the initial consultation, so there are no surprises.",
  },
  {
    q: "Is my business information kept confidential?",
    a: "Yes. Confidentiality is central to how we work. All client information and financial data is handled with strict discretion, and we are happy to sign an NDA at the outset of any engagement.",
  },
  {
    q: "How do I get started?",
    a: "The quickest way is to call us for a short, no-obligation conversation about your needs. We'll tell you honestly whether and how we can help.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://renganallc.com/" },
    { "@type": "ListItem", position: 2, name: "FAQ", item: "https://renganallc.com/faq" },
  ],
};

export default function FAQPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <PageHero title="FAQ" />

      <section className="bg-paper py-24">
        <div className="wrap">
          <p className="eyebrow mb-4">Questions, answered</p>
          <h2 className="text-4xl md:text-5xl mb-4 max-w-2xl">Frequently asked questions</h2>
          <div className="rule-gold mb-14" />

          <div className="max-w-3xl divide-y divide-line border-t border-b border-line">
            {faqs.map((f) => (
              <details key={f.q} className="faq-item">
                <summary className="flex items-center justify-between gap-4 cursor-pointer py-5">
                  <span className="text-lg text-navy" style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 600 }}>
                    {f.q}
                  </span>
                  <span className="faq-plus text-gold text-2xl leading-none shrink-0" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="text-muted leading-relaxed pb-6 -mt-1">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-deep py-16">
        <div className="wrap flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl mb-2" style={{ color: "#FBFAF7" }}>
              Still have questions?
            </h2>
            <p className="text-paper/75">A quick call is the fastest way to get a straight answer.</p>
          </div>
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
