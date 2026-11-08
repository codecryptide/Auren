"use client";

import { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#08070D]/90 backdrop-blur-xl border-b border-white/[0.08] py-3.5 shadow-xl shadow-black/50"
          : "bg-transparent py-5"
      }`}
    >
      {/* Top Luminous Accent Hairline */}
      <div
        className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#8D45FF]/45 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      {/* Header Container dengan Jarak Ideal Terkoordinasi Sempurna dengan Content Grid (max-w-7xl) */}
      <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Skip to Content for TasteSkill / Accessibility */}
        <a
          href="#hero"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#762BFF] focus:text-white focus:rounded-full focus:text-xs focus:font-semibold focus:shadow-lg"
        >
          Skip to content
        </a>

        {/* Brand: Bespoke Blackhole Diatas Teks AUREN (dengan Idle & Hover Animation Lengkap) */}
        <a
          href="#hero"
          className="group flex flex-col items-center justify-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8D45FF] rounded-xl py-1 px-2.5 -ml-2.5 transition-all duration-300 z-10"
          aria-label="AUREN Home"
        >
          {/* Bespoke Blackhole Singularity Glyph (Diatas Teks dengan Idle & Hover Animation) */}
          <div className="relative w-9 h-9 rounded-full bg-[#050409] border border-[#8D45FF]/50 flex items-center justify-center shadow-[0_0_18px_rgba(141,69,255,0.4)] group-hover:scale-120 group-hover:border-[#E9D5FF] group-hover:shadow-[0_0_32px_rgba(141,69,255,0.95),0_0_55px_rgba(118,43,255,0.5)] transition-all duration-500 ease-out">
            {/* Gravitational Wave Ripple on Hover */}
            <div className="absolute inset-0 rounded-full border border-[#C8A8FF]/0 group-hover:border-[#C8A8FF]/70 group-hover:scale-150 group-hover:opacity-0 transition-all duration-700 pointer-events-none" />

            {/* Ambient Idle Accretion Ring (Rotating Dashed Halo) */}
            <div className="absolute -inset-[3.5px] rounded-full border border-dashed border-[#8D45FF]/45 animate-[spin_20s_linear_infinite] group-hover:animate-[spin_3.5s_linear_infinite] group-hover:border-[#C8A8FF]/90 transition-all duration-300 pointer-events-none" />

            {/* Counter-Rotating Luminous Photon Crescent Ring (Idle Rotate & Hover Flash) */}
            <div className="absolute inset-0 rounded-full border-t-[1.5px] border-l-[1.5px] border-[#E9D5FF] opacity-90 animate-[spin_12s_linear_infinite_reverse] group-hover:animate-[spin_2s_linear_infinite_reverse] group-hover:border-white transition-all duration-300" />

            {/* Inner Singularity Core & High-Radiance Spark */}
            <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-white via-[#E9D5FF] to-[#C8A8FF] shadow-[0_0_10px_#ffffff] group-hover:scale-135 group-hover:bg-white group-hover:shadow-[0_0_16px_#ffffff,0_0_28px_#8D45FF] transition-all duration-300" />
          </div>

          {/* AUREN Brand Wordmark */}
          <div className="flex items-baseline gap-1">
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.28em] text-white font-sans group-hover:tracking-[0.32em] group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-[#E9D5FF] group-hover:to-[#C8A8FF] group-hover:bg-clip-text group-hover:drop-shadow-[0_0_14px_rgba(200,168,255,0.7)] transition-all duration-300">
              AUREN
            </span>
            <span className="text-[9px] font-mono text-[#C8A8FF]/80 group-hover:text-white group-hover:rotate-180 transition-transform duration-500">
              ✦
            </span>
          </div>
        </a>

        {/* Desktop Nav Items in Frosted Floating Capsule (Presisi Mutlak di Tengah-Tengah Layar) */}
        <nav
          className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-6 px-5 py-2 rounded-full bg-[#15131D]/65 border border-white/[0.09] backdrop-blur-xl shadow-[0_4px_24px_rgba(0,0,0,0.4)] z-10"
          aria-label="Primary"
        >
          <a
            href="#pillars"
            className="text-[12.5px] font-medium tracking-wide text-[#C5C0D0] hover:text-white transition-colors duration-200"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="text-[12.5px] font-medium tracking-wide text-[#C5C0D0] hover:text-white transition-colors duration-200"
          >
            How It Works
          </a>
          <a
            href="#showcase"
            className="text-[12.5px] font-medium tracking-wide text-[#C5C0D0] hover:text-white transition-colors duration-200"
          >
            Experience
          </a>
          <a
            href="#philosophy"
            className="text-[12.5px] font-medium tracking-wide text-[#C5C0D0] hover:text-white transition-colors duration-200"
          >
            Philosophy
          </a>
        </nav>

        {/* Action Button Pair (Digeser sedikit ke kanan sesuai proporsi estetika TasteSkill) */}
        <div className="hidden md:flex items-center gap-2.5 z-10 translate-x-3 sm:translate-x-5 lg:translate-x-7 transition-transform duration-300">
          <a
            href="#pillars"
            className="btn-secondary !h-9 !px-4 !text-xs !tracking-wider hover:border-[#8D45FF]/60 hover:shadow-[0_0_20px_rgba(141,69,255,0.35)] hover:-translate-y-0.5 transition-all duration-300"
          >
            <span>Explore Features</span>
          </a>
          <a
            href="#cta"
            className="btn-primary !h-9 !px-4.5 !text-xs !tracking-wider hover:shadow-[0_0_28px_rgba(141,69,255,0.7)] hover:-translate-y-0.5 transition-all duration-300"
          >
            <span>Get Started</span>
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
            className="p-2 text-[#C5C0D0] hover:text-white rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8D45FF]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#08070D]/95 backdrop-blur-2xl border-b border-white/[0.12] px-6 py-6 flex flex-col gap-4 animate-in fade-in duration-200">
          <nav className="flex flex-col gap-3 text-base font-medium text-white/90" aria-label="Mobile">
            <a
              href="#pillars"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#C8A8FF] transition-colors"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#C8A8FF] transition-colors"
            >
              How It Works
            </a>
            <a
              href="#showcase"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#C8A8FF] transition-colors"
            >
              Experience
            </a>
            <a
              href="#philosophy"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#C8A8FF] transition-colors"
            >
              Philosophy
            </a>
          </nav>

          <div className="pt-4 border-t border-white/[0.08] flex flex-col gap-2.5">
            <a
              href="#cta"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary w-full text-center"
            >
              <span>Get Started</span>
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </a>
            <a
              href="#pillars"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-secondary w-full text-center"
            >
              <span>Explore Features</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
