import Image from "next/image";

export default function AboutUs() {
  return (
    <section
      className="relative"
      style={{
        backgroundImage:
          "url(https://deeppink-lark-756633.hostingersite.com/wp-content/uploads/2026/02/aboutUspic.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        padding: "150px 40px",
      }}
    >
      {/* Purple overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "#46237a", opacity: 0.7 }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1240px] mx-auto flex flex-col lg:flex-row gap-12 items-center">
        {/* Left: text */}
        <div className="lg:w-1/2 text-white">
          <p className="text-sm font-semibold text-white/80 uppercase tracking-widest mb-2">
            Who We Are
          </p>
          <h2
            className="text-5xl md:text-6xl mb-4"
            style={{ color: "#fff", fontFamily: "var(--font-yanone), sans-serif", textTransform: "uppercase" }}
          >
            About Us
          </h2>
          <hr className="border-white/60 border-2 w-24 mb-8" />
          <p className="text-base text-white/90 leading-relaxed">
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

        {/* Right: foreground image */}
        <div className="lg:w-1/2 relative aspect-[3/2] w-full overflow-hidden">
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
