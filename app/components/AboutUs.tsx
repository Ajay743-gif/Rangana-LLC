import Image from "next/image";
import Link from "next/link";

const values = [
  "Integrity",
  "Professionalism",
  "Confidentiality",
  "Client success",
  "Transparency",
];

export default function AboutUs() {
  return (
    <section id="about" className="bg-surface py-24">
      <div className="wrap grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Portrait — drop the founder headshot at /public/founder-portrait.jpg */}
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
            <div
              className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-gold hidden sm:block"
              aria-hidden="true"
            />
          </div>
        </div>

        <div className="lg:col-span-7">
          <p className="eyebrow mb-4">Who we are</p>
          <h2 className="text-4xl md:text-5xl mb-4">Led by R. Renganathan</h2>
          <div className="rule-gold mb-8" />

          <p className="text-lg text-ink leading-relaxed mb-5">
            Rengana Capital is built on more than two decades of hands-on business and financial
            advisory experience.
          </p>
          <p className="text-muted leading-relaxed mb-8">
            Our founder, R. Renganathan, has worked across NBFCs, leading conventional banks,
            crowdfunding institutions, and with Ultra High Net Worth Individuals — bringing deep
            industry insight and practical, implementation-driven execution to every engagement. His
            mission is simple: help businesses grow, secure the funding they need, and operate
            efficiently.
          </p>

          <div className="flex flex-wrap gap-2.5">
            {values.map((v) => (
              <span
                key={v}
                className="text-xs font-medium text-navy border border-line px-3 py-1.5 bg-paper"
              >
                {v}
              </span>
            ))}
          </div>

          <Link
            href="/about-us"
            className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-gold-deep transition-colors mt-8 group"
          >
            More about the founder
            <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
