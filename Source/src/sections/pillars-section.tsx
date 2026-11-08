"use client";

import { useState } from "react";
import { Activity, CheckCircle2, BookOpen, Heart, Flame, Timer, Sparkles, Award } from "lucide-react";

export function PillarsSection() {
  const [activePillar, setActivePillar] = useState(0);

  const pillars = [
    {
      id: "fitness",
      icon: Activity,
      tag: "Pillar 01",
      title: "Fitness & Wellness",
      h3Name: "Pillar 01: Fitness and movement",
      headline: "Move with intention.",
      description:
        "Build adaptive routines that fit your natural daily energy, physical goals, and everyday life: sustainable movement without penalty.",
      highlights: ["Adaptive Workout Routines", "Daily Movement Metrics", "Rest and Recovery Balance"],
      uiPreview: (
        <div data-ui="app-preview" className="bg-[#0D1711] rounded-2xl p-6 border border-[#A4B5A0]/25 flex flex-col gap-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#A4B5A0]/15">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#14251B] flex items-center justify-center text-[#D7FF7F]">
                <Activity className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm font-medium text-white">Morning Mobility &amp; Core</div>
                <div className="text-xs text-[#A4B5A0]">Session 14 of 28 • Low Impact</div>
              </div>
            </div>
            <span className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-[#D7FF7F]/15 text-[#D7FF7F] border border-[#D7FF7F]/30">
              Active Flow
            </span>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="p-3 rounded-xl bg-[#14251B]">
              <div className="text-[11px] text-[#A4B5A0] flex items-center gap-1.5 mb-1">
                <Timer className="w-3.5 h-3.5 text-[#D7FF7F]" />
                Duration
              </div>
              <div className="text-base font-medium text-white">35 min</div>
            </div>
            <div className="p-3 rounded-xl bg-[#14251B]">
              <div className="text-[11px] text-[#A4B5A0] flex items-center gap-1.5 mb-1">
                <Flame className="w-3.5 h-3.5 text-[#D7FF7F]" />
                Energy
              </div>
              <div className="text-base font-medium text-white">280 kcal</div>
            </div>
            <div className="p-3 rounded-xl bg-[#14251B]">
              <div className="text-[11px] text-[#A4B5A0] flex items-center gap-1.5 mb-1">
                <Award className="w-3.5 h-3.5 text-[#D7FF7F]" />
                Streak
              </div>
              <div className="text-base font-medium text-[#D7FF7F]">9 Days</div>
            </div>
          </div>

          <div className="space-y-2 pt-1 text-xs">
            <div className="p-2.5 rounded-lg bg-[#14251B] flex items-center justify-between text-white/90">
              <span>Deep Thoracic Spine Rotations</span>
              <span className="text-[#D7FF7F]">Completed</span>
            </div>
            <div className="p-2.5 rounded-lg bg-[#14251B] flex items-center justify-between text-white/90">
              <span>Single-leg Glute Balance</span>
              <span className="text-[#D7FF7F]">Completed</span>
            </div>
            <div className="p-2.5 rounded-lg bg-[#182C20] border border-[#D7FF7F]/30 flex items-center justify-between text-white">
              <span>Diaphragmatic Breath Cooldown</span>
              <span className="text-[#A4B5A0]">Up Next (5m)</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "productivity",
      icon: CheckCircle2,
      tag: "Pillar 02",
      title: "Productivity",
      h3Name: "Pillar 02: Productivity and focus",
      headline: "Make each day count.",
      description:
        "Plan your day with clarity. Organize tasks, cultivate unbroken focus blocks, and maintain visibility on key work.",
      highlights: ["Focused Daily Flow", "Priority 3 Focus Blocks", "Task Organization"],
      uiPreview: (
        <div data-ui="app-preview" className="bg-[#0D1711] rounded-2xl p-6 border border-[#A4B5A0]/25 flex flex-col gap-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#A4B5A0]/15">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#14251B] flex items-center justify-center text-[#D7FF7F]">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm font-medium text-white">Focus &amp; Prioritization</div>
                <div className="text-xs text-[#A4B5A0]">3 of 4 High-Impact Tasks Complete</div>
              </div>
            </div>
            <span className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-[#D7FF7F]/15 text-[#D7FF7F] border border-[#D7FF7F]/30">
              In Flow
            </span>
          </div>

          <div className="space-y-2.5 text-xs">
            <div className="p-3 rounded-xl bg-[#14251B] flex items-center gap-3">
              <span className="w-4 h-4 rounded-md bg-[#D7FF7F] text-[#0D1711] flex items-center justify-center text-xs font-bold">
                ✓
              </span>
              <div className="flex-1">
                <div className="font-medium text-[#A4B5A0] line-through">
                  Design System Architecture Review
                </div>
                <div className="text-[10px] text-[#A4B5A0]">Deep Work • 90 min completed</div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[#182C20] border border-[#D7FF7F]/30 flex items-center gap-3">
              <span className="w-4 h-4 rounded-md border border-[#D7FF7F] flex items-center justify-center text-xs" />
              <div className="flex-1">
                <div className="font-medium text-white">Write Q4 Growth Review</div>
                <div className="text-[10px] text-[#D7FF7F]">Current Focus Block • 45 min left</div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[#14251B] flex items-center gap-3">
              <span className="w-4 h-4 rounded-md border border-[#A4B5A0]/40 flex items-center justify-center text-xs" />
              <div className="flex-1">
                <div className="font-medium text-white/80">Review weekly habit commitments</div>
                <div className="text-[10px] text-[#A4B5A0]">Evening Routine • 15 min</div>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-[#14251B] flex items-center justify-between text-xs text-[#A4B5A0]">
            <span>Today&apos;s Focus Depth</span>
            <span className="text-[#D7FF7F] font-mono font-medium">84% Optimal</span>
          </div>
        </div>
      ),
    },
    {
      id: "learning",
      icon: BookOpen,
      tag: "Pillar 03",
      title: "Learning & Growth",
      h3Name: "Pillar 03: Learning and study",
      headline: "Stay curious.",
      description:
        "Cultivate new skills, set study targets, and keep your intellectual and creative growth tangible, organized, and visible.",
      highlights: ["Skill Progression Roadmaps", "Daily Reading Continuity", "Core Concept Insights"],
      uiPreview: (
        <div data-ui="app-preview" className="bg-[#0D1711] rounded-2xl p-6 border border-[#A4B5A0]/25 flex flex-col gap-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#A4B5A0]/15">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#14251B] flex items-center justify-center text-[#D7FF7F]">
                <BookOpen className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm font-medium text-white">Creative Coding &amp; Systems</div>
                <div className="text-xs text-[#A4B5A0]">Continuous Study Roadmap</div>
              </div>
            </div>
            <span className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-[#D7FF7F]/15 text-[#D7FF7F] border border-[#D7FF7F]/30">
              Level 4
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-[#14251B]">
            <div className="flex justify-between text-xs mb-2">
              <span className="text-white">Current Read: &ldquo;The Creative Act&rdquo;</span>
              <span className="text-[#D7FF7F] font-mono">Page 184 of 240</span>
            </div>
            <div className="w-full h-2 rounded-full bg-[#0D1711] overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#A4B5A0] to-[#D7FF7F] w-[76%]" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-xl bg-[#14251B]">
              <div className="text-[11px] text-[#A4B5A0] mb-1">Knowledge Notes</div>
              <div className="text-sm font-medium text-white">42 Concepts</div>
            </div>
            <div className="p-3 rounded-xl bg-[#14251B]">
              <div className="text-[11px] text-[#A4B5A0] mb-1">Weekly Reading</div>
              <div className="text-sm font-medium text-[#D7FF7F]">4.2 hrs logged</div>
            </div>
          </div>

          <div className="p-2.5 rounded-lg bg-[#14251B] text-xs text-[#C2D1BE] italic border-l-2 border-[#D7FF7F]">
            &ldquo;Small daily curiosities accumulate into lifelong mastery.&rdquo;
          </div>
        </div>
      ),
    },
    {
      id: "spirituality",
      icon: Heart,
      tag: "Pillar 04",
      title: "Spirituality & Reflection",
      h3Name: "Pillar 04: Spirituality and reflection",
      headline: "Grow with purpose.",
      description:
        "Create space for spiritual rituals, gratitude, worship or sacred readings, and grounded reflection.",
      highlights: ["Mindful Pauses & Stillness", "Spiritual Routine Tracking", "Daily Gratitude Archive"],
      uiPreview: (
        <div data-ui="app-preview" className="bg-[#0D1711] rounded-2xl p-6 border border-[#A4B5A0]/25 flex flex-col gap-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#A4B5A0]/15">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#14251B] flex items-center justify-center text-[#D7FF7F]">
                <Heart className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm font-medium text-white">Evening Reflection</div>
                <div className="text-xs text-[#A4B5A0]">Daily Routine • Day 21</div>
              </div>
            </div>
            <span className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-[#D7FF7F]/15 text-[#D7FF7F] border border-[#D7FF7F]/30">
              Mindful
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-[#14251B]">
            <div className="text-xs text-[#A4B5A0] font-mono mb-1 uppercase">Today&apos;s Contemplative Prompt</div>
            <div className="text-sm text-white/90 font-light leading-relaxed">
              &ldquo;What is one moment today where you felt presence and gratitude?&rdquo;
            </div>
          </div>

          <div className="space-y-2 text-xs">
            <div className="p-2.5 rounded-lg bg-[#14251B] flex items-center justify-between text-white/90">
              <span>Morning Stillness and Prayer</span>
              <span className="text-[#D7FF7F]">Completed</span>
            </div>
            <div className="p-2.5 rounded-lg bg-[#14251B] flex items-center justify-between text-white/90">
              <span>Mid-day Mindful Pause</span>
              <span className="text-[#D7FF7F]">Completed</span>
            </div>
            <div className="p-2.5 rounded-lg bg-[#182C20] border border-[#D7FF7F]/30 flex items-center justify-between text-white">
              <span>Evening Gratitude Journaling</span>
              <span className="text-[#A4B5A0]">Tonight at 9:30 PM</span>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section
      id="pillars"
      data-moment="pinned-chapters"
      style={{ "--h": "2" } as React.CSSProperties}
      className="relative min-h-[900px] w-full flex flex-col justify-center bg-[#0D1711] text-white py-24 border-t border-[#A4B5A0]/15"
      aria-label="Four Pillars"
    >
      <div className="wrap w-full">
        {/* Section Header */}
        <div className="max-w-2xl mb-10 text-left">
          <span className="text-xs font-mono uppercase tracking-widest text-[#D7FF7F] mb-3 block">
            The Complete Companion
          </span>
          <h2 className="text-white mb-4">
            Four growth pillars for personal transformation.
          </h2>
          <p className="text-base text-[#C2D1BE] font-light">
            Four parts of your life. One place to grow.
          </p>
        </div>

        {/* Pillar Tabs Bar on grid lines */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8" role="tablist">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isActive = activePillar === idx;
            return (
              <button
                key={pillar.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActivePillar(idx)}
                className={`p-4 rounded-xl text-left transition-all duration-200 border cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D7FF7F] ${
                  isActive
                    ? "bg-[#14251B] border-[#D7FF7F] text-white shadow-[0_0_15px_rgba(215,255,127,0.2)]"
                    : "bg-[#0D1711] border-[#A4B5A0]/20 text-[#A4B5A0] hover:bg-[#14251B]/50 hover:text-white"
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Icon className={`w-4 h-4 ${isActive ? "text-[#D7FF7F]" : "text-[#A4B5A0]"}`} />
                  <span className="text-[11px] font-mono uppercase tracking-wider">{pillar.tag}</span>
                </div>
                <div className="text-sm font-medium">{pillar.title}</div>
              </button>
            );
          })}
        </div>

        {/* Selected Pillar Content Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-[#14251B] rounded-3xl p-8 border border-[#A4B5A0]/25">
          {/* Details */}
          <div className="lg:col-span-6 flex flex-col justify-start">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#D7FF7F] uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{pillars[activePillar].title}</span>
            </div>
            <h3 className="text-white mb-4">
              {pillars[activePillar].h3Name}
            </h3>
            <p className="text-base text-[#C2D1BE] leading-relaxed mb-6">
              {pillars[activePillar].description}
            </p>

            <div className="space-y-3">
              {pillars[activePillar].highlights.map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-white/90">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D7FF7F]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Simulated App UI Preview */}
          <div className="lg:col-span-6">
            {pillars[activePillar].uiPreview}
          </div>
        </div>
      </div>
    </section>
  );
}
