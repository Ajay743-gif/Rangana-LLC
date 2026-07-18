"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Logo from "./Logo";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/#track-record", label: "Track Record" },
  { href: "/about-us", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

const PHONE = "+96899880403";
const PHONE_DISPLAY = "+968 9988 0403";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const wasOpen = useRef(false);

  // Lock body scroll while the drawer is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Focus management + Escape-to-close for the drawer
  useEffect(() => {
    if (menuOpen) {
      closeRef.current?.focus();
      wasOpen.current = true;
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") setMenuOpen(false);
      };
      document.addEventListener("keydown", onKey);
      return () => document.removeEventListener("keydown", onKey);
    }
    if (wasOpen.current) {
      triggerRef.current?.focus();
      wasOpen.current = false;
    }
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300"
        style={{
          backgroundColor: scrolled ? "rgba(251,250,247,0.72)" : "#101f3a",
          backdropFilter: scrolled ? "blur(14px) saturate(140%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(14px) saturate(140%)" : "none",
          borderBottom: scrolled ? "1px solid rgba(231,227,217,0.8)" : "1px solid transparent",
        }}
      >
        <div className="wrap flex items-center justify-between h-[76px]">
          <Link href="/" aria-label="Rengana Capital home" onClick={close}>
            <Logo variant={scrolled ? "dark" : "light"} mono={scrolled} />
          </Link>

          <nav className="hidden md:flex items-center gap-8" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  scrolled ? "text-navy/85 hover:text-gold-deep" : "text-paper/90 hover:text-gold"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${PHONE}`}
              className={`inline-flex items-center gap-2 border px-4 py-2 text-sm font-medium transition-colors ${
                scrolled
                  ? "border-navy/30 text-navy hover:bg-navy hover:text-paper"
                  : "border-gold/70 text-gold hover:bg-gold hover:text-navy-deep"
              }`}
            >
              <PhoneIcon />
              Call now
            </a>
          </nav>

          <button
            ref={triggerRef}
            className={`md:hidden p-2 transition-colors ${scrolled ? "text-navy" : "text-paper"}`}
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            <MenuIcon />
          </button>
        </div>
      </header>

      {/* Mobile side drawer */}
      <div
        className={`md:hidden fixed inset-0 z-[60] transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
        inert={!menuOpen ? true : undefined}
      >
        {/* dimmed overlay */}
        <div className="absolute inset-0 bg-black/50" onClick={close} />

        {/* glass panel */}
        <aside
          className={`absolute top-0 right-0 h-full w-4/5 max-w-xs flex flex-col transition-transform duration-300 ease-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{
            background: "rgba(16,31,58,0.72)",
            backdropFilter: "blur(16px) saturate(130%)",
            WebkitBackdropFilter: "blur(16px) saturate(130%)",
            borderLeft: "1px solid rgba(198,161,91,0.25)",
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
        >
          <div className="flex items-center justify-between h-[76px] px-6 border-b border-white/10">
            <Logo variant="light" showWordmark={false} />
            <button ref={closeRef} className="text-paper p-2" onClick={close} aria-label="Close menu">
              <CloseIcon />
            </button>
          </div>

          <nav className="flex flex-col px-6 py-4" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-paper/90 text-base font-medium py-4 border-b border-white/10 hover:text-gold transition-colors"
                onClick={close}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto p-6">
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center justify-center gap-2 bg-gold text-navy-deep px-4 py-3.5 text-sm font-semibold w-full"
              onClick={close}
            >
              <PhoneIcon />
              Call {PHONE_DISPLAY}
            </a>
          </div>
        </aside>
      </div>
    </>
  );
}

function PhoneIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 512 512" fill="currentColor" aria-hidden="true">
      <path d="M391 351c-14-14-32-14-46 0-11 11-22 22-32 33-7 7-13 8-21 4-16-9-33-16-48-26-36-27-67-59-94-96-13-18-25-37-33-58-2-4-1-8 2-11 11-11 22-22 32-33 15-15 15-32 0-47-9-9-17-17-26-26-9-9-18-18-27-26-14-14-32-14-46 0-11 11-22 22-33 34-10 11-15 24-16 38-2 22 4 43 11 64 15 43 39 82 68 117 39 48 86 86 141 113 25 12 51 22 79 27 20 4 39 3 57-8 11-6 20-15 28-24 13-15 13-33-1-47-9-9-18-18-27-27z" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M3 13h18c.552 0 1-.448 1-1s-.448-1-1-1H3c-.552 0-1 .448-1 1s.448 1 1 1zM3 7h18c.552 0 1-.448 1-1s-.448-1-1-1H3c-.552 0-1 .448-1 1s.448 1 1 1zM3 19h18c.552 0 1-.448 1-1s-.448-1-1-1H3c-.552 0-1 .448-1 1s.448 1 1 1z" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.3 5.71a1 1 0 00-1.41 0L12 10.59 7.11 5.7A1 1 0 105.7 7.11L10.59 12 5.7 16.89a1 1 0 101.41 1.41L12 13.41l4.89 4.89a1 1 0 001.41-1.41L13.41 12l4.89-4.89a1 1 0 000-1.4z" />
    </svg>
  );
}
