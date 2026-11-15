import React from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Hero() {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      {/* Decorative background grid and radial glows */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a15_1px,transparent_1px),linear-gradient(to_bottom,#27272a15_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[320px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-20 right-1/4 w-[400px] h-[250px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start max-w-4xl">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/90 border border-emerald-500/30 text-emerald-300 text-xs font-mono mb-6 backdrop-blur-sm shadow-sm hover:border-emerald-500/50 transition-colors">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>{PERSONAL_INFO.statusBadge}</span>
          </div>

          {/* Name & Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-4">
            <span className="bg-gradient-to-r from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
              {PERSONAL_INFO.name}
            </span>
          </h1>

          <div className="flex items-center gap-3 flex-wrap mb-6">
            <span className="text-lg sm:text-2xl font-mono text-cyan-400 font-semibold tracking-wide">
              {PERSONAL_INFO.roleTitle}
            </span>
          </div>

          {/* Impact-Driven Summary */}
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-3xl mb-8">
            Unity Developer with <span className="text-white font-medium">2 years of professional experience</span> building and shipping 2D, mobile, WebGL, and real-time multiplayer games in C#. Specialized in server-authoritative client networking (Socket.IO, WebSockets), client-side state recovery, REST API architectures, and performance profiling that drove{" "}
            <span className="text-emerald-400 font-mono font-semibold">~80% faster load times</span> and slashed project build sizes from{" "}
            <span className="text-cyan-400 font-mono font-semibold">900+ MB → 100–170 MB</span> via remote Addressables.
          </p>

          {/* Primary CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto mb-14">
            <a
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold text-sm transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
              <span>View Projects</span>
            </a>

            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="Dhawal_Jhaveri_Unity_Developer_Resume.pdf"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-zinc-100 border border-zinc-700/80 hover:border-zinc-500 font-mono text-sm transition-all"
            >
              <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>Download Resume</span>
            </a>

            <div className="flex items-center gap-2 w-full sm:w-auto justify-start">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-zinc-900/70 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 hover:border-zinc-700 font-mono text-xs transition-colors"
                title="GitHub"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span>GitHub</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-zinc-900/70 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 hover:border-zinc-700 font-mono text-xs transition-colors"
                title="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Performance & Impact Metrics Grid */}
          <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 pt-4 border-t border-zinc-800/80">
            {PERSONAL_INFO.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="relative p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 transition-all group"
              >
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-emerald-400 tracking-tight mb-1 group-hover:text-emerald-300 transition-colors">
                  {metric.value}
                </div>
                <div className="text-xs font-semibold text-zinc-200 mb-1">
                  {metric.label}
                </div>
                <div className="text-[11px] text-zinc-500 leading-snug">
                  {metric.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

