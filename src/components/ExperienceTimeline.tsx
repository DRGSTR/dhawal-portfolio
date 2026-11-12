import React from "react";
import { EXPERIENCE_TIMELINE } from "@/data/portfolioData";

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-20 border-t border-zinc-800/80 relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-cyan-400 mb-2">
              <span className="w-2 h-2 rounded bg-cyan-400" />
              Career Track & Education
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Professional Experience
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md">
            Track record of shipping production games, architecting netcode, and driving high-impact optimizations across mobile and WebGL platforms.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-zinc-800/90 ml-3 sm:ml-6 md:ml-8 pl-6 sm:pl-10 space-y-12">
          {EXPERIENCE_TIMELINE.map((item) => {
            const isFullTime = item.type === "work";

            return (
              <div key={item.id} className="relative group">
                {/* Node marker on the spine */}
                <div
                  className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full border-2 transition-transform duration-200 group-hover:scale-125 ${
                    isFullTime
                      ? "bg-emerald-500 border-zinc-950 shadow-[0_0_12px_rgba(16,185,129,0.8)]"
                      : "bg-zinc-800 border-zinc-600 group-hover:border-cyan-400"
                  }`}
                />

                {/* Card Container */}
                <div className="rounded-2xl bg-zinc-900/40 border border-zinc-800/80 p-6 sm:p-8 hover:border-zinc-700/80 transition-all hover:bg-zinc-900/60">
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-4 border-b border-zinc-800/80">
                    <div>
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <h3 className="text-xl sm:text-2xl font-bold text-white">
                          {item.role}
                        </h3>
                        {isFullTime && (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                            FULL-TIME
                          </span>
                        )}
                        {item.type === "internship" && (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                            CONVERTED TO FULL-TIME
                          </span>
                        )}
                        {item.type === "education" && (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 border border-purple-500/30">
                            DEGREE
                          </span>
                        )}
                      </div>
                      <div className="text-sm font-semibold text-zinc-300 mt-1">
                        {item.company}
                        {item.location && (
                          <span className="text-xs text-zinc-500 font-mono ml-2">
                            • {item.location}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="text-xs font-mono px-3 py-1.5 rounded-lg bg-zinc-950/80 text-zinc-400 border border-zinc-800 self-start sm:self-auto">
                      {item.period}
                    </div>
                  </div>

                  {/* Highlights Bullet List */}
                  <ul className="space-y-2.5">
                    {item.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                        <span className="text-emerald-400 mt-1 flex-shrink-0">
                          ▹
                        </span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

