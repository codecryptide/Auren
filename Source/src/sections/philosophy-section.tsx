"use client";

import { Compass, Leaf, ShieldCheck } from "lucide-react";

export function PhilosophySection() {
  return (
    <section
      id="philosophy"
      className="relative min-h-[900px] w-full flex items-center bg-[#14251B] text-white py-24 border-t border-[#A4B5A0]/15"
      aria-label="Philosophy"
      data-statement
    >
      <div className="wrap w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Statement & Narrative */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <span className="text-xs font-mono uppercase tracking-widest text-[#D7FF7F] mb-3 block">
              The AUREN Philosophy
            </span>
            <h2 className="text-white mb-6">
              Small steps. <br />
              <span className="text-[#A4B5A0]">A life in motion.</span>
            </h2>

            <div className="p-6 rounded-2xl bg-[#0D1711] border border-[#A4B5A0]/20 mb-6">
              <p className="text-base text-white/95 font-light leading-relaxed mb-4">
                &ldquo;Growth does not happen all at once. It happens in the moments you choose to show up: for your body, your goals, your curiosity, and what matters most.&rdquo;
              </p>
              <div className="flex items-center gap-2 text-xs text-[#A4B5A0] font-mono uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#D7FF7F]" />
                <span>Core Framework</span>
              </div>
            </div>

            {/* Visual SVG Diagram for Philosophy (Four Pillars Balance Diagram) */}
            <div data-ui="pillars-diagram" className="w-full h-48 rounded-2xl bg-[#0D1711] border border-[#A4B5A0]/20 p-4 flex items-center justify-center">
              <svg viewBox="0 0 320 140" className="w-full h-full" role="img" aria-label="Four Pillars Integration Diagram">
                <circle cx="160" cy="70" r="42" fill="none" stroke="#D7FF7F" strokeWidth="1.5" strokeDasharray="3 3" />
                <circle cx="160" cy="70" r="14" fill="#14251B" stroke="#D7FF7F" strokeWidth="2" />
                <text x="160" y="74" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontFamily="sans-serif">AUREN</text>
                
                {/* 4 Connected Nodes */}
                <circle cx="90" cy="40" r="10" fill="#0D1711" stroke="#A4B5A0" strokeWidth="1.5" />
                <text x="90" y="43" textAnchor="middle" fill="#D7FF7F" fontSize="8" fontFamily="monospace">FIT</text>
                <line x1="99" y1="46" x2="146" y2="65" stroke="#A4B5A0" strokeWidth="1" />

                <circle cx="230" cy="40" r="10" fill="#0D1711" stroke="#A4B5A0" strokeWidth="1.5" />
                <text x="230" y="43" textAnchor="middle" fill="#D7FF7F" fontSize="8" fontFamily="monospace">PROD</text>
                <line x1="221" y1="46" x2="174" y2="65" stroke="#A4B5A0" strokeWidth="1" />

                <circle cx="90" cy="100" r="10" fill="#0D1711" stroke="#A4B5A0" strokeWidth="1.5" />
                <text x="90" y="103" textAnchor="middle" fill="#D7FF7F" fontSize="8" fontFamily="monospace">MIND</text>
                <line x1="99" y1="94" x2="146" y2="75" stroke="#A4B5A0" strokeWidth="1" />

                <circle cx="230" cy="100" r="10" fill="#0D1711" stroke="#A4B5A0" strokeWidth="1.5" />
                <text x="230" y="103" textAnchor="middle" fill="#D7FF7F" fontSize="8" fontFamily="monospace">SOUL</text>
                <line x1="221" y1="94" x2="174" y2="75" stroke="#A4B5A0" strokeWidth="1" />
              </svg>
            </div>
          </div>

          {/* Right Column: Three Structural Principles */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            <div className="p-6 rounded-2xl bg-[#0D1711] border border-[#A4B5A0]/20">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-[#14251B] text-[#D7FF7F] shrink-0">
                  <Leaf className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white mb-2">Sustainable daily routines</h3>
                  <p className="text-sm text-[#C2D1BE] leading-relaxed">
                    Most trackers rely on aggressive streaks and penalty notifications. AUREN gives you room to build lasting routines that adapt to your daily energy.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#0D1711] border border-[#A4B5A0]/20">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-[#14251B] text-[#D7FF7F] shrink-0">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white mb-2">Four growth pillars</h3>
                  <p className="text-sm text-[#C2D1BE] leading-relaxed">
                    Physical health, daily tasks, study, and reflection are connected. When they share one home, focus follows naturally.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#0D1711] border border-[#A4B5A0]/20">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-[#14251B] text-[#D7FF7F] shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white mb-2">Focused companion interface</h3>
                  <p className="text-sm text-[#C2D1BE] leading-relaxed">
                    No noisy social feeds, no gamified distractions, and no cognitive clutter. A clean interface created to help you focus on the person you are becoming.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
