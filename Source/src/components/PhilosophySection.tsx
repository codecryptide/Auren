"use client";

import { Sparkles, TrendingUp } from "lucide-react";

export function PhilosophySection() {
  return (
    <section
      id="philosophy"
      className="relative min-h-[640px] w-full flex items-center bg-transparent text-white py-24 border-b border-white/[0.08]"
      aria-label="Philosophy"
      data-statement
    >
      <div className="wrap w-full relative z-10">
        {/* Bulletproof 2-Column Desktop Layout (Left: Editorial, Right: Visual Diagram) */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-14">
          {/* Left Column: Editorial Statement */}
          <div className="w-full lg:w-7/12 flex flex-col justify-start">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#C8A8FF] uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>AUREN Philosophy // ORBIT 01</span>
            </div>
            <h2 className="text-white mb-6">
              A daily philosophy: <br />
              <span className="bg-gradient-to-r from-white via-[#C8A8FF] to-[#8D45FF] bg-clip-text text-transparent">
                a little better, every day.
              </span>
            </h2>
            <p className="text-base sm:text-lg text-[#C5C0D0] font-light leading-relaxed max-w-xl mb-6">
              Growth is not about changing everything overnight. It is about creating small routines that help you move toward the life you want.
            </p>
            <div className="flex items-center gap-3 text-xs text-[#8E889B] font-mono uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#762BFF] shadow-[0_0_8px_#762BFF]" />
              <span>Sustainable habit compound rate</span>
            </div>
          </div>

          {/* Right Column: Visual Diagram for compound growth */}
          <div
            data-ui="compound-diagram"
            className="w-full lg:w-5/12 p-8 rounded-3xl bg-[#15131D]/90 border border-white/[0.12] backdrop-blur-xl relative overflow-hidden flex flex-col justify-between shadow-[0_8px_32px_rgba(0,0,0,0.45)] hover:border-[#8D45FF]/40 transition-all duration-300"
          >
            {/* Subtle orbital wave accent behind curve */}
            <div
              className="absolute -right-16 -top-16 w-48 h-48 bg-[#762BFF]/15 rounded-full blur-3xl pointer-events-none"
              aria-hidden="true"
            />

            <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-6 relative z-10">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#1B142E] border border-[#8D45FF]/30 flex items-center justify-center text-[#C8A8FF] shadow-[0_0_10px_rgba(118,43,255,0.25)]">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div className="text-xs font-semibold text-white tracking-wide">Daily Compound Curve</div>
              </div>
              <span className="text-[11px] font-mono text-[#C8A8FF] bg-[#762BFF]/25 px-2.5 py-0.5 rounded-full border border-[#8D45FF]/40 shadow-[0_0_10px_rgba(141,69,255,0.2)]">
                1% Daily
              </span>
            </div>

            <svg viewBox="0 0 300 120" className="w-full h-28 relative z-10" role="img" aria-label="Compound Growth Curve">
              <defs>
                <linearGradient id="purpleGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#8D45FF" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#762BFF" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              <path
                d="M 10 100 Q 150 95, 290 20"
                fill="none"
                stroke="#A855F7"
                strokeWidth="2.5"
              />
              <path
                d="M 10 100 Q 150 95, 290 20 L 290 110 L 10 110 Z"
                fill="url(#purpleGrad)"
              />
              <circle cx="290" cy="20" r="4.5" fill="#C8A8FF" />
              <circle cx="290" cy="20" r="1.5" fill="#FFFFFF" />
            </svg>

            <div className="pt-4 border-t border-white/[0.08] flex justify-between text-xs text-[#C5C0D0] relative z-10">
              <span>Day 1 (Awareness)</span>
              <span className="text-white font-mono font-medium">Day 365 (37x Growth)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
