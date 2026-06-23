import type { Metadata } from "next";
import PageHero from "../components/PageHero";

export const metadata: Metadata = {
  title: "FAQ | Rengana Business & Commercial Services",
};

const faqs = [
  {
    q: "What types of businesses do you work with?",
    a: "We primarily work with Micro, Small, and Medium Enterprises (MSMEs) across the Sultanate of Oman and the Gulf region. Our services are also available to larger corporations, family offices, and Ultra High Net Worth Individuals (UHNWI) seeking strategic financial advisory.",
  },
  {
    q: "What is the difference between Advisory and Brokerage services?",
    a: "Advisory services focus on strategic guidance — investment planning, business development, valuation, and legal advisory. Brokerage services involve facilitation of transactions, including trading brokerage, business brokerage, real estate brokerage, and finance brokerage where we act as an intermediary to secure the best deal for you.",
  },
  {
    q: "How do I get started with Rengana?",
    a: "Simply reach out via our contact page or call us directly. We begin with an initial consultation to understand your business goals, current financial position, and specific needs — then we propose a tailored engagement model.",
  },
  {
    q: "Do you offer services outside of Oman?",
    a: "While we are headquartered in Muscat, Sultanate of Oman, our network extends across the GCC and internationally. We have experience working with cross-border transactions, international investment advisory, and global trade brokerage.",
  },
  {
    q: "What industries do you specialise in?",
    a: "We have deep experience across financial services, general trading, import/export, commodity trading (particularly food), real estate, heavy vehicles & equipment, and MSME business advisory. Our exposure spans NBFCs, conventional banks, and crowdfunding institutions.",
  },
  {
    q: "How long does a typical engagement last?",
    a: "Engagement duration varies by service. Advisory mandates can range from a single project (4–8 weeks) to ongoing retainer arrangements. Brokerage engagements are typically transaction-based. We tailor our commitment to match your timeline and objectives.",
  },
  {
    q: "Is our business information kept confidential?",
    a: "Absolutely. Confidentiality is a cornerstone of our practice. All client information, financial data, and strategic plans are handled with strict discretion. We are happy to execute NDAs at the outset of any engagement.",
  },
  {
    q: "What are your fees?",
    a: "Our fee structure depends on the nature and complexity of the engagement — advisory retainers, success fees, or a combination. We provide full transparency on fees during our initial consultation so there are no surprises.",
  },
  {
    q: "Can you help with company restructuring?",
    a: "Yes. Company restructuring is one of our core management services. Whether you are dealing with financial distress, ownership changes, expansion, or a strategic pivot, our team brings hands-on restructuring expertise to help you navigate the transition smoothly.",
  },
  {
    q: "How can I contact you for urgent matters?",
    a: "You can reach us directly by phone at +968 9988 0403 or +968 9243 7464. For non-urgent enquiries, use the contact form on our website and we will respond within one business day.",
  },
];

export default function FAQPage() {
  return (
    <main>
      <PageHero title="FAQ" />

      <section className="py-24 px-8 bg-white">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-[#673da6] uppercase tracking-widest mb-2">
              Got Questions?
            </p>
            <h2 className="text-5xl text-[#46237a] mb-4">Frequently Asked Questions</h2>
            <hr className="border-[#46237a] border-2 w-24 mx-auto" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-10">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-l-4 border-[#46237a] pl-6">
                <h3 className="text-lg text-[#46237a] mb-3">{faq.q}</h3>
                <p className="text-[#414042] leading-relaxed text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section
        className="relative py-24 px-8 text-center"
        style={{
          backgroundImage:
            "url(https://deeppink-lark-756633.hostingersite.com/wp-content/uploads/2026/02/odoo-consulting-services-in-mumbai-oodu-implementers.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(70,35,122,0.85)" }} aria-hidden="true" />
        <div className="relative z-10">
          <h2
            className="text-4xl md:text-5xl mb-6"
            style={{ color: "#fff", fontFamily: "var(--font-yanone), sans-serif", textTransform: "uppercase" }}
          >
            Still Have Questions?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Our team is ready to help. Reach out and we&apos;ll get back to you promptly.
          </p>
          <a
            href="/contact"
            className="inline-block px-10 py-4 bg-white text-[#46237a] font-semibold text-sm hover:bg-[#f6f6f6] transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}
