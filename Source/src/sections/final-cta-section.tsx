"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

export function FinalCtaSection() {
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
      className="footer closing footer--statement relative min-h-[900px] w-full flex flex-col justify-between bg-[#0D1711] text-white pt-24 pb-12 border-t border-[#A4B5A0]/15 overflow-hidden"
      style={{ "--h": "1" } as React.CSSProperties}
    >
      {/* Subtle background atmosphere */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#14251B] via-[#A4B5A0]/15 to-[#D7FF7F]/20 blur-3xl opacity-40 pointer-events-none" />

      <div className="wrap relative z-10 w-full flex-1 flex flex-col justify-between">
        {/* Row 1: CTA block */}
        <div className="closing__cta max-w-2xl text-left mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#14251B] border border-[#A4B5A0]/30 text-xs font-mono tracking-widest text-[#D7FF7F] uppercase mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Begin Your New Rhythm</span>
          </div>

          <h2 className="text-white mb-4">
            Begin your personal growth journey.
          </h2>

          <p className="text-base text-[#C2D1BE] font-light leading-relaxed mb-8">
            Make space for the habits, goals, and daily moments that matter. Join the early community preview and experience personal growth with lasting balance.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="w-full max-w-md mb-6">
              <label htmlFor="early-email" className="text-xs font-mono uppercase tracking-wider text-[#A4B5A0] mb-2 block text-left">
                Email address
              </label>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  id="early-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="flex-1 h-[44px] px-4 rounded-full bg-[#14251B] border border-[#A4B5A0]/30 text-white placeholder-[#A4B5A0]/60 text-sm focus:outline-none focus:ring-2 focus:ring-[#D7FF7F] transition-all"
                />
                <button
                  type="submit"
                  className="btn-primary shrink-0 focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <span>Request Invite</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          ) : (
            <div className="p-4 rounded-2xl bg-[#14251B] border border-[#D7FF7F]/40 flex items-center gap-3 text-white text-sm mb-6">
              <CheckCircle2 className="w-5 h-5 text-[#D7FF7F] shrink-0" />
              <div>
                <div className="font-medium">Invitation requested.</div>
                <div className="text-xs text-[#A4B5A0]">
                  Recorded for: <span className="text-[#D7FF7F]">{email}</span>
                </div>
              </div>
            </div>
          )}

          <div className="flex flex-wrap gap-6 text-xs text-[#A4B5A0]">
            <span>• Free during early preview</span>
            <span>• No payment card required</span>
            <span>• Privacy-first design</span>
          </div>
        </div>

        {/* Big Wordmark Statement on Ground (close--word) */}
        <div className="close__word text-6xl sm:text-8xl lg:text-9xl font-bold tracking-tight text-[#14251B] select-none pointer-events-none mb-8">
          AUREN
        </div>

        {/* Row 2: Links and Legal Row */}
        <div className="closing__links pt-6 border-t border-[#A4B5A0]/20">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#A4B5A0]">
            <div>&copy; {new Date().getFullYear()} AUREN. All rights reserved.</div>
            <nav className="flex flex-wrap gap-6 font-mono uppercase tracking-wider" aria-label="Footer Navigation">
              <a href="#philosophy" className="hover:text-white transition-colors">Philosophy</a>
              <a href="#pillars" className="hover:text-white transition-colors">Pillars</a>
              <a href="#showcase" className="hover:text-white transition-colors">Experience</a>
              <a href="#growth" className="hover:text-white transition-colors">Rhythm</a>
            </nav>
            <div className="text-[11px]">AUREN • Privacy • Terms • Next.js, Tailwind CSS &amp; TasteSkill.</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
