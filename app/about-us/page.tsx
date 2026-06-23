import type { Metadata } from "next";
import PageHero from "../components/PageHero";

export const metadata: Metadata = {
  title: "About Us | Rengana Business & Commercial Services",
};

const stats = [
  { value: "20+", label: "Years of Experience" },
  { value: "500+", label: "Satisfied Clients" },
  { value: "200+", label: "Deals Closed" },
  { value: "50+", label: "Active Partners" },
];

export default function AboutUsPage() {
  return (
    <main>
      <PageHero title="About Us" />

      {/* Who We Are */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="text-sm font-semibold text-[#673da6] uppercase tracking-widest mb-2">
              Global Presence
            </p>
            <h2 className="text-5xl text-[#46237a] mb-6">Who We Are</h2>
            <hr className="border-[#46237a] border-2 w-24 mb-8" />
            <p className="text-[#414042] leading-relaxed mb-4">
              Led by <strong>R. Renganathan</strong>, a seasoned financial professional with over two decades
              of business and financial advisory experience, our firm specializes in delivering strategic,
              results-oriented financial solutions to Micro, Small, and Medium Enterprises (MSMEs).
            </p>
            <p className="text-[#414042] leading-relaxed">
              With a strong academic foundation and extensive hands-on exposure across NBFCs, leading
              conventional banks, crowdfunding institutions, and Ultra High Net Worth Individuals (UHNWI),
              we bring deep industry insight and practical execution to every engagement.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-[#673da6] uppercase tracking-widest mb-2">
              Responsibility
            </p>
            <h2 className="text-5xl text-[#46237a] mb-6">Our Mission</h2>
            <hr className="border-[#46237a] border-2 w-24 mb-8" />
            <p className="text-[#414042] leading-relaxed mb-4">
              We are committed to empowering businesses across the Sultanate of Oman and the wider Gulf
              region with expert guidance, transparent advisory, and hands-on support to unlock growth
              and achieve lasting prosperity.
            </p>
            <p className="text-[#414042] leading-relaxed">
              Our approach is rooted in trust, precision, and a deep understanding of local and
              international market dynamics — ensuring every client receives advice tailored to their
              unique financial goals.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section
        className="relative py-24 px-8"
        style={{
          backgroundImage:
            "url(https://deeppink-lark-756633.hostingersite.com/wp-content/uploads/2026/02/aboutUspic.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.75)" }} aria-hidden="true" />
        <div className="relative z-10 max-w-[1240px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p
                className="text-6xl font-bold mb-2"
                style={{ color: "#fff", fontFamily: "var(--font-yanone), sans-serif" }}
              >
                {s.value}
              </p>
              <p className="text-white/80 text-sm uppercase tracking-wide">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Vision */}
      <section className="py-24 px-8 bg-[#f6f6f6]">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="text-sm font-semibold text-[#673da6] uppercase tracking-widest mb-2">
              Looking Forward
            </p>
            <h2 className="text-5xl text-[#46237a] mb-6">Our Vision</h2>
            <hr className="border-[#46237a] border-2 w-24 mb-8" />
            <p className="text-[#414042] leading-relaxed">
              To be the most trusted business and commercial services partner in the Sultanate of Oman —
              a firm that MSMEs and entrepreneurs turn to first when navigating complex financial landscapes,
              capital markets, and strategic growth decisions.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-[#673da6] uppercase tracking-widest mb-2">
              How We Work
            </p>
            <h2 className="text-5xl text-[#46237a] mb-6">Our Values</h2>
            <hr className="border-[#46237a] border-2 w-24 mb-8" />
            <p className="text-[#414042] leading-relaxed">
              Integrity, expertise, and client-first thinking drive every recommendation we make.
              We believe in long-term partnerships — not transactional engagements — and measure our
              success by the prosperity we help our clients achieve.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
