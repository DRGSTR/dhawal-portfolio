"use client";

import React, { useState, useRef } from "react";

interface VideoPreviewProps {
  src: string;
  title: string;
  badge?: string;
  className?: string;
}

export default function VideoPreview({
  src,
  title,
  badge,
  className = "",
}: VideoPreviewProps) {
  const [prevSrc, setPrevSrc] = useState(src);
  const [hasError, setHasError] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [copied, setCopied] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  if (prevSrc !== src) {
    setPrevSrc(src);
    setHasError(false);
    setIsLoaded(false);
  }

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  const handleCopyPath = () => {
    const fullPath = `public${src}`;
    navigator.clipboard?.writeText(fullPath);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full aspect-video rounded-xl overflow-hidden bg-zinc-950/90 border border-zinc-800/80 group flex items-center justify-center shadow-lg shadow-black/50 ${className}`}
    >
      {/* Background Grid Pattern & Subtle Pillarbox Vignette for Portrait Video Framing */}
      <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/70 via-transparent to-zinc-950/70 pointer-events-none z-0" />

      {/* Subtle Inner Border Frame */}
      <div className="absolute inset-0 border border-zinc-700/20 rounded-xl pointer-events-none z-20" />

      {/* Video Element: object-contain preserves both 16:9 landscape & 9:16 mobile portrait framing cleanly */}
      {!hasError && (
        <video
          ref={videoRef}
          src={src}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          preload="metadata"
          onLoadedData={() => {
            setIsLoaded(true);
            setHasError(false);
          }}
          onError={() => {
            setHasError(true);
            setIsLoaded(false);
          }}
          className={`w-full h-full object-contain relative z-10 transition-opacity duration-300 drop-shadow-md ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
      )}

      {/* Video Loaded Controls Overlay */}
      {!hasError && isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/85 via-transparent to-zinc-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-4 pointer-events-none z-30">
          <div className="flex items-center justify-between pointer-events-auto">
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-zinc-900/90 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              LIVE PREVIEW
            </span>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={toggleMute}
                title={isMuted ? "Unmute" : "Mute"}
                className="p-1.5 rounded-lg bg-zinc-900/90 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-700/60 transition-colors shadow-sm cursor-pointer"
              >
                {isMuted ? (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 4.663 12 5.109 12 6v12c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 4.663 12 5.109 12 6v12c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  </svg>
                )}
              </button>
              <button
                type="button"
                onClick={togglePlay}
                title={isPlaying ? "Pause" : "Play"}
                className="p-1.5 rounded-lg bg-zinc-900/90 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-700/60 transition-colors shadow-sm cursor-pointer"
              >
                {isPlaying ? (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
              </button>
              <button
                type="button"
                onClick={toggleFullscreen}
                title="Toggle Fullscreen"
                className="p-1.5 rounded-lg bg-zinc-900/90 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-700/60 transition-colors shadow-sm cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between text-xs text-zinc-300 font-mono">
            <span className="truncate">{title}</span>
            <span className="text-[10px] text-zinc-400">object-contain // 100% visible</span>
          </div>
        </div>
      )}

      {/* Fallback Graceful Placeholder Card */}
      {(hasError || !isLoaded) && (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center select-none bg-zinc-950/90 z-10">
          {/* Subtle Corner Brackets for Technical HUD feel */}
          <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t border-l border-zinc-700" />
          <div className="absolute top-2 right-2 w-2.5 h-2.5 border-t border-r border-zinc-700" />
          <div className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b border-l border-zinc-700" />
          <div className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b border-r border-zinc-700" />

          {/* Central Icon */}
          <div className="relative mb-3">
            <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-emerald-400 group-hover:border-emerald-500/30 transition-all duration-300">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </div>
            <span className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-cyan-500/80 border-2 border-zinc-950" />
          </div>

          {/* Title & Badge */}
          <div className="flex items-center gap-2 mb-1.5 flex-wrap justify-center">
            <span className="text-xs font-semibold text-zinc-200 tracking-wide uppercase">
              {title}
            </span>
            {badge && (
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800/80 text-cyan-300 border border-zinc-700/60">
                {badge}
              </span>
            )}
          </div>

          <p className="text-xs text-zinc-400 max-w-sm mb-3">
            Gameplay clip slot ready. Drop <code className="text-cyan-300 font-mono text-[11px] px-1 py-0.5 rounded bg-zinc-900">{src}</code> into <code className="text-zinc-300 font-mono text-[11px]">public{src}</code> to auto-play here.
          </p>

          {/* Path Badge with Copy Button */}
          <div className="inline-flex items-center gap-1.5 max-w-full">
            <button
              type="button"
              onClick={handleCopyPath}
              className="inline-flex items-center gap-1.5 text-[11px] font-mono bg-zinc-900/90 hover:bg-zinc-800 text-zinc-300 hover:text-white px-2.5 py-1 rounded-md border border-zinc-800 hover:border-zinc-700 transition-colors cursor-pointer"
              title="Click to copy file path"
            >
              <span className="text-emerald-400">slot:</span>
              <span className="truncate text-cyan-300 font-semibold">{src}</span>
              {copied ? (
                <span className="text-emerald-400 text-[10px] ml-1 font-sans font-medium">Copied!</span>
              ) : (
                <svg className="w-3.5 h-3.5 text-zinc-500 ml-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
