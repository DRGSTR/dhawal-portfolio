import React from "react";
import { SKILL_CATEGORIES } from "@/data/portfolioData";

export default function SkillsMatrix() {
  return (
    <section id="skills" className="py-20 border-t border-zinc-800/80 relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-emerald-400 mb-2">
              <span className="w-2 h-2 rounded bg-emerald-400" />
              Engineering Competencies
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Technical Skills Matrix
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md">
            Categorized technical stack spanning low-level gameplay systems, real-time multiplayer protocols, mobile optimization, and AI-accelerated workflows.
          </p>
        </div>

        {/* Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl bg-zinc-900/40 border border-zinc-800/80 p-6 flex flex-col justify-between hover:border-zinc-700/80 transition-all hover:bg-zinc-900/60"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-zinc-800/80">
                  <h3 className="text-base font-bold text-white flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400/80" />
                    {category.title}
                  </h3>
                  <span className="text-[11px] font-mono text-zinc-500">
                    {category.skills.length} skills
                  </span>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-mono px-3 py-1.5 rounded-lg bg-zinc-950/80 text-zinc-300 border border-zinc-800/90 hover:border-emerald-500/40 hover:text-emerald-300 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom decorative bar */}
              <div className="mt-6 pt-3 border-t border-zinc-800/40 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span>STATUS: VERIFIED</span>
                <span className="text-emerald-500/70">PROD-TESTED</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

