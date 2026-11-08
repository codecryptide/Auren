"use client";

import { Sparkles, Sprout, TrendingUp, Sun, Moon, Compass } from "lucide-react";

export function GrowthSection() {
  const steps = [
    {
      step: "01",
      icon: Sun,
      timeline: "Days 1 to 7",
      title: "Stage 01: Discover baseline rhythm",
      description:
        "Start with one or two daily intentions. Observe when your energy peaks, learn how your body feels, and eliminate artificial pressure.",
      quote: "No radical overhauls: awareness first.",
    },
    {
      step: "02",
      icon: TrendingUp,
      timeline: "Days 8 to 21",
      title: "Stage 02: Form daily consistency",
      description:
        "Your actions weave directly into your mornings and evenings. Completing routines feels natural and rewarding.",
      quote: "Momentum replaces willpower.",
    },
    {
      step: "03",
      icon: Compass,
      timeline: "Days 22 to 60",
      title: "Stage 03: Harmonize four pillars",
      description:
        "Physical energy feeds your deep work; reflection clarifies your learning. The pillars begin to strengthen and reinforce one another.",
      quote: "The whole becomes greater than the parts.",
    },
    {
      step: "04",
      icon: Moon,
      timeline: "Day 60 and Beyond",
      title: "Stage 04: Live your lifestyle rhythm",
      description:
        "Growth is no longer an item on a checklist. It is the grounded, energized way you move through each day.",
      quote: "Sustainable transformation.",
    },
  ];

  return (
    <section
      id="growth"
      style={{ "--h": "1" } as React.CSSProperties}
      className="relative min-h-[900px] w-full flex flex-col justify-center bg-[#0D1711] text-white py-24 border-t border-[#A4B5A0]/15"
      aria-label="Growth Storytelling"
    >
      <div className="wrap w-full">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 text-left">
          <span className="text-xs font-mono uppercase tracking-widest text-[#D7FF7F] mb-3 block">
            The Journey Ahead
          </span>
          <h2 className="text-white mb-4">
            A four-stage progression for daily habits.
          </h2>
          <p className="text-base text-[#C2D1BE] font-light">
            You do not need to change everything today. Start with one meaningful action, and let it grow.
          </p>
        </div>

        {/* Milestone Steps Timeline Grid */}
        <div data-ui="timeline-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="p-6 rounded-3xl bg-[#14251B] border border-[#A4B5A0]/20 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#0D1711] text-[#D7FF7F] border border-[#A4B5A0]/20">
                      {item.timeline}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#0D1711] flex items-center justify-center text-[#D7FF7F]">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Visual Progress Bar in each card */}
                  <div className="w-full h-1.5 rounded-full bg-[#0D1711] mb-5 overflow-hidden">
                    <div
                      className="h-full bg-[#D7FF7F]"
                      style={{ width: `${parseInt(item.step) * 25}%` }}
                    />
                  </div>

                  <h3 className="text-white mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#C2D1BE] leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#A4B5A0]/15 text-xs text-[#D7FF7F] italic font-sans flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 shrink-0" />
                  <span>{item.quote}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Closing reflection banner on wrap line */}
        <div className="p-6 rounded-2xl bg-[#14251B] border border-[#A4B5A0]/20 flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-[#0D1711] text-[#D7FF7F] shrink-0">
              <Sprout className="w-6 h-6" />
            </div>
            <div>
              <div className="text-base font-medium text-white">Compassionate evolution</div>
              <div className="text-xs text-[#C2D1BE]">Built for human lives that fluctuate, adapt, and expand.</div>
            </div>
          </div>
          <a href="#cta" className="btn-secondary shrink-0 focus:outline-none focus:ring-2 focus:ring-[#D7FF7F]">
            <span>Start Where You Are</span>
          </a>
        </div>
      </div>
    </section>
  );
}
