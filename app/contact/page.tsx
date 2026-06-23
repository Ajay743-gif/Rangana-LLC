import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import ContactForm from "../components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Rengana Business & Commercial Services",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero title="Contact" />

      <section className="py-24 px-8 bg-[#f6f6f6]">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <div className="bg-white p-10 shadow-sm">
            <h2 className="text-4xl text-[#46237a] mb-2">Send Us a Message</h2>
            <hr className="border-[#46237a] border-2 w-24 mb-8" />
            <ContactForm />
          </div>

          {/* Info */}
          <div>
            <h2 className="text-4xl text-[#46237a] mb-2">Contact Info</h2>
            <hr className="border-[#46237a] border-2 w-24 mb-8" />

            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#46237a] flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="w-4 h-4 fill-white" aria-hidden="true">
                    <path d="M304 0h-224c-35.35 0-64 28.65-64 64v384c0 35.35 28.65 64 64 64h224c35.35 0 64-28.65 64-64V64C368 28.65 339.3 0 304 0zM192 480c-17.75 0-32-14.25-32-32s14.25-32 32-32 32 14.25 32 32S209.8 480 192 480zM304 64v320h-224V64H304z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-[#414042] mb-1">Phone</p>
                  <a href="tel:+96899880403" className="text-[#46237a] hover:underline block">+968 9988 0403</a>
                  <a href="tel:+96892437464" className="text-[#46237a] hover:underline block">+968 9243 7464</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#46237a] flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="w-4 h-4 fill-white" aria-hidden="true">
                    <path d="M192 0C85.97 0 0 86 0 192c0 77.41 26.97 99.03 172.3 309.7 9.531 13.75 29.93 13.75 39.46 0C357 291 384 269.4 384 192 384 86 298 0 192 0zM192 271.1c-44.13 0-80-35.88-80-80S147.9 112 192 112s80 35.88 80 80-35.9 79.1-80 79.1z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-[#414042] mb-1">Address</p>
                  <address className="not-italic text-[#414042]/80">
                    Al Khuwair<br />Muscat<br />Sultanate of Oman
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
