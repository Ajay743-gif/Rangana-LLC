import Image from "next/image";

const offerings = [
  {
    title: "Strategic Planning",
    image:
      "https://deeppink-lark-756633.hostingersite.com/wp-content/uploads/2026/02/business-consultancy-services-1024x572.jpg",
    href: "#",
  },
  {
    title: "Budgeting",
    image:
      "https://deeppink-lark-756633.hostingersite.com/wp-content/uploads/2026/02/BUDGETING-1.jpg",
    href: "#",
  },
  {
    title: "Cost Control",
    image:
      "https://deeppink-lark-756633.hostingersite.com/wp-content/uploads/2022/10/img-08-free-img.jpg",
    href: null,
  },
  {
    title: "Profit Optimization",
    image:
      "https://deeppink-lark-756633.hostingersite.com/wp-content/uploads/2026/03/horizontal-financial-analysis-1024x685.png",
    href: "#",
  },
  {
    title: "Consultancy Services",
    image:
      "https://deeppink-lark-756633.hostingersite.com/wp-content/uploads/2026/03/analysis_364470-1024x475.webp",
    href: "#",
  },
  {
    title: "Financial Analysis",
    image:
      "https://deeppink-lark-756633.hostingersite.com/wp-content/uploads/2026/03/understanding-financial-statement-analysis-how-its-done-1024x747.png",
    href: "#",
  },
];

export default function MoreFromUs() {
  return (
    <section className="py-20 px-8 bg-[#f6f6f6]">
      <div className="max-w-[1240px] mx-auto">
        <h2 className="text-5xl md:text-6xl text-[#46237a] mb-4">More From Us.</h2>
        <hr className="border-[#46237a] border-2 w-24 mb-12" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {offerings.map((item) => (
            <div key={item.title} className="bg-white shadow-sm overflow-hidden group">
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl text-[#46237a] mb-4">{item.title}</h3>
                {item.href && (
                  <a
                    href={item.href}
                    className="inline-block px-8 py-3 bg-[#673da6] text-white text-sm hover:bg-[#46237a] transition-colors"
                  >
                    Click Here
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
