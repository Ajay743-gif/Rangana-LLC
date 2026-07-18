import SlotNumber from "./SlotNumber";

type Stat = { num?: number; suffix?: string; text?: string; label: string };

const stats: Stat[] = [
  { num: 20, suffix: "+", label: "Years of advisory experience" },
  { num: 500, suffix: "+", label: "Clients served across Oman" },
  { text: "Banks & NBFCs", label: "Lending partners we work with" },
  { text: "MSME → Corporate", label: "Businesses we support" },
];

export default function ProofBar() {
  return (
    <section className="bg-navy-deep">
      <div className="wrap py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center lg:text-left">
              <div
                className="text-3xl md:text-4xl mb-1"
                style={{ fontFamily: "var(--font-cormorant), serif", color: "#C6A15B", fontWeight: 600 }}
              >
                {s.num !== undefined ? <SlotNumber value={s.num} suffix={s.suffix} /> : s.text}
              </div>
              <div className="text-xs md:text-sm text-paper/70 leading-snug">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
