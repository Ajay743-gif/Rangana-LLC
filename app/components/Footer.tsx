import Link from "next/link";
import Logo from "./Logo";

const PHONE_DISPLAY = "+968 9988 0403";
const EMAIL = "info@renganallc.com";

export default function Footer() {
  return (
    <footer className="bg-navy text-paper">
      <div className="wrap py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <Logo variant="light" />
            <p className="text-sm text-paper/70 leading-relaxed mt-5 max-w-xs">
              Business and finance advisory for Oman&apos;s MSMEs and enterprises. Our expertise. Your
              prosperity.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold mb-4">Explore</h4>
            <ul className="space-y-2.5 text-sm text-paper/80">
              <li><Link href="/services" className="hover:text-gold transition-colors">Services</Link></li>
              <li><Link href="/#track-record" className="hover:text-gold transition-colors">Track record</Link></li>
              <li><Link href="/about-us" className="hover:text-gold transition-colors">About</Link></li>
              <li><Link href="/faq" className="hover:text-gold transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold mb-4">Get in touch</h4>
            <ul className="space-y-2.5 text-sm text-paper/80">
              <li><a href="tel:+96899880403" className="hover:text-gold transition-colors">{PHONE_DISPLAY}</a></li>
              <li><a href={`mailto:${EMAIL}`} className="hover:text-gold transition-colors">{EMAIL}</a></li>
              <li>Al Khuwair, Muscat</li>
              <li>Sultanate of Oman</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="wrap py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-paper/60">
          <p>&copy; {new Date().getFullYear()} Rengana Capital. All rights reserved.</p>
          <p>Financing arranged via licensed banks &amp; NBFCs. Terms subject to lender approval.</p>
        </div>
      </div>
    </footer>
  );
}
