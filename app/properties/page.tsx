import type { Metadata } from "next";
import PageHero from "../components/PageHero";

export const metadata: Metadata = {
  title: "Properties | Rengana Business & Commercial Services",
};

const properties = [
  {
    name: "Prime Commercial Space",
    type: "Commercial",
    status: "FOR RENT",
    price: "OMR 2,500/mo",
    address: "Al Khuwair, Muscat",
    offices: "10 offices",
    baths: 4,
    sqft: "3,200",
  },
  {
    name: "Modern Office Suite",
    type: "Commercial",
    status: "FOR SALE",
    price: "OMR 185,000",
    address: "Madinat Al Sultan Qaboos, Muscat",
    offices: "6 offices",
    baths: 3,
    sqft: "1,800",
  },
  {
    name: "Retail Showroom Unit",
    type: "Retail",
    status: "FOR RENT",
    price: "OMR 1,800/mo",
    address: "Al Qurum, Muscat",
    offices: "Open plan",
    baths: 2,
    sqft: "900",
  },
  {
    name: "Business Hub Co-working",
    type: "Shared",
    status: "FOR RENT",
    price: "OMR 350/mo",
    address: "Ruwi, Muscat",
    offices: "Desk / private",
    baths: 2,
    sqft: "500",
  },
  {
    name: "Warehouse & Storage",
    type: "Industrial",
    status: "FOR RENT",
    price: "OMR 3,200/mo",
    address: "Rusayl Industrial Estate",
    offices: "Office block",
    baths: 2,
    sqft: "8,500",
  },
  {
    name: "Grade-A Tower Office",
    type: "Commercial",
    status: "FOR SALE",
    price: "OMR 290,000",
    address: "Al Mouj, Muscat",
    offices: "12 offices",
    baths: 4,
    sqft: "2,400",
  },
];

const statusColor: Record<string, string> = {
  "FOR RENT": "#673da6",
  "FOR SALE": "#46237a",
};

export default function PropertiesPage() {
  return (
    <main>
      <PageHero title="Properties" />

      <section className="py-24 px-8 bg-[#f6f6f6]">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-[#673da6] uppercase tracking-widest mb-2">
              Commercial Listings
            </p>
            <h2 className="text-5xl text-[#46237a] mb-4">Available Properties</h2>
            <hr className="border-[#46237a] border-2 w-24 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {properties.map((p) => (
              <div key={p.name} className="bg-white shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                {/* Placeholder image area */}
                <div
                  className="h-48 flex items-center justify-center text-white text-sm font-semibold uppercase tracking-widest"
                  style={{ backgroundColor: "#46237a" }}
                >
                  {p.type}
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg text-[#46237a] leading-snug pr-2">{p.name}</h3>
                    <span
                      className="text-xs font-semibold px-2 py-1 text-white whitespace-nowrap shrink-0"
                      style={{ backgroundColor: statusColor[p.status] ?? "#46237a" }}
                    >
                      {p.status}
                    </span>
                  </div>
                  <p className="text-2xl font-semibold text-[#46237a] mb-3">{p.price}</p>
                  <p className="text-sm text-[#414042]/70 mb-4">{p.address}</p>
                  <div className="flex gap-4 text-xs text-[#414042]/60 border-t border-gray-100 pt-4">
                    <span>{p.offices}</span>
                    <span>{p.baths} Bath</span>
                    <span>{p.sqft} sqft</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
