"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Rengana Business & Commercial Services" },
  { href: "/about-us", label: "About Us" },
  { href: "/properties", label: "Properties" },
  { href: "/agents", label: "Agents" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-[1240px] mx-auto px-8 flex items-center justify-end h-[70px]">
        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white text-sm font-medium hover:text-[#f6f6f6] transition-colors whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M5.293 6.707l5.293 5.293-5.293 5.293c-.391.391-.391 1.024 0 1.414s1.024.391 1.414 0l5.293-5.293 5.293 5.293c.391.391 1.024.391 1.414 0s.391-1.024 0-1.414l-5.293-5.293 5.293-5.293c.391-.391.391-1.024 0-1.414s-1.024-.391-1.414 0l-5.293 5.293-5.293-5.293c-.391-.391-1.024-.391-1.414 0s-.391 1.024 0 1.414z" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 13h18c.552 0 1-.448 1-1s-.448-1-1-1H3c-.552 0-1 .448-1 1s.448 1 1 1zM3 7h18c.552 0 1-.448 1-1s-.448-1-1-1H3c-.552 0-1 .448-1 1s.448 1 1 1zM3 19h18c.552 0 1-.448 1-1s-.448-1-1-1H3c-.552 0-1 .448-1 1s.448 1 1 1z" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav
          className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[#46237a] font-medium border-b border-gray-100 pb-3 last:border-0"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
