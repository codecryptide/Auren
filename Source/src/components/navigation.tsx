"use client";

import { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0D1711]/90 backdrop-blur-md border-b border-[#A4B5A0]/15 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="wrap flex items-center justify-between">
        {/* Brand Wordmark */}
        <a
          href="#"
          className="group flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D7FF7F] rounded py-1"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#D7FF7F] shadow-[0_0_12px_#D7FF7F]" />
          <span className="text-xl font-semibold tracking-wider text-white">
            AUREN
          </span>
        </a>

        {/* Desktop Nav Items */}
        <nav
          className="hidden md:flex items-center gap-8 text-sm text-[#A4B5A0]"
          aria-label="Primary"
        >
          <a
            href="#philosophy"
            className="hover:text-white transition-colors duration-200"
          >
            Philosophy
          </a>
          <a
            href="#pillars"
            className="hover:text-white transition-colors duration-200"
          >
            Pillars
          </a>
          <a
            href="#showcase"
            className="hover:text-white transition-colors duration-200"
          >
            Experience
          </a>
          <a
            href="#growth"
            className="hover:text-white transition-colors duration-200"
          >
            Rhythm
          </a>
        </nav>

        {/* Primary CTA */}
        <div className="hidden md:flex items-center">
          <a href="#cta" className="btn-primary">
            <span>Start Your Journey</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="p-2 text-[#A4B5A0] hover:text-white rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D7FF7F]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0D1711] border-b border-[#A4B5A0]/20 px-6 py-6 flex flex-col gap-5">
          <nav className="flex flex-col gap-3 text-base font-medium text-white/90" aria-label="Mobile">
            <a
              href="#philosophy"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-[#D7FF7F] transition-colors"
            >
              Philosophy
            </a>
            <a
              href="#pillars"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-[#D7FF7F] transition-colors"
            >
              Four Pillars
            </a>
            <a
              href="#showcase"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-[#D7FF7F] transition-colors"
            >
              Product Experience
            </a>
            <a
              href="#growth"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-[#D7FF7F] transition-colors"
            >
              Growth Rhythm
            </a>
          </nav>
          <div className="pt-3 border-t border-[#A4B5A0]/15">
            <a
              href="#cta"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary w-full"
            >
              <span>Start Your Journey</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
