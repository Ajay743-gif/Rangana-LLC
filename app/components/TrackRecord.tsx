const highlights = [
  { value: "500+", label: "Businesses served across Oman" },
  { value: "OMR 250K–500K+", label: "Typical deal sizes arranged" },
  { value: "Equipment · Trade · Vehicle", label: "Finance types facilitated" },
  { value: "Banks & NBFCs", label: "Licensed lending partners" },
];

export default function TrackRecord() {
  return (
    <section id="track-record" className="bg-navy-deep py-24">
      <div className="wrap">
        <p className="eyebrow mb-4" style={{ color: "#D8BC86" }}>
          Proven in Oman
        </p>
        <h2 className="text-4xl md:text-5xl mb-4 max-w-2xl" style={{ color: "#FBFAF7" }}>
          A track record you can bank on
        </h2>
        <div className="rule-gold mb-8" />
        <p className="text-paper/80 leading-relaxed max-w-2xl mb-14">
          More than 500 businesses across Oman have worked with us to arrange financing and
          strengthen their operations — from first-time MSMEs to established corporates. We keep
          every client engagement strictly confidential.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {highlights.map((h) => (
            <div key={h.label} className="bg-navy-deep p-6">
              <div
                className="text-2xl md:text-3xl mb-2"
                style={{ fontFamily: "var(--font-cormorant), serif", color: "#C6A15B", fontWeight: 600 }}
              >
                {h.value}
              </div>
              <div className="text-xs md:text-sm text-paper/70 leading-snug">{h.label}</div>
            </div>
          ))}
        </div>

        <p className="text-xs text-paper/50 mt-6">
          Deal sizes shown as indicative ranges. Client names and logos are withheld to protect
          confidentiality.
        </p>
      </div>
    </section>
  );
}
