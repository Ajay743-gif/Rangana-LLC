export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 px-8"
      style={{ background: "linear-gradient(135deg, #46237a 0%, #673da6 100%)" }}
    >
      <div className="max-w-[1240px] mx-auto text-center text-white">
        <div className="flex items-center justify-center gap-3 mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-5 h-5 fill-white"
            aria-hidden="true"
          >
            <path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM406.6 278.6l-103.1 103.1c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25L306.8 288H128C110.3 288 96 273.7 96 256s14.31-32 32-32h178.8l-49.38-49.38c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l103.1 103.1C414.6 241.3 416 251.1 416 256C416 260.9 414.6 270.7 406.6 278.6z" />
          </svg>
          <a href="tel:+96892437464" className="text-lg font-medium hover:underline">
            +968 9243 7464
          </a>
        </div>

        <h2
          className="text-5xl md:text-6xl text-white mb-4"
          style={{ fontFamily: "var(--font-yanone), sans-serif", textTransform: "uppercase" }}
        >
          Let&apos;s Discuss
        </h2>
        <hr className="border-white/40 border w-24 mx-auto mb-6" />

        <address className="not-italic text-white/80 text-base mb-8">
          Al Khuwair
          <br />
          Muscat
          <br />
          Sultanate Of Oman
        </address>

        <a
          href="#"
          className="inline-block px-10 py-4 bg-white text-[#46237a] font-semibold text-sm hover:bg-[#f6f6f6] transition-colors"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
}
