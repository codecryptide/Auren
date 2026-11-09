"use client";

import { Blackhole } from "./Blackhole";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[900px] h-screen w-full flex flex-col justify-center overflow-hidden bg-transparent text-white pt-20 pb-8"
      aria-label="Hero"
      data-enter
    >
      {/* Ambient Floor & Deep Cosmos Volumetric Glow */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden select-none"
        aria-hidden="true"
      >
        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[1100px] h-[240px] rounded-[100%] bg-gradient-to-t from-[#762BFF]/25 via-[#3B087F]/10 to-transparent blur-3xl opacity-70" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full bg-[#762BFF]/15 blur-[120px] pointer-events-none" />
      </div>

      {/* Main Content Vertical Stack: Slogan Diatas -> Blackhole Ditengah -> Start & Explore Dibawah */}
      <div className="wrap relative z-20 my-auto flex flex-col items-center text-center">
        {/* 1. TEXT SLOGAN & SUBTITLE DIATAS */}
        <div className="flex flex-col items-center max-w-4xl mx-auto">
          {/* Slogan Headline: Bold, Crisp & Luminous */}
          <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-extrabold tracking-[-0.035em] text-white leading-[1.08]">
            <span className="block drop-shadow-[0_2px_18px_rgba(0,0,0,0.9)]">
              Build a life you love:
            </span>
            <span className="block mt-1.5 font-normal italic bg-gradient-to-r from-white via-[#E9D5FF] via-50% to-[#A855F7] bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(168,85,247,0.55)]">
              become, one day at a time.
            </span>
          </h1>

          {/* Supporting Proposition */}
          <p className="text-xs sm:text-sm lg:text-base text-[#C5C0D0] font-normal leading-relaxed mt-4 max-w-xl mx-auto tracking-[-0.01em] drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
            AUREN brings your habits, wellness, productivity, learning, and personal growth into one intentional space.
          </p>
        </div>

        {/* 2. BLACKHOLE DITENGAH (SIZE DIBESARKAN SEDIKIT, PURE UNOBSTRUCTED CENTERPIECE) */}
        <div className="my-1 sm:my-2 w-full flex items-center justify-center">
          <Blackhole />
        </div>

        {/* 3. DIBAWAHNYA: BADGE COMPANION + START & EXPLORE DENGAN JARAK, HOVER, DAN GLOW */}
        <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto">
          {/* Eyebrow Badge (Tanpa Dot, Statis Tanpa Motion, Animasi Idle pada Teks & Hover pada Wadah) */}
          <div className="group cursor-default inline-flex items-center justify-center px-5 py-2 rounded-full bg-[#15131D]/90 border border-white/[0.14] text-[11px] sm:text-xs font-mono tracking-[0.22em] uppercase mb-8 mt-2 backdrop-blur-xl shadow-[0_0_18px_rgba(118,43,255,0.2)] hover:border-[#8D45FF]/70 hover:bg-[#1C172C]/95 hover:shadow-[0_0_30px_rgba(141,69,255,0.5)] transition-all duration-300 select-none">
            <span className="animate-text-shimmer font-medium group-hover:text-white group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.9)] transition-all duration-300">
              Personal Growth &amp; Lifestyle Companion
            </span>
          </div>

          {/* Action Buttons: Berjarak, Tanpa Panah, Animasi Hover & Glow */}
          <div className="flex flex-col items-center justify-center gap-4 w-full max-w-xs">
            {/* Top Button: START YOUR JOURNEY (No arrow, vibrant purple glow on hover) */}
            <a
              href="#cta"
              className="w-full sm:w-[250px] h-12 px-8 rounded-full bg-gradient-to-r from-[#762BFF] to-[#8D45FF] text-white font-semibold text-xs tracking-widest uppercase flex items-center justify-center shadow-[0_0_25px_rgba(141,69,255,0.5)] hover:from-[#8D45FF] hover:to-[#A855F7] hover:shadow-[0_0_40px_rgba(141,69,255,0.85),0_0_80px_rgba(118,43,255,0.45)] hover:-translate-y-1 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8D45FF]"
            >
              Start Your Journey
            </a>

            {/* Bottom Button: EXPLORE FEATURES (Frosted glass with electric violet glow on hover) */}
            <a
              href="#pillars"
              className="w-full sm:w-[250px] h-12 px-8 rounded-full bg-[#15131D]/85 border border-white/[0.14] text-[#C5C0D0] font-medium text-xs tracking-widest uppercase flex items-center justify-center backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.35)] hover:border-[#8D45FF]/70 hover:bg-[#1E1730]/95 hover:text-white hover:shadow-[0_0_30px_rgba(141,69,255,0.5)] hover:-translate-y-1 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8D45FF]"
            >
              Explore Features
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
