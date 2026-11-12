import React from "react";
import { FEATURED_PROJECTS, ADDITIONAL_CONTRIBUTIONS, PERSONAL_INFO } from "@/data/portfolioData";
import VideoPreview from "./VideoPreview";

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-20 border-t border-zinc-800/80 relative scroll-mt-24">
      {/* Background Section Glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-emerald-500/5 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-cyan-500/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-emerald-400 mb-2">
              <span className="w-2 h-2 rounded bg-emerald-400" />
              Production Case Studies
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Engineering Projects
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md">
            Architectural breakdowns detailing client-server networking, memory optimization, live-ops integrations, and gameplay state machines.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="space-y-12">
          {FEATURED_PROJECTS.map((project, index) => {
            const hasVideo = Boolean(project.videoSrc);

            return (
              <article
                key={project.id}
                className="relative rounded-2xl bg-zinc-900/50 border border-zinc-800/90 overflow-hidden hover:border-zinc-700/80 transition-all duration-300 shadow-xl shadow-black/40"
              >
                {/* Top Header Bar */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800/80 bg-zinc-950/60 flex-wrap gap-3">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-zinc-500">
                      {`0${index + 1} //`}
                    </span>
                    <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-zinc-800/80 text-emerald-300 border border-emerald-500/20 font-medium">
                      {project.category}
                    </span>
                    {hasVideo ? (
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        GAMEPLAY VIDEO
                      </span>
                    ) : (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800/60 text-zinc-400 border border-zinc-700/40">
                        SYSTEM ARCHITECTURE
                      </span>
                    )}
                  </div>

                  {/* External links */}
                  <div className="flex items-center gap-2 flex-wrap">
                    {project.fullVideoUrl && (
                      <a
                        href={project.fullVideoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-zinc-900/90 hover:bg-zinc-800 text-zinc-300 hover:text-cyan-300 border border-zinc-700 hover:border-cyan-400 text-xs font-mono transition-colors shadow-sm"
                        title="Watch Full Gameplay Recording on Google Drive"
                      >
                        <svg className="w-3.5 h-3.5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Full Gameplay (Drive)</span>
                        <svg className="w-3 h-3 text-zinc-400 ml-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}

                    {project.playStoreUrl && (
                      <a
                        href={project.playStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-mono transition-colors"
                      >
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                          <path d="M3.609 1.814L13.792 12 3.61 22.186a2.44 2.44 0 0 1-.61-.951V2.765c.123-.377.34-.707.609-.951zm11.235 11.238L5.753 2.144c.483-.243 1.077-.243 1.56 0l11.085 6.4a2.213 2.213 0 0 1 0 3.836l-3.554 2.052zm0 1.896l3.554 2.052a2.213 2.213 0 0 1 0 3.836l-11.085 6.4c-.483.243-1.077.243-1.56 0l9.091-10.908z" />
                        </svg>
                        <span>Google Play Live</span>
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 text-xs font-mono transition-colors"
                      >
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                        <span>GitHub</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Content Layout */}
                {hasVideo && project.videoSrc ? (
                  // Two-Column Layout for Video-Backed Projects (01 - 04)
                  <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left Column: Engineering Breakdown */}
                    <div className="lg:col-span-7 space-y-6">
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                          {project.title}
                        </h3>
                        <p className="text-sm font-mono text-cyan-400">
                          {project.subtitle}
                        </p>
                      </div>

                      {/* Metrics Pills */}
                      {project.metrics && project.metrics.length > 0 && (
                        <div className="flex flex-wrap gap-2.5">
                          {project.metrics.map((m, mIdx) => (
                            <div
                              key={mIdx}
                              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-950/80 border border-zinc-800 font-mono text-xs"
                            >
                              <span className="text-zinc-400">{m.label}:</span>
                              <span className="text-emerald-400 font-bold">{m.value}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Problem / Architecture / Impact Vertical Stack */}
                      <div className="space-y-4 pt-2">
                        {/* Problem */}
                        <div className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-800/80">
                          <div className="flex items-center gap-2 text-xs font-mono uppercase text-amber-400 mb-1.5 font-semibold">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                            The Problem
                          </div>
                          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                            {project.problem}
                          </p>
                        </div>

                        {/* Architecture */}
                        <div className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-800/80">
                          <div className="flex items-center gap-2 text-xs font-mono uppercase text-cyan-400 mb-1.5 font-semibold">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                            System Architecture &amp; Implementation
                          </div>
                          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                            {project.architecture}
                          </p>
                        </div>

                        {/* Impact */}
                        <div className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-800/80">
                          <div className="flex items-center gap-2 text-xs font-mono uppercase text-emerald-400 mb-1.5 font-semibold">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                            Engineering Impact &amp; Results
                          </div>
                          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                            {project.impact}
                          </p>
                        </div>
                      </div>

                      {/* Tech Badges */}
                      <div className="pt-2">
                        <div className="text-[11px] font-mono uppercase text-zinc-400 tracking-wider mb-2">
                          Tech Stack:
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {project.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="text-xs font-mono px-2.5 py-1 rounded-md bg-zinc-800/60 text-zinc-300 border border-zinc-700/50 hover:border-zinc-500 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Video Preview Slot */}
                    <div className="lg:col-span-5 space-y-3">
                      <div className="text-[11px] font-mono uppercase text-zinc-400 tracking-wider flex items-center justify-between">
                        <span>Gameplay Footage Preview</span>
                        <span className="text-emerald-400 text-[10px]">1080p Web-Ready</span>
                      </div>
                      <VideoPreview
                        src={project.videoSrc}
                        title={project.title}
                        badge={project.category}
                      />
                      <div className="flex items-center justify-between p-3 rounded-lg bg-zinc-950/40 border border-zinc-800/60 text-[11px] text-zinc-400 font-mono gap-2 flex-wrap">
                        <span className="text-zinc-500">FORMAT: MP4 H.264 • AutoPlay</span>
                        {project.fullVideoUrl && (
                          <a
                            href={project.fullVideoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-900/90 hover:bg-zinc-800 text-zinc-300 hover:text-cyan-300 border border-zinc-700 hover:border-cyan-400 text-[11px] font-mono transition-colors shadow-sm"
                            title="Watch Full Gameplay Recording on Google Drive"
                          >
                            <span>Full Gameplay (Drive)</span>
                            <svg className="w-3 h-3 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  // Full-Width Balanced Grid Layout for Architectural Case Studies (05 - 07)
                  <div className="p-6 sm:p-8 space-y-6">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                          {project.title}
                        </h3>
                        <p className="text-sm font-mono text-cyan-400">
                          {project.subtitle}
                        </p>
                      </div>

                      {/* Metrics Pills */}
                      {project.metrics && project.metrics.length > 0 && (
                        <div className="flex flex-wrap gap-2.5 self-start md:self-auto">
                          {project.metrics.map((m, mIdx) => (
                            <div
                              key={mIdx}
                              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-950/80 border border-zinc-800 font-mono text-xs"
                            >
                              <span className="text-zinc-400">{m.label}:</span>
                              <span className="text-emerald-400 font-bold">{m.value}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* 3-Column Responsive Grid: Problem | Architecture | Impact */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                      {/* Problem Card */}
                      <div className="p-5 rounded-xl bg-zinc-950/70 border border-zinc-800/80 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-2 text-xs font-mono uppercase text-amber-400 mb-2 font-semibold">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                            The Problem
                          </div>
                          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                            {project.problem}
                          </p>
                        </div>
                        <div className="mt-4 pt-3 border-t border-zinc-800/50 text-[10px] font-mono text-zinc-500">
                          CORE BOTTLENECK
                        </div>
                      </div>

                      {/* Architecture Card */}
                      <div className="p-5 rounded-xl bg-zinc-950/70 border border-zinc-800/80 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-2 text-xs font-mono uppercase text-cyan-400 mb-2 font-semibold">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                            System Architecture
                          </div>
                          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                            {project.architecture}
                          </p>
                        </div>
                        <div className="mt-4 pt-3 border-t border-zinc-800/50 text-[10px] font-mono text-zinc-500">
                          ENGINEERING STACK
                        </div>
                      </div>

                      {/* Impact Card */}
                      <div className="p-5 rounded-xl bg-zinc-950/70 border border-zinc-800/80 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-2 text-xs font-mono uppercase text-emerald-400 mb-2 font-semibold">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                            Impact &amp; Results
                          </div>
                          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                            {project.impact}
                          </p>
                        </div>
                        <div className="mt-4 pt-3 border-t border-zinc-800/50 text-[10px] font-mono text-zinc-500">
                          PRODUCTION VALIDATED
                        </div>
                      </div>
                    </div>

                    {/* Tech Stack Pills spanning full width */}
                    <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-zinc-800/60">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-[11px] font-mono uppercase text-zinc-400 tracking-wider mr-1">
                          Tech Stack:
                        </span>
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs font-mono px-2.5 py-1 rounded-md bg-zinc-800/60 text-zinc-300 border border-zinc-700/50 hover:border-zinc-500 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <span className="text-[10px] font-mono text-zinc-500 self-start sm:self-auto">
                        SYSTEM ARCHITECTURE SHOWCASE
                      </span>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>

        {/* Additional Contributions Strip */}
        <div className="mt-16 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-zinc-800/80">
            <div>
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">
                Cross-Project Experience
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Additional Game Production Contributions
              </h3>
            </div>
            <a
              href={PERSONAL_INFO.gameplayDriveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 hover:text-white border border-zinc-700 text-xs font-mono transition-colors self-start sm:self-auto"
            >
              <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>View Gameplay Drive Folder</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {ADDITIONAL_CONTRIBUTIONS.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-zinc-950/70 border border-zinc-800/80 hover:border-zinc-700 transition-colors"
              >
                <div className="text-sm font-bold text-white mb-1">
                  {item.title}
                </div>
                <div className="text-xs font-mono text-emerald-400 mb-2">
                  {item.domain}
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
