import Image from "next/image";

const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    className="w-5 h-5 fill-[#673da6] shrink-0"
    aria-hidden="true"
  >
    <path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM406.6 278.6l-103.1 103.1c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25L306.8 288H128C110.3 288 96 273.7 96 256s14.31-32 32-32h178.8l-49.38-49.38c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l103.1 103.1C414.6 241.3 416 251.1 416 256C416 260.9 414.6 270.7 406.6 278.6z" />
  </svg>
);

const services = [
  {
    title: "Management Services",
    image: "https://deeppink-lark-756633.hostingersite.com/wp-content/uploads/2026/02/advisory-1.png",
    imageAlt: "Management Services",
    items: [
      "Investment Planning",
      "Business development",
      "Company restructurement",
      "Budgeting",
      "Finance brokerage",
      "Heavy vehicles / equipment brokerage",
    ],
  },
  {
    title: "Advisory & Consultancy",
    image: "https://deeppink-lark-756633.hostingersite.com/wp-content/uploads/2026/02/Top-Benefits-of-Hiring-a-Business-Consulting-Company-for-SMEs-and-MSMEs-in-India-scaled-1.jpg",
    imageAlt: "Advisory and Consultancy",
    items: ["Legal Advisory", "Valuation Advisory", "Business Advisory"],
  },
  {
    title: "Brokerage",
    image: null,
    imageAlt: "",
    items: [
      "Trading Brokerage",
      "Business Brokerage",
      "Real Estate Brokerage",
      "Investment brokerage",
      "Finance brokerage",
      "Heavy vehicles / equipment brokerage",
    ],
  },
  {
    title: "Trading",
    image: "https://deeppink-lark-756633.hostingersite.com/wp-content/uploads/2026/02/1591882651611.jpg",
    imageAlt: "Trading",
    items: [
      "General Trading",
      "Import and Trading",
      "Commodity Trading (Food)",
      "Investment brokerage",
      "Finance brokerage",
      "Heavy vehicles / equipment brokerage",
    ],
  },
];

export default function Services() {
  return (
    <section className="bg-[#f6f6f6] py-20 px-8">
      <div className="max-w-[1240px] mx-auto">
        <h2 className="text-5xl md:text-6xl text-[#46237a] mb-4">Management Services</h2>
        <hr className="border-[#46237a] border-2 w-24 mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.title} className="bg-white p-6 shadow-sm">
              {service.image && (
                <div className="relative w-full aspect-[4/3] mb-5 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
              )}
              <h3 className="text-lg text-[#46237a] mb-4">{service.title}</h3>
              <ul className="flex flex-col gap-3">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#414042]">
                    <ArrowIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
