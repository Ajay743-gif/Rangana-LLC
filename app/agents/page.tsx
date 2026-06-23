import type { Metadata } from "next";
import PageHero from "../components/PageHero";

export const metadata: Metadata = {
  title: "Our Team | Rengana Business & Commercial Services",
};

const team = [
  { name: "R. Renganathan", role: "Founder & Managing Director", initials: "RR" },
  { name: "Danielle Pena", role: "Senior Advisory Manager", initials: "DP" },
  { name: "Mark Obrien", role: "Market Strategist", initials: "MO" },
  { name: "Russell Douglas", role: "Sales Manager", initials: "RD" },
  { name: "Eugene Berry", role: "Business Consultant", initials: "EB" },
  { name: "Debra Gilbert", role: "Financial Advisor", initials: "DG" },
  { name: "Edward Alvarez", role: "Brokerage Specialist", initials: "EA" },
  { name: "Billy Allen", role: "Trading Consultant", initials: "BA" },
];

export default function AgentsPage() {
  return (
    <main>
      <PageHero title="Our Team" />

      <section className="py-24 px-8 bg-[#f6f6f6]">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-[#673da6] uppercase tracking-widest mb-2">
              The People Behind Our Success
            </p>
            <h2 className="text-5xl text-[#46237a] mb-4">Top Notch Office Staff And Agents</h2>
            <hr className="border-[#46237a] border-2 w-24 mx-auto mb-6" />
            <p className="text-[#414042] max-w-2xl mx-auto">
              Our team brings together decades of combined expertise across financial advisory, brokerage,
              trading, and business consultancy — all dedicated to your prosperity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="bg-white shadow-sm text-center p-8 hover:shadow-md transition-shadow">
                <div
                  className="w-20 h-20 rounded-full mx-auto mb-5 flex items-center justify-center text-white text-2xl font-bold"
                  style={{ backgroundColor: "#46237a", fontFamily: "var(--font-yanone), sans-serif" }}
                >
                  {member.initials}
                </div>
                <h3 className="text-lg text-[#46237a] mb-1">{member.name}</h3>
                <p className="text-sm text-[#414042]/70 mb-5">{member.role}</p>
                <a
                  href="#contact"
                  className="inline-block px-6 py-2 border border-[#46237a] text-[#46237a] text-sm font-medium hover:bg-[#46237a] hover:text-white transition-colors"
                >
                  Get In Touch
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
