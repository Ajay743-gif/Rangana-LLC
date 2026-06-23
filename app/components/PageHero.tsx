export default function PageHero({ title }: { title: string }) {
  return (
    <section
      className="relative flex items-center justify-center"
      style={{
        minHeight: "40vh",
        backgroundImage:
          "url(https://deeppink-lark-756633.hostingersite.com/wp-content/uploads/2026/02/odoo-consulting-services-in-mumbai-oodu-implementers.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.65)" }} aria-hidden="true" />
      <div className="relative z-10 text-center px-8 pt-[100px] pb-[60px]">
        <h1
          className="text-6xl md:text-7xl"
          style={{ color: "#fff", fontFamily: "var(--font-yanone), sans-serif", textTransform: "uppercase" }}
        >
          {title}
        </h1>
      </div>
    </section>
  );
}
