import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="py-20 px-8 bg-white">
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-sm font-semibold text-[#673da6] uppercase tracking-widest mb-2">
            Who We Are
          </p>
          <h2 className="text-5xl md:text-6xl text-[#46237a] mb-4">About Us</h2>
          <hr className="border-[#46237a] border-2 w-24 mb-8" />
          <p className="text-base text-[#414042] leading-relaxed">
            Led by <strong>R. Renganathan</strong>, a seasoned financial professional with over{" "}
            <strong>two decades of business and financial advisory experience</strong>, our firm
            specializes in delivering strategic, results-oriented financial solutions to{" "}
            <strong>Micro, Small, and Medium Enterprises (MSMEs)</strong>. With a strong academic
            foundation and extensive hands-on exposure across{" "}
            <strong>
              NBFCs, leading conventional banks, crowdfunding institutions, and Ultra High Net Worth
              Individuals (UHNWI)
            </strong>
            , we bring deep industry insight and practical execution to every engagement.
          </p>
        </div>
        <div className="relative aspect-[3/2] w-full overflow-hidden rounded shadow-md">
          <Image
            src="https://deeppink-lark-756633.hostingersite.com/wp-content/uploads/2026/02/1-2-3.jpg"
            alt="About Rengana"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
