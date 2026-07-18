export default function PageHero({ title }: { title: string }) {
  return (
    <section
      className="relative flex items-center justify-center bg-navy-deep"
      style={{
        minHeight: "38vh",
        background:
          "radial-gradient(120% 100% at 80% 10%, #1a3060 0%, rgba(18,36,68,0.2) 45%, transparent 75%), linear-gradient(150deg,#0a1730 0%,#0e1e3c 60%,#132a4e 100%)",
      }}
    >
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage: "radial-gradient(rgba(143,176,224,0.14) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          maskImage: "linear-gradient(180deg, rgba(0,0,0,0.8), transparent)",
        }}
      />
      <div className="relative z-10 text-center px-8 pt-[120px] pb-[56px]">
        <h1 className="text-5xl md:text-6xl" style={{ color: "#FBFAF7", fontWeight: 600 }}>
          {title}
        </h1>
        <div className="mx-auto mt-5 rule-gold" />
      </div>
    </section>
  );
}
