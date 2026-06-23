import ContactForm from "./ContactForm";

export default function Hero() {
  return (
    <section className="relative flex items-center overflow-hidden" style={{ minHeight: "80vh" }}>
      {/* Blurred background image — isolated so blur doesn't affect content */}
      <div
        className="absolute inset-0 scale-110"
        style={{
          backgroundImage:
            "url(https://deeppink-lark-756633.hostingersite.com/wp-content/uploads/2026/02/odoo-consulting-services-in-mumbai-oodu-implementers.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          filter: "blur(6px)",
        }}
        aria-hidden="true"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.65)" }} />

      <div className="relative z-10 w-full max-w-[1240px] mx-auto px-8 pt-[150px] pb-[50px]">
        <div className="flex flex-col lg:flex-row gap-10 items-stretch">
          {/* Left 66%: tagline */}
          <div className="text-white flex flex-col justify-center lg:w-2/3">
            <a
              href="tel:+96899880403"
              className="inline-flex items-center gap-2 border border-white/50 px-5 py-3 text-white text-sm hover:bg-white/10 transition-colors mb-10 self-start"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="w-4 h-4 fill-white"
                aria-hidden="true"
              >
                <path d="M304 0h-224c-35.35 0-64 28.65-64 64v384c0 35.35 28.65 64 64 64h224c35.35 0 64-28.65 64-64V64C368 28.65 339.3 0 304 0zM192 480c-17.75 0-32-14.25-32-32s14.25-32 32-32s32 14.25 32 32S209.8 480 192 480zM304 64v320h-224V64H304z" />
              </svg>
              +968 9988 0403
            </a>

            <h1
              className="text-6xl md:text-8xl leading-tight mb-8"
              style={{ fontFamily: "var(--font-yanone), sans-serif", textTransform: "uppercase", color: "#fff" }}
            >
              our expertise.
              <br />
              your prosperity.
            </h1>

            <a
              href="#contact"
              className="inline-block self-start px-10 py-4 bg-[#673da6] text-white font-semibold text-sm hover:bg-[#46237a] transition-colors"
            >
              Contact Us
            </a>
          </div>

          {/* Right 33%: contact form */}
          <div className="lg:w-1/3 bg-[#f6f6f6] p-8" style={{ paddingTop: "50px", paddingBottom: "50px" }}>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
