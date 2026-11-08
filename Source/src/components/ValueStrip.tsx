"use client";

import { LayoutGrid, Layers, Footprints, Clock } from "lucide-react";

export function ValueStrip() {
  const values = [
    {
      title: "One space",
      description: "for your daily life",
      icon: LayoutGrid,
    },
    {
      title: "4 pillars",
      description: "for balanced growth",
      icon: Layers,
    },
    {
      title: "Small steps",
      description: "that build consistency",
      icon: Footprints,
    },
    {
      title: "Your pace",
      description: "progress without pressure",
      icon: Clock,
    },
  ];

  return (
    <div className="relative w-full bg-[#08070D]/70 backdrop-blur-md border-y border-white/[0.08] pt-24 pb-16 overflow-hidden z-20">
      {/* Volumetric Cosmic Cloud / Nebula Fog Accent behind Strip */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden select-none"
        aria-hidden="true"
      >
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[160px] bg-gradient-to-r from-[#762BFF]/25 via-[#8D45FF]/20 to-transparent blur-[80px] rounded-full animate-nebula" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[160px] bg-gradient-to-l from-[#C8A8FF]/25 via-[#762BFF]/20 to-transparent blur-[80px] rounded-full animate-nebula-delayed" />
      </div>

      <div className="wrap relative z-10">
        {/* Guaranteed Symmetrical Horizontal 4-Column Strip (Kesamping & Simetris) */}
        <div className="auren-grid-4 items-stretch">
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <div
                key={v.title}
                className="group flex items-center gap-4 p-4 sm:p-5 rounded-2xl bg-[#15131D]/90 border border-white/[0.12] backdrop-blur-xl hover:border-[#8D45FF]/60 hover:bg-[#1B1728] hover:-translate-y-1 transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.45)]"
              >
                {/* Symmetrical Glowing Purple Icon Box */}
                <div className="w-12 h-12 rounded-xl bg-[#1B142E] border border-[#8D45FF]/40 flex items-center justify-center text-[#C8A8FF] shrink-0 shadow-[0_0_15px_rgba(118,43,255,0.3)] group-hover:scale-105 group-hover:text-white group-hover:bg-[#762BFF] group-hover:shadow-[0_0_22px_rgba(141,69,255,0.65)] transition-all duration-300">
                  <Icon size={22} className="w-[22px] h-[22px]" />
                </div>

                {/* Symmetrical Text Block */}
                <div className="min-w-0 flex-1">
                  <div className="text-sm sm:text-base font-semibold text-white tracking-tight truncate group-hover:text-[#E9D5FF] transition-colors">
                    {v.title}
                  </div>
                  <div className="text-xs text-[#C5C0D0] truncate mt-0.5">
                    {v.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
