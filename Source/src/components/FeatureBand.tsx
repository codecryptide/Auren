"use client";

import { Clock, TrendingUp, Layers, Heart } from "lucide-react";

export function FeatureBand() {
  const blocks = [
    {
      tag: "Rhythm",
      icon: Clock,
      title: "Your Daily Rhythm",
      description: "Build a routine that fits your life.",
    },
    {
      tag: "Consistency",
      icon: TrendingUp,
      title: "Progress You Can See",
      description: "Reflect on consistency and growth over time.",
    },
    {
      tag: "Integration",
      icon: Layers,
      title: "One Balanced Lifestyle",
      description: "Bring wellness, focus, learning, and spirituality together.",
    },
    {
      tag: "Balance",
      icon: Heart,
      title: "Growth at Your Pace",
      description: "Stay motivated without pressure or perfection.",
    },
  ];

  return (
    <section
      id="feature-band"
      className="relative w-full py-28 bg-gradient-to-b from-[#180C33]/70 via-[#0E071D]/50 to-transparent border-y border-[#762BFF]/30 overflow-hidden"
      aria-label="Feature Band"
    >
      {/* Background ambient radial violet light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#762BFF]/25 blur-[100px] pointer-events-none" />

      <div className="wrap relative z-10 w-full">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="text-xs font-mono uppercase tracking-widest text-[#C8A8FF] mb-3">
            Core Differentiators
          </div>
          <h2 className="text-white mb-4">
            Designed for progress around your everyday life.
          </h2>
          <p className="text-base sm:text-lg text-[#C5C0D0] font-light">
            AUREN brings your daily routines together: so your progress feels clear, personal, and sustainable.
          </p>
        </div>

        {/* 4 Feature Columns */}
        <div className="auren-grid-4">
          {blocks.map((block) => {
            const Icon = block.icon;
            return (
              <div
                key={block.tag}
                className="p-7 rounded-3xl bg-[#15131D]/80 border border-white/[0.12] backdrop-blur-sm hover:border-[#8D45FF]/50 hover:bg-[#1B1728] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-xs font-mono uppercase tracking-widest text-[#C8A8FF] px-3 py-1 rounded-full bg-[#1B1728] border border-white/[0.08]">
                      {block.tag}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-[#1B1728] border border-white/[0.08] flex items-center justify-center text-[#C8A8FF]">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-white mb-2 leading-snug">
                    {block.title}
                  </h3>
                  <p className="text-sm text-[#C5C0D0] font-light leading-relaxed">
                    {block.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/[0.08] flex items-center gap-2 text-xs font-mono text-[#8E889B]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#762BFF]" />
                  <span>Integrated System</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
