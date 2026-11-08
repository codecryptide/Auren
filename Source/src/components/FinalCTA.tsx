"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

export function FinalCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <footer
      id="cta"
      className="footer closing footer--dark relative min-h-[900px] w-full flex flex-col justify-between bg-transparent text-white pt-24 pb-12 border-t border-white/[0.08] overflow-hidden"
      style={{ "--h": "1" } as React.CSSProperties}
    >
      {/* Intense Background Violet Glow Arc */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-b from-[#762BFF]/30 via-[#3B087F]/20 to-transparent blur-[120px] pointer-events-none" />

      <div className="wrap relative z-10 w-full flex-1 flex flex-col justify-between">
        {/* Row 1: CTA Content Box */}
        <div className="closing__cta max-w-2xl text-left mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#15131D] border border-white/[0.14] text-xs font-mono tracking-widest text-[#C8A8FF] uppercase mb-6 shadow-[0_0_20px_rgba(118,43,255,0.25)]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Start Your Chapter</span>
          </div>

          <h2 className="text-white mb-4">
            Your next chapter starts with one small step.
          </h2>

          <p className="text-base sm:text-lg text-[#C5C0D0] font-light leading-relaxed mb-8">
            Make space for the life you want to build. Join the early community preview and build daily routines that last.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="w-full max-w-md mb-6">
              <label
                htmlFor="early-access-email"
                className="text-xs font-mono uppercase tracking-wider text-[#C5C0D0] mb-2 block"
              >
                Email address
              </label>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  id="early-access-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="flex-1 h-[44px] px-4 rounded-full bg-[#15131D] border border-white/[0.14] text-white placeholder-[#8E889B] text-sm focus:outline-none focus:border-[#8D45FF] focus:ring-1 focus:ring-[#8D45FF] transition-all"
                />
                <button
                  type="submit"
                  className="btn-primary shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <span>Start Your Journey</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          ) : (
            <div className="p-4 rounded-2xl bg-[#15131D] border border-[#8D45FF]/40 flex items-center gap-3 text-white text-sm mb-6">
              <CheckCircle2 className="w-5 h-5 text-[#8D45FF] shrink-0" />
              <div>
                <div className="font-semibold">Invitation requested.</div>
                <div className="text-xs text-[#C5C0D0]">
                  Recorded for: <span className="text-[#C8A8FF]">{email}</span>
                </div>
              </div>
            </div>
          )}

          <div className="flex flex-wrap gap-6 text-xs text-[#8E889B]">
            <span>• Free during early preview</span>
            <span>• No payment card required</span>
            <span>• Privacy-first design</span>
          </div>
        </div>

        {/* Large Brand Wordmark Statement on Ground */}
        <div className="close__word text-6xl sm:text-8xl lg:text-9xl font-bold tracking-tight text-[#15131D] select-none pointer-events-none mb-8">
          AUREN
        </div>

        {/* Row 2: Footer Links & Legal Bar */}
        <div className="closing__links pt-6 border-t border-white/[0.1]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#C5C0D0]">
            <div>
              <span className="font-bold text-white tracking-wider mr-2">AUREN</span>
              <span>— Build a life you love.</span>
            </div>
            <nav className="flex flex-wrap gap-6 font-mono uppercase tracking-wider" aria-label="Footer Navigation">
              <a href="#pillars" className="hover:text-white transition-colors">Features</a>
              <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
              <a href="#showcase" className="hover:text-white transition-colors">Experience</a>
              <a href="#philosophy" className="hover:text-white transition-colors">About</a>
            </nav>
            <div className="text-[11px] text-[#8E889B]">
              &copy; {new Date().getFullYear()} AUREN. All rights reserved. • Privacy • Terms
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

