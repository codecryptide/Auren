"use client";

import { useState } from "react";
import { Flame, TrendingUp, Sparkles, Check, Clock, Calendar, Activity, CheckSquare, BookOpen, Heart } from "lucide-react";

export function DashboardPreview() {
  const [activeTab, setActiveTab] = useState<"overview" | "habits" | "rhythm">("overview");
  const [completedTasks, setCompletedTasks] = useState<Record<string, boolean>>({
    task1: true,
    task2: true,
    task3: true,
    task4: false,
  });

  const toggleTask = (id: string) => {
    setCompletedTasks((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const completedCount = Object.values(completedTasks).filter(Boolean).length;

  return (
    <section
      id="showcase"
      className="relative min-h-[900px] w-full flex flex-col justify-center bg-transparent text-white py-24 border-b border-white/[0.08]"
      aria-label="Dashboard Preview"
    >
      <div className="wrap w-full">
        {/* Section Header */}
        <div className="max-w-2xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#C8A8FF] uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Product Experience</span>
          </div>
          <h2 className="text-white mb-4">
            Your life, in one clear view.
          </h2>
          <p className="text-base text-[#C5C0D0] font-light">
            A simple overview of the habits, activities, and goals you are working toward.
          </p>
        </div>

        {/* Dashboard Mockup in Dark Card */}
        <div
          data-ui="app-dashboard"
          className="w-full rounded-3xl bg-[#111018] border border-white/[0.14] shadow-[0_25px_80px_-15px_rgba(0,0,0,0.8)] overflow-hidden"
        >
          {/* Mockup Header Window Bar */}
          <div className="flex items-center justify-between px-6 py-3.5 border-b border-white/[0.08] bg-[#0A0910]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#1B1728] border border-white/[0.15]" />
              <span className="w-3 h-3 rounded-full bg-[#1B1728] border border-white/[0.15]" />
              <span className="w-3 h-3 rounded-full bg-[#1B1728] border border-white/[0.15]" />
              <span className="ml-3 text-xs font-mono text-[#8E889B]">auren.app/dashboard</span>
            </div>

            {/* Interactive View Filter Tabs */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#15131D] border border-white/[0.08]">
              <button
                type="button"
                onClick={() => setActiveTab("overview")}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                  activeTab === "overview"
                    ? "bg-[#762BFF] text-white shadow-sm"
                    : "text-[#8E889B] hover:text-white"
                }`}
              >
                Overview
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("habits")}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                  activeTab === "habits"
                    ? "bg-[#762BFF] text-white shadow-sm"
                    : "text-[#8E889B] hover:text-white"
                }`}
              >
                Interactive Flow
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("rhythm")}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                  activeTab === "rhythm"
                    ? "bg-[#762BFF] text-white shadow-sm"
                    : "text-[#8E889B] hover:text-white"
                }`}
              >
                Weekly Matrix
              </button>
            </div>

            <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-[#C8A8FF]">
              <span className="w-2 h-2 rounded-full bg-[#8D45FF] animate-pulse" />
              <span>LIVE RHYTHM</span>
            </div>
          </div>

          {/* Dashboard Body */}
          <div className="p-6 sm:p-10">
            {/* Top row: Greeting + Streak Stats */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 mb-8 border-b border-white/[0.08]">
              <div>
                <div className="text-2xl font-bold text-white mb-1">
                  Good morning, Alex.
                </div>
                <div className="text-xs sm:text-sm text-[#C5C0D0]">
                  Wednesday, November 8 • {completedCount} of 4 daily intentions fulfilled
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="px-4 py-2 rounded-xl bg-[#15131D] border border-white/[0.1] flex items-center gap-2">
                  <Flame className="w-4 h-4 text-[#8D45FF]" />
                  <span className="text-xs font-medium text-white">21 Day Streak</span>
                </div>
                <div className="px-4 py-2 rounded-xl bg-[#15131D] border border-white/[0.1] flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-[#C8A8FF]" />
                  <span className="text-xs font-medium text-white">92% Rhythm</span>
                </div>
              </div>
            </div>

            {/* Category Chips & Daily Progress Meters */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="p-4 rounded-2xl bg-[#15131D] border border-white/[0.08] hover:border-[#8D45FF]/30 transition-colors">
                <div className="flex items-center gap-2 text-[11px] font-mono text-[#C8A8FF] uppercase mb-1">
                  <Activity className="w-3.5 h-3.5" />
                  <span>Wellness</span>
                </div>
                <div className="text-base font-semibold text-white mb-2">45m Mobility</div>
                <div className="w-full bg-[#08070D] h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#8D45FF] h-full w-[100%]" />
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#15131D] border border-white/[0.08] hover:border-[#8D45FF]/30 transition-colors">
                <div className="flex items-center gap-2 text-[11px] font-mono text-[#C8A8FF] uppercase mb-1">
                  <CheckSquare className="w-3.5 h-3.5" />
                  <span>Focus</span>
                </div>
                <div className="text-base font-semibold text-white mb-2">3 Deep Blocks</div>
                <div className="w-full bg-[#08070D] h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#762BFF] h-full w-[75%]" />
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#15131D] border border-white/[0.08] hover:border-[#8D45FF]/30 transition-colors">
                <div className="flex items-center gap-2 text-[11px] font-mono text-[#C8A8FF] uppercase mb-1">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Learning</span>
                </div>
                <div className="text-base font-semibold text-white mb-2">25m Reading</div>
                <div className="w-full bg-[#08070D] h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#8D45FF] h-full w-[80%]" />
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#15131D] border border-white/[0.08] hover:border-[#8D45FF]/30 transition-colors">
                <div className="flex items-center gap-2 text-[11px] font-mono text-[#C8A8FF] uppercase mb-1">
                  <Heart className="w-3.5 h-3.5" />
                  <span>Spirituality</span>
                </div>
                <div className="text-base font-semibold text-white mb-2">Evening Pause</div>
                <div className="w-full bg-[#08070D] h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#C8A8FF] h-full w-[50%]" />
                </div>
              </div>
            </div>

            {/* Tab Views */}
            {activeTab === "overview" && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start animate-in fade-in duration-300">
                {/* Left Column: Today's Tasks Timeline */}
                <div className="md:col-span-7 p-6 rounded-2xl bg-[#15131D] border border-white/[0.08]">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-white flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#C8A8FF]" />
                      Today&apos;s Focus &amp; Habits
                    </h3>
                    <span className="text-xs text-[#C8A8FF] font-mono">{completedCount} of 4 completed</span>
                  </div>

                  <div className="space-y-3 text-xs">
                    <button
                      type="button"
                      onClick={() => toggleTask("task1")}
                      className="w-full flex items-center justify-between p-3 rounded-xl bg-[#08070D] hover:bg-[#1B1728] transition-colors text-left"
                    >
                      <div className="flex items-center gap-3">
                        <span className={`w-4 h-4 rounded-md flex items-center justify-center text-[10px] font-bold ${
                          completedTasks.task1 ? "bg-[#762BFF] text-white" : "border border-white/30"
                        }`}>
                          {completedTasks.task1 ? "✓" : ""}
                        </span>
                        <span className={completedTasks.task1 ? "text-white" : "text-[#8E889B]"}>
                          Morning Breath &amp; Core Mobility
                        </span>
                      </div>
                      <span className="text-[#8E889B] font-mono">07:00 AM</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => toggleTask("task2")}
                      className="w-full flex items-center justify-between p-3 rounded-xl bg-[#08070D] hover:bg-[#1B1728] transition-colors text-left"
                    >
                      <div className="flex items-center gap-3">
                        <span className={`w-4 h-4 rounded-md flex items-center justify-center text-[10px] font-bold ${
                          completedTasks.task2 ? "bg-[#762BFF] text-white" : "border border-white/30"
                        }`}>
                          {completedTasks.task2 ? "✓" : ""}
                        </span>
                        <span className={completedTasks.task2 ? "text-white" : "text-[#8E889B]"}>
                          Deep Work: Architecture Plan Review
                        </span>
                      </div>
                      <span className="text-[#8E889B] font-mono">09:30 AM</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => toggleTask("task3")}
                      className="w-full flex items-center justify-between p-3 rounded-xl bg-[#08070D] hover:bg-[#1B1728] transition-colors text-left"
                    >
                      <div className="flex items-center gap-3">
                        <span className={`w-4 h-4 rounded-md flex items-center justify-center text-[10px] font-bold ${
                          completedTasks.task3 ? "bg-[#762BFF] text-white" : "border border-white/30"
                        }`}>
                          {completedTasks.task3 ? "✓" : ""}
                        </span>
                        <span className={completedTasks.task3 ? "text-white" : "text-[#8E889B]"}>
                          Study Chapter 8 &amp; Log Insight
                        </span>
                      </div>
                      <span className="text-[#8E889B] font-mono">02:15 PM</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => toggleTask("task4")}
                      className="w-full flex items-center justify-between p-3 rounded-xl bg-[#1B1728] border border-[#8D45FF]/40 hover:bg-[#201B32] transition-colors text-left"
                    >
                      <div className="flex items-center gap-3">
                        <span className={`w-4 h-4 rounded-md flex items-center justify-center text-[10px] font-bold ${
                          completedTasks.task4 ? "bg-[#762BFF] text-white" : "border border-[#8D45FF]"
                        }`}>
                          {completedTasks.task4 ? "✓" : ""}
                        </span>
                        <span className="text-white font-medium">Evening Reflection &amp; Digital Sunset</span>
                      </div>
                      <span className="text-[#C8A8FF] font-mono">09:30 PM</span>
                    </button>
                  </div>
                </div>

                {/* Right Column: Weekly Activity Chart */}
                <div className="md:col-span-5 p-6 rounded-2xl bg-[#15131D] border border-white/[0.08] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-white flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-[#C8A8FF]" />
                        Weekly consistency map
                      </h3>
                    </div>

                    <div className="grid grid-cols-7 gap-2 text-center mb-4">
                      {["M", "T", "W", "T", "F", "S", "S"].map((day, i) => (
                        <div key={i} className="text-[10px] font-mono text-[#8E889B]">
                          {day}
                        </div>
                      ))}
                      {[95, 88, 100, 92, 90, 85, 96].map((score, i) => (
                        <div
                          key={i}
                          className={`h-11 rounded-lg flex items-center justify-center text-[10px] font-mono ${
                            i === 2
                              ? "bg-[#762BFF] text-white font-bold shadow-[0_0_15px_rgba(118,43,255,0.5)]"
                              : "bg-[#08070D] text-[#C5C0D0] border border-white/[0.08]"
                          }`}
                        >
                          {score}%
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#08070D] border border-white/[0.06]">
                    <div className="flex items-center gap-2 text-xs text-[#C8A8FF] mb-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Weekly Insight</span>
                    </div>
                    <p className="text-[11px] text-[#C5C0D0] leading-relaxed">
                      Consistent morning movement correlates with 40% higher focus depth across learning goals.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "habits" && (
              <div className="p-6 rounded-2xl bg-[#15131D] border border-white/[0.08] animate-in fade-in duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-white mb-1">Interactive Habit Checklist</h3>
                    <p className="text-xs text-[#C5C0D0]">Click any task to simulate habit completion</p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-[#762BFF]/20 text-[#C8A8FF] border border-[#762BFF]/30">
                    Live Simulation
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { id: "task1", label: "Morning Breath & Core Mobility", category: "Wellness", time: "20 min" },
                    { id: "task2", label: "Deep Work: Architecture Plan Review", category: "Focus", time: "90 min" },
                    { id: "task3", label: "Study Chapter 8 & Log Insight", category: "Learning", time: "30 min" },
                    { id: "task4", label: "Evening Reflection & Digital Sunset", category: "Spirituality", time: "15 min" },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => toggleTask(item.id)}
                      className={`p-4 rounded-xl border text-left transition-all flex items-center justify-between ${
                        completedTasks[item.id]
                          ? "bg-[#1B1728] border-[#8D45FF]/50 text-white"
                          : "bg-[#08070D] border-white/[0.08] text-[#8E889B] hover:border-white/20"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`w-5 h-5 rounded-md flex items-center justify-center text-xs font-bold ${
                          completedTasks[item.id] ? "bg-[#762BFF] text-white" : "border border-white/20"
                        }`}>
                          {completedTasks[item.id] ? "✓" : ""}
                        </span>
                        <div>
                          <div className="text-sm font-medium">{item.label}</div>
                          <div className="text-[10px] text-[#8E889B]">{item.category} • {item.time}</div>
                        </div>
                      </div>
                      <span className="text-xs font-mono text-[#C8A8FF]">
                        {completedTasks[item.id] ? "Done" : "Pending"}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "rhythm" && (
              <div className="p-6 rounded-2xl bg-[#15131D] border border-white/[0.08] animate-in fade-in duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-white mb-1">Weekly Rhythm Matrix</h3>
                    <p className="text-xs text-[#C5C0D0]">30-day rolling consistency breakdown</p>
                  </div>
                  <span className="text-xs font-mono text-[#C8A8FF]">92% Overall Alignment</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="p-4 rounded-xl bg-[#08070D] border border-white/[0.08]">
                    <div className="text-xs text-[#8E889B] mb-1">Wellness Rhythm</div>
                    <div className="text-xl font-bold text-white mb-2">96%</div>
                    <div className="w-full bg-[#15131D] h-1.5 rounded-full overflow-hidden">
                      <div className="bg-[#8D45FF] h-full w-[96%]" />
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-[#08070D] border border-white/[0.08]">
                    <div className="text-xs text-[#8E889B] mb-1">Focus Flow</div>
                    <div className="text-xl font-bold text-white mb-2">91%</div>
                    <div className="w-full bg-[#15131D] h-1.5 rounded-full overflow-hidden">
                      <div className="bg-[#762BFF] h-full w-[91%]" />
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-[#08070D] border border-white/[0.08]">
                    <div className="text-xs text-[#8E889B] mb-1">Learning Cadence</div>
                    <div className="text-xl font-bold text-white mb-2">88%</div>
                    <div className="w-full bg-[#15131D] h-1.5 rounded-full overflow-hidden">
                      <div className="bg-[#8D45FF] h-full w-[88%]" />
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-[#08070D] border border-white/[0.08]">
                    <div className="text-xs text-[#8E889B] mb-1">Reflection Presence</div>
                    <div className="text-xl font-bold text-white mb-2">94%</div>
                    <div className="w-full bg-[#15131D] h-1.5 rounded-full overflow-hidden">
                      <div className="bg-[#C8A8FF] h-full w-[94%]" />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Honest Simulation Disclaimer Footnote */}
          <div className="px-6 py-3 bg-[#0A0910] border-t border-white/[0.08] text-left">
            <p className="text-[11px] font-mono text-[#8E889B]">
              * Simulated interface preview of the upcoming AUREN companion experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
