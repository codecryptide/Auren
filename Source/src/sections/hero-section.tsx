"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { HeroOrb } from "../components/hero-orb";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[900px] h-screen w-full flex flex-col justify-between overflow-hidden bg-[#0D1711] text-white pt-28 pb-10"
      aria-label="Hero"
      data-enter
    >
      {/* 3D Organic Orb & Atmosphere */}
      <HeroOrb />

      {/* Main Content Area */}
      <div className="wrap relative z-10 my-auto flex flex-col items-start text-left">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#14251B] border border-[#A4B5A0]/30 text-xs tracking-widest text-[#A4B5A0] uppercase mb-8 backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#D7FF7F]" />
          <span>Intentional Living</span>
        </div>

        {/* Headline naming category and what is sold */}
        <h1 className="max-w-4xl text-white mb-6">
          A personal growth companion to build a life that{" "}
          <span className="italic font-normal text-[#D7FF7F]">feels like yours</span>.
        </h1>

        {/* Value Proposition */}
        <p className="max-w-2xl text-base sm:text-lg text-[#C2D1BE] font-normal leading-relaxed mb-10">
          A dedicated space to move better, learn more, stay consistent, and grow into the person you want to become.
        </p>

        {/* CTA Button Group */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a href="#cta" className="btn-primary w-full sm:w-auto">
            <span>Start Your Journey</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#pillars" className="btn-secondary w-full sm:w-auto">
            <span>Explore AUREN</span>
          </a>
        </div>
      </div>

      {/* Bottom Proof Strip on wrap lines */}
      <div className="wrap relative z-10 w-full pt-8 border-t border-[#A4B5A0]/20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          <div>
            <div className="text-xl sm:text-2xl font-medium text-white mb-1">4 Pillars</div>
            <div className="text-xs text-[#A4B5A0]">Fitness, focus, study and reflection</div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-medium text-white mb-1">Daily Rhythm</div>
            <div className="text-xs text-[#A4B5A0]">Structured for sustainable balance</div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-medium text-white mb-1">Zero Clutter</div>
            <div className="text-xs text-[#A4B5A0]">No social feeds or ad banners</div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-medium text-white mb-1">In Perspective</div>
            <div className="text-xs text-[#A4B5A0]">All personal progress in one view</div>
          </div>
        </div>
      </div>
    </section>
  );
}
