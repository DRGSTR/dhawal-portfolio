import React from "react";
import { EDUCATION_AND_CERTIFICATIONS } from "@/data/portfolioData";

export default function EducationCertifications() {
  return (
    <section id="education" className="py-20 border-t border-zinc-800/80 relative scroll-mt-24">
      {/* Background Section Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-emerald-500/5 blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-cyan-500/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-emerald-400 mb-2">
              <span className="w-2 h-2 rounded bg-emerald-400" />
              Academic &amp; Professional Credentials
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Education &amp; Certifications
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md">
            Formal computer science foundations combined with intensive, industry-aligned game development specialization in Unity &amp; C#.
          </p>
        </div>

        {/* Responsive 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {EDUCATION_AND_CERTIFICATIONS.map((item, index) => {
            const isCert = item.type === "certification";

            return (
              <div
                key={item.id}
                className="relative rounded-2xl bg-zinc-900/40 border border-zinc-800/90 p-6 sm:p-8 hover:border-zinc-700/80 transition-all hover:bg-zinc-900/60 flex flex-col justify-between shadow-xl shadow-black/30 group"
              >
                {/* Tactical HUD Corner Accents */}
                <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t border-l border-zinc-700/60 pointer-events-none" />
                <div className="absolute top-2 right-2 w-2.5 h-2.5 border-t border-r border-zinc-700/60 pointer-events-none" />
                <div className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b border-l border-zinc-700/60 pointer-events-none" />
                <div className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b border-r border-zinc-700/60 pointer-events-none" />

                <div>
                  {/* Card Header Top Bar */}
                  <div className="flex items-center justify-between gap-2 mb-4 pb-4 border-b border-zinc-800/80 flex-wrap">
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <span className="font-mono text-xs text-zinc-500">
                        {`0${index + 1} //`}
                      </span>

                      {/* Primary Badge */}
                      {isCert ? (
                        <span className="inline-flex items-center gap-1.5 text-[10px] font-mono px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-medium shadow-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          {item.primaryBadge}
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 text-[10px] font-mono px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 font-medium shadow-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                          {item.primaryBadge}
                        </span>
                      )}

                      {/* Secondary Monospace Badge */}
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800/80 text-zinc-300 border border-zinc-700/60">
                        {item.secondaryBadge}
                      </span>
                    </div>

                    {/* Year / Period Badge */}
                    <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-zinc-950/80 text-zinc-400 border border-zinc-800">
                      {item.yearOrPeriod}
                    </span>
                  </div>

                  {/* Title & Institution */}
                  <div className="mb-5">
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm font-semibold text-cyan-400 font-mono mt-1.5">
                      <svg className="w-4 h-4 text-zinc-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      <span>{item.institution}</span>
                    </div>
                  </div>

                  {/* Highlights Bullet List */}
                  <ul className="space-y-3 mb-6">
                    {item.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                        <span className={`mt-1 flex-shrink-0 text-sm ${isCert ? "text-emerald-400" : "text-cyan-400"}`}>
                          ▹
                        </span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Skills / Focus Tags */}
                <div className="pt-4 border-t border-zinc-800/60">
                  <div className="text-[10px] font-mono uppercase text-zinc-500 tracking-wider mb-2">
                    {isCert ? "Core Disciplines & Toolsets:" : "Foundational Computer Science Domains:"}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-mono px-2.5 py-1 rounded-md bg-zinc-950/80 text-zinc-300 border border-zinc-800/90 hover:border-zinc-700 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
