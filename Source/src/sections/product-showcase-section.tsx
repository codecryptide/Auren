"use client";

import { Flame, Calendar, TrendingUp, Clock, Zap } from "lucide-react";

export function ProductShowcaseSection() {
  return (
    <section
      id="showcase"
      className="relative min-h-[900px] w-full flex flex-col justify-center bg-[#14251B] text-white py-24 border-t border-[#A4B5A0]/15"
      aria-label="Product Showcase"
    >
      <div className="wrap w-full">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 text-left">
          <span className="text-xs font-mono uppercase tracking-widest text-[#D7FF7F] mb-3 block">
            Companion View
          </span>
          <h2 className="text-white mb-4">
            Your progress, in perspective.
          </h2>
          <p className="text-base text-[#C2D1BE] font-light">
            See your routines, goals, and progress come together in one personal space.
          </p>
        </div>

        {/* Dashboard Frame (TasteSkill app-frame style) */}
        <div
          data-ui="dashboard-mockup"
          className="w-full rounded-3xl bg-[#0D1711] border border-[#A4B5A0]/25 overflow-hidden"
        >
          {/* Top Window Bar */}
          <div className="flex items-center justify-between px-6 py-3 border-b border-[#A4B5A0]/15 bg-[#09100C]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#182C20] border border-[#A4B5A0]/40" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#182C20] border border-[#A4B5A0]/40" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#182C20] border border-[#A4B5A0]/40" />
              <span className="ml-3 text-xs font-mono text-[#A4B5A0]">auren.app/overview</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#D7FF7F]">
              <span className="w-2 h-2 rounded-full bg-[#D7FF7F]" />
              <span>LIVE RHYTHM</span>
            </div>
          </div>

          {/* Dashboard Body */}
          <div className="p-6 sm:p-8">
            {/* Header row inside app */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-[#A4B5A0]/15">
              <div>
                <div className="text-xl font-medium text-white mb-1">
                  Good morning, Alex.
                </div>
                <div className="text-xs text-[#A4B5A0]">
                  Wednesday, November 8 • 4 of 6 daily intentions fulfilled
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="px-3.5 py-1.5 rounded-xl bg-[#14251B] border border-[#A4B5A0]/20 flex items-center gap-2">
                  <Flame className="w-4 h-4 text-[#D7FF7F]" />
                  <span className="text-xs font-medium text-white">21 Day Streak</span>
                </div>
                <div className="px-3.5 py-1.5 rounded-xl bg-[#14251B] border border-[#A4B5A0]/20 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-[#D7FF7F]" />
                  <span className="text-xs font-medium text-white">92% Rhythm</span>
                </div>
              </div>
            </div>

            {/* Pillar Meters Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="p-3.5 rounded-xl bg-[#14251B] border border-[#A4B5A0]/15">
                <div className="text-[11px] font-mono text-[#A4B5A0] uppercase mb-1">Fitness</div>
                <div className="text-base font-medium text-white mb-2">45m Mobility</div>
                <div className="w-full bg-[#0D1711] h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#D7FF7F] h-full w-[100%]" />
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#14251B] border border-[#A4B5A0]/15">
                <div className="text-[11px] font-mono text-[#A4B5A0] uppercase mb-1">Productivity</div>
                <div className="text-base font-medium text-white mb-2">3 Deep Blocks</div>
                <div className="w-full bg-[#0D1711] h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#D7FF7F] h-full w-[75%]" />
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#14251B] border border-[#A4B5A0]/15">
                <div className="text-[11px] font-mono text-[#A4B5A0] uppercase mb-1">Learning</div>
                <div className="text-base font-medium text-white mb-2">25m Reading</div>
                <div className="w-full bg-[#0D1711] h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#D7FF7F] h-full w-[80%]" />
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#14251B] border border-[#A4B5A0]/15">
                <div className="text-[11px] font-mono text-[#A4B5A0] uppercase mb-1">Spirituality</div>
                <div className="text-base font-medium text-white mb-2">Evening Pause</div>
                <div className="w-full bg-[#0D1711] h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#A4B5A0] h-full w-[50%]" />
                </div>
              </div>
            </div>

            {/* Split Details: Daily Flow & Weekly Rhythm Map */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              {/* Left Column: Today's Timeline */}
              <div className="md:col-span-7 p-5 rounded-2xl bg-[#14251B]">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#D7FF7F]" />
                    Daily flow overview
                  </h3>
                  <span className="text-xs text-[#D7FF7F]">4 completed</span>
                </div>

                <div className="space-y-2.5 text-xs">
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#0D1711]">
                    <div className="flex items-center gap-3">
                      <span className="w-3.5 h-3.5 rounded-full bg-[#D7FF7F] text-[#0D1711] flex items-center justify-center text-[9px] font-bold">
                        ✓
                      </span>
                      <span className="text-white">Morning Breath and 45m Core Mobility</span>
                    </div>
                    <span className="text-[#A4B5A0] font-mono">07:00 AM</span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#0D1711]">
                    <div className="flex items-center gap-3">
                      <span className="w-3.5 h-3.5 rounded-full bg-[#D7FF7F] text-[#0D1711] flex items-center justify-center text-[9px] font-bold">
                        ✓
                      </span>
                      <span className="text-white">Architecture Plan &amp; Core Implementation</span>
                    </div>
                    <span className="text-[#A4B5A0] font-mono">09:30 AM</span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#0D1711]">
                    <div className="flex items-center gap-3">
                      <span className="w-3.5 h-3.5 rounded-full bg-[#D7FF7F] text-[#0D1711] flex items-center justify-center text-[9px] font-bold">
                        ✓
                      </span>
                      <span className="text-white">Read Chapter 8 &amp; Log Learning Summary</span>
                    </div>
                    <span className="text-[#A4B5A0] font-mono">02:15 PM</span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#182C20] border border-[#D7FF7F]/30">
                    <div className="flex items-center gap-3">
                      <span className="w-3.5 h-3.5 rounded-full border border-[#D7FF7F]" />
                      <span className="text-white font-medium">Evening Reflection &amp; Digital Sunset</span>
                    </div>
                    <span className="text-[#D7FF7F] font-mono">09:30 PM</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Weekly Consistency Matrix */}
              <div className="md:col-span-5 p-5 rounded-2xl bg-[#14251B] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-white flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#D7FF7F]" />
                      Weekly consistency map
                    </h3>
                  </div>

                  <div className="grid grid-cols-7 gap-1.5 text-center mb-4">
                    {["M", "T", "W", "T", "F", "S", "S"].map((day, i) => (
                      <div key={i} className="text-[10px] font-mono text-[#A4B5A0]">
                        {day}
                      </div>
                    ))}
                    {[95, 88, 100, 92, 90, 85, 96].map((score, i) => (
                      <div
                        key={i}
                        className={`h-10 rounded-lg flex items-center justify-center text-[10px] font-mono ${
                          i === 2
                            ? "bg-[#D7FF7F] text-[#0D1711] font-bold"
                            : "bg-[#0D1711] text-[#A4B5A0] border border-[#A4B5A0]/15"
                        }`}
                      >
                        {score}%
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#0D1711]">
                  <div className="flex items-center gap-2 text-xs text-[#D7FF7F] mb-1">
                    <Zap className="w-3.5 h-3.5" />
                    <span>Weekly Correlation</span>
                  </div>
                  <p className="text-[11px] text-[#A4B5A0] leading-relaxed">
                    Consistent mornings correlate with 40% higher focus depth across learning tasks.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Honest Simulation Disclaimer Footnote */}
          <div className="px-6 py-2.5 bg-[#09100C] border-t border-[#A4B5A0]/15 text-left">
            <p className="text-[11px] font-mono text-[#A4B5A0]">
              * Simulated interface preview of the upcoming AUREN companion experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
