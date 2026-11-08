"use client";

import { Activity, CheckSquare, BookOpen, Sparkles, ArrowUpRight } from "lucide-react";

export function PillarCards() {
  const pillars = [
    {
      id: "fitness",
      icon: Activity,
      tag: "Pillar 01",
      title: "Fitness & Wellness",
      h3Title: "Fitness and wellness routines",
      description: "Move your body, build healthier routines, and make wellness part of your everyday life.",
      highlight: false,
    },
    {
      id: "productivity",
      icon: CheckSquare,
      tag: "Pillar 02",
      title: "Productivity",
      h3Title: "Productivity and focus systems",
      description: "Organize your day, focus on what matters, and turn intentions into meaningful action.",
      highlight: true, // Reference subtle purple accent
    },
    {
      id: "learning",
      icon: BookOpen,
      tag: "Pillar 03",
      title: "Learning & Growth",
      h3Title: "Learning and personal development",
      description: "Keep learning, explore new interests, and track the progress of your personal goals.",
      highlight: false,
    },
    {
      id: "spirituality",
      icon: Sparkles,
      tag: "Pillar 04",
      title: "Spirituality",
      h3Title: "Spirituality and quiet reflection",
      description: "Make room for ibadah, reflection, reading, and spiritual practices that matter to you.",
      highlight: false,
    },
  ];

  return (
    <section
      id="pillars"
      className="relative min-h-[800px] w-full flex flex-col justify-center bg-transparent text-white py-24 border-b border-white/[0.08]"
      aria-label="Four Lifestyle Pillars"
    >
      <div className="wrap w-full">
        {/* Section Header */}
        <div className="max-w-2xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#C8A8FF] uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Core Architecture</span>
          </div>
          <h2 className="text-white mb-4">
            Four lifestyle pillars for balanced living.
          </h2>
          <p className="text-base text-[#C5C0D0] font-light">
            Bring the essential areas of your daily life into one coherent rhythm.
          </p>
        </div>

        {/* 4 Lifestyle Pillar Cards Grid */}
        <div className="auren-grid-4">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className={`group relative p-7 rounded-3xl transition-all duration-300 flex flex-col justify-between ${
                  pillar.highlight
                    ? "bg-gradient-to-b from-[#1B142E] to-[#15131D] border border-[#8D45FF]/45 shadow-[0_10px_35px_-10px_rgba(118,43,255,0.35)]"
                    : "bg-[#15131D] border border-white/[0.12] hover:border-[#8D45FF]/40 hover:bg-[#1B1728] hover:-translate-y-1"
                }`}
              >
                <div>
                  {/* Top Row: Purple Icon + Circular Arrow */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-[#1B1728] border border-white/[0.1] flex items-center justify-center text-[#C8A8FF] group-hover:text-white group-hover:bg-[#762BFF] transition-all duration-300 shadow-[0_0_15px_rgba(118,43,255,0.25)]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="w-8 h-8 rounded-full border border-white/[0.1] flex items-center justify-center text-[#8E889B] group-hover:text-white group-hover:border-white/30 transition-colors">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Pillar Tag */}
                  <div className="text-xs font-mono uppercase tracking-wider text-[#C8A8FF] mb-2">
                    {pillar.tag}
                  </div>

                  {/* Heading */}
                  <h3 className="text-white mb-3">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#C5C0D0] font-light leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs text-[#8E889B] group-hover:text-[#C8A8FF] transition-colors">
                  <span>Explore Routine</span>
                  <span>→</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

