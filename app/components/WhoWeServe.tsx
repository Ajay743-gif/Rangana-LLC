const segments = [
  { title: "Startups", desc: "Getting off the ground — funding, planning, and setup done right." },
  { title: "MSMEs & SMEs", desc: "Our core focus: finance, restructuring, and practical growth support." },
  { title: "Established enterprises", desc: "Working capital, expansion funding, and performance improvement." },
  { title: "Corporates", desc: "Structured finance, advisory, and project execution at scale." },
];

export default function WhoWeServe() {
  return (
    <section id="who-we-serve" className="bg-paper py-24">
      <div className="wrap">
        <p className="eyebrow mb-4">Who we serve</p>
        <h2 className="text-4xl md:text-5xl mb-4 max-w-2xl">
          From first venture to full enterprise
        </h2>
        <div className="rule-gold mb-14" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {segments.map((s) => (
            <div key={s.title} className="border-l-2 border-gold pl-5 py-1">
              <h3 className="text-xl text-navy mb-2" style={{ fontWeight: 600 }}>
                {s.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
