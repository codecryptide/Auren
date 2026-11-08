"use client";

import { Target, Footprints, RotateCcw } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      num: "01",
      icon: Target,
      title: "Choose what matters",
      description: "Set your focus across the areas of life you want to grow.",
    },
    {
      num: "02",
      icon: Footprints,
      title: "Take small daily actions",
      description: "Build habits and routines one step at a time.",
    },
    {
      num: "03",
      icon: RotateCcw,
      title: "Reflect on your progress",
      description: "See your consistency and make adjustments along the way.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="relative min-h-[700px] w-full flex flex-col justify-center bg-transparent text-white py-24 border-b border-white/[0.08]"
      aria-label="How It Works"
    >
      <div className="wrap w-full">
        {/* Section Header */}
        <div className="max-w-2xl mb-14 text-left">
          <div className="text-xs font-mono uppercase tracking-widest text-[#C8A8FF] mb-3">
            Simple Methodology
          </div>
          <h2 className="text-white mb-4">
            Three simple steps for lasting habits.
          </h2>
          <p className="text-base text-[#C5C0D0] font-light">
            A sustainable framework to create lasting habits without overwhelm.
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="auren-grid-3">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="p-8 rounded-3xl bg-[#15131D] border border-white/[0.12] hover:border-[#8D45FF]/40 hover:bg-[#1B1728] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-3xl font-mono font-bold text-[#8D45FF]">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#1B1728] border border-white/[0.1] flex items-center justify-center text-[#C8A8FF]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-white mb-3">
                    {step.title}
                  </h3>

                  <p className="text-sm text-[#C5C0D0] font-light leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.08] text-xs font-mono text-[#8E889B]">
                  Pillar Alignment
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
