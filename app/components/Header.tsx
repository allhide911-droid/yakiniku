"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { href: "#menu", label: "メニュー" },
  { href: "#kodawari", label: "こだわり" },
  { href: "#access", label: "アクセス" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-engyu-black/95 backdrop-blur-sm shadow-[0_2px_20px_rgba(0,0,0,0.8)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-18 py-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <span className="text-2xl font-bold flame-text tracking-widest group-hover:opacity-80 transition-opacity">
            炎牛
          </span>
          <span className="text-engyu-muted text-xs tracking-[0.3em] hidden sm:block">
            ENGYU
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm tracking-widest text-engyu-cream/80 hover:text-engyu-gold transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-engyu-gold after:transition-all hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#access"
            className="ml-4 border border-engyu-gold text-engyu-gold text-sm tracking-widest px-5 py-2 hover:bg-engyu-gold hover:text-engyu-black transition-all duration-300"
          >
            ご予約
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニューを開く"
        >
          <span
            className={`block w-6 h-[1px] bg-engyu-gold transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2.5" : ""}`}
          />
          <span
            className={`block w-6 h-[1px] bg-engyu-gold transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-[1px] bg-engyu-gold transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-64" : "max-h-0"}`}
      >
        <nav className="bg-engyu-black/98 border-t border-engyu-gold/20 flex flex-col py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="px-6 py-3 text-sm tracking-widest text-engyu-cream/80 hover:text-engyu-gold hover:bg-white/5 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#access"
            onClick={() => setMenuOpen(false)}
            className="mx-6 mt-3 border border-engyu-gold text-engyu-gold text-sm tracking-widest px-5 py-2 text-center hover:bg-engyu-gold hover:text-engyu-black transition-all"
          >
            ご予約
          </a>
        </nav>
      </div>
    </header>
  );
}
