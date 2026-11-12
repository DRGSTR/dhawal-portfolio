"use client";

import React, { useState } from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard?.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer id="contact" className="border-t border-zinc-800/80 bg-zinc-950 pt-20 pb-12 relative overflow-hidden scroll-mt-24">
      {/* Decorative Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-emerald-500/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-zinc-800/80">
          {/* Column 1: Call to Action & Status */}
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/90 border border-emerald-500/30 text-emerald-300 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available Immediately • Full-Time / Contract</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Let&apos;s Build Exceptional Games Together.
            </h2>

            <p className="text-sm text-zinc-300 leading-relaxed max-w-lg">
              Looking for a Unity Developer with proven experience in server-authoritative multiplayer netcode, asset optimization, and mobile live-ops? I&apos;m ready to hit the ground running.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold text-xs transition-colors shadow-md shadow-emerald-500/20"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Send Direct Email</span>
              </a>

              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700 font-mono text-xs transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-emerald-400 font-semibold">Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <span>Copy Email Address</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Column 2: Direct Contact Coordinates & Channels */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Email Card */}
            <div className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 flex flex-col justify-between">
              <div className="text-xs font-mono uppercase text-zinc-400 mb-2 flex items-center justify-between">
                <span>Direct Email</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
              </div>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-sm font-mono text-white hover:text-emerald-400 transition-colors break-all"
              >
                {PERSONAL_INFO.email}
              </a>
              <div className="mt-3 pt-3 border-t border-zinc-800/60">
                <button
                  type="button"
                  onClick={copyEmail}
                  className="text-[11px] font-mono text-zinc-400 hover:text-white inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>{copied ? "✓ Copied" : "Click to copy address"}</span>
                </button>
              </div>
            </div>

            {/* Phone Card */}
            <div className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 flex flex-col justify-between">
              <div className="text-xs font-mono uppercase text-zinc-400 mb-2 flex items-center justify-between">
                <span>Phone / WhatsApp</span>
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
              </div>
              <a
                href={`tel:${PERSONAL_INFO.phone.replace(/[^0-9+]/g, "")}`}
                className="text-sm font-mono text-white hover:text-cyan-400 transition-colors"
              >
                {PERSONAL_INFO.phone}
              </a>
              <div className="mt-3 pt-3 border-t border-zinc-800/60 text-[11px] font-mono text-zinc-500">
                Ahmedabad, Gujarat, India (IST)
              </div>
            </div>

            {/* GitHub Card */}
            <div className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 flex flex-col justify-between">
              <div className="text-xs font-mono uppercase text-zinc-400 mb-2">
                Code Repository
              </div>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-mono text-white hover:text-emerald-400 transition-colors inline-flex items-center gap-2"
              >
                <span>github.com/DRGSTR</span>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <div className="mt-3 pt-3 border-t border-zinc-800/60 text-[11px] font-mono text-zinc-500">
                Prototypes, tools & sample repos
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 flex flex-col justify-between">
              <div className="text-xs font-mono uppercase text-zinc-400 mb-2">
                Professional Network
              </div>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-mono text-white hover:text-cyan-400 transition-colors inline-flex items-center gap-2"
              >
                <span>in/dhawal-jhaveri</span>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <div className="mt-3 pt-3 border-t border-zinc-800/60 text-[11px] font-mono text-zinc-500">
                Connect & recommendations
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div>
            © 2026 {PERSONAL_INFO.name}. Built for high performance &amp; zero bloat.
          </div>
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="Dhawal_Jhaveri_Resume.pdf"
              className="hover:text-zinc-300 transition-colors"
            >
              Resume PDF
            </a>
            <span>•</span>
            <a
              href={PERSONAL_INFO.itchio}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-300 transition-colors"
            >
              Itch.io Builds
            </a>
            <span>•</span>
            <a
              href="#projects"
              className="hover:text-zinc-300 transition-colors"
            >
              Back to Top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
