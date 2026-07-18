"use client";

import { useState } from "react";
import Link from "next/link";

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
    a: "Startups, MSMEs and SMEs, established enterprises, and corporates across Oman. MSMEs and SMEs are our core focus, but we support businesses at every stage.",
  },
  {
    q: "What types of finance can you help arrange?",
    a: "Equipment finance, trade finance, vehicle finance, and project or working-capital finance — sized from around OMR 250,000 up to larger corporate facilities, depending on the business and the lender.",
  },
  {
    q: "Which areas of Oman do you cover?",
    a: "We are based in Al Khuwair, Muscat, and work with clients across the Sultanate of Oman.",
  },
  {
    q: "How do I get started?",
    a: "The quickest way is to call us for a short, no-obligation conversation about your needs. We'll tell you honestly whether and how we can help.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-paper py-24">
      <div className="wrap max-w-3xl">
        <p className="eyebrow mb-4">Questions, answered</p>
        <h2 className="text-4xl md:text-5xl mb-4">Frequently asked</h2>
        <div className="rule-gold mb-12" />

        <div className="divide-y divide-line border-t border-b border-line">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  className="w-full flex items-center justify-between gap-4 text-left py-5"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="text-lg text-navy" style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 600 }}>
                    {item.q}
                  </span>
                  <span
                    className="shrink-0 text-gold text-2xl leading-none transition-transform"
                    style={{ transform: isOpen ? "rotate(45deg)" : "none" }}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <p className="text-muted leading-relaxed pb-6 -mt-1 max-w-2xl">{item.a}</p>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10">
          <Link href="/faq" className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-gold-deep transition-colors group">
            See all FAQs
            <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
