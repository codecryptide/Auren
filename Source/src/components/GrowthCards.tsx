"use client";

import { Sun, Repeat, BookOpen, Heart, Sparkles } from "lucide-react";

export function GrowthCards() {
  const themes = [
    {
      id: "morning",
      icon: Sun,
      title: "A calmer morning",
      description: "Start each day grounded with simple breathwork and physical presence before looking at screens.",
      time: "Morning Rhythm",
    },
    {
      id: "routine",
      icon: Repeat,
      title: "A more consistent routine",
      description: "Build an unbroken sequence of 2 to 3 core actions that anchor your daily productivity.",
      time: "Daily Habit",
    },
    {
      id: "learn",
      icon: BookOpen,
      title: "Making time to learn",
      description: "Carve out 20 quiet minutes each day to explore new books, concepts, and skills that inspire you.",
      time: "Growth Focus",
    },
    {
      id: "reflect",
      icon: Heart,
      title: "Finding space to reflect",
      description: "Close your evenings with gratitude and mindfulness, celebrating small wins and resetting your mind.",
      time: "Evening Reflection",
    },
  ];

  return (
    <section
      id="growth"
      className="relative min-h-[800px] w-full flex flex-col justify-center bg-transparent text-white py-24 border-b border-white/[0.08]"
      aria-label="Growth Cards"
    >
      <div className="wrap w-full">
        {/* Section Header */}
        <div className="max-w-2xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#C8A8FF] uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Personal Pathways</span>
          </div>
          <h2 className="text-white mb-4">
            Personal pathways for meaningful progress.
          </h2>
          <p className="text-base text-[#C5C0D0] font-light">
            There is no single path to becoming your best self. Start with what matters to you.
          </p>
        </div>

        {/* 4 Aspirational Theme Cards Grid */}
        <div className="auren-grid-4">
          {themes.map((theme) => {
            const Icon = theme.icon;
            return (
              <div
                key={theme.id}
                className="p-7 rounded-3xl bg-[#15131D] border border-white/[0.12] hover:border-[#8D45FF]/40 hover:bg-[#1B1728] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-2xl bg-[#1B1728] border border-white/[0.1] flex items-center justify-center text-[#C8A8FF]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-[#8E889B] uppercase tracking-wider">
                      {theme.time}
                    </span>
                  </div>

                  <h3 className="text-white mb-3">
                    {theme.title}
                  </h3>

                  <p className="text-sm text-[#C5C0D0] font-light leading-relaxed mb-6">
                    {theme.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.08] flex items-center gap-2 text-xs text-[#C8A8FF]">
                  <Sparkles className="w-3 h-3" />
                  <span>Personal Intention</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
