"use client";

import React, { useEffect, useRef } from "react";

interface TrailPoint {
  x: number;
  y: number;
  time: number;
}

interface Spark {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
}

interface ClickRipple {
  x: number;
  y: number;
  startTime: number;
  sparks: Spark[];
}

export default function CursorEffect() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // Accessibility & device checks
    if (typeof window === "undefined") return;

    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isTouch || prefersReducedMotion) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number | null = null;
    let isLoopRunning = false;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    // Buffers
    const points: TrailPoint[] = [];
    const maxPoints = 20;
    const trailLifetime = 200; // ms
    const ripples: ClickRipple[] = [];
    const rippleDuration = 400; // ms

    // Canvas resize handler
    const handleResize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener("resize", handleResize, { passive: true });

    // Wake up the animation loop if dormant
    const wakeLoop = () => {
      if (!isLoopRunning) {
        isLoopRunning = true;
        animId = requestAnimationFrame(animate);
      }
    };

    // Pointer move listener
    const handlePointerMove = (e: PointerEvent) => {
      const now = performance.now();
      points.push({ x: e.clientX, y: e.clientY, time: now });
      if (points.length > maxPoints) {
        points.shift();
      }
      wakeLoop();
    };

    // Pointer down (click) listener
    const handlePointerDown = (e: PointerEvent) => {
      const now = performance.now();
      const sparkCount = 7;
      const sparks: Spark[] = [];

      for (let i = 0; i < sparkCount; i++) {
        const baseAngle = (i / sparkCount) * Math.PI * 2;
        const angle = baseAngle + (Math.random() - 0.5) * 0.4;
        const speed = 1.8 + Math.random() * 2.2;
        sparks.push({
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: 1.5 + Math.random() * 1.5,
          color: i % 2 === 0 ? "#34d399" : "#22d3ee",
        });
      }

      ripples.push({
        x: e.clientX,
        y: e.clientY,
        startTime: now,
        sparks,
      });

      wakeLoop();
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerdown", handlePointerDown, { passive: true });

    // Main animation loop
    const animate = (now: number) => {
      // 1. Prune expired trail points
      while (points.length > 0 && now - points[0].time > trailLifetime) {
        points.shift();
      }

      // 2. Prune expired ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        if (now - ripples[i].startTime > rippleDuration) {
          ripples.splice(i, 1);
        }
      }

      // 3. If nothing is active, clear canvas and sleep loop (0% idle CPU)
      if (points.length === 0 && ripples.length === 0) {
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        isLoopRunning = false;
        animId = null;
        return;
      }

      // Clear current frame
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      // 4. Render Cursor Trail (tapered emerald-to-cyan glowing line)
      if (points.length >= 2) {
        ctx.save();
        ctx.lineCap = "round";
        ctx.lineJoin = "round";

        const count = points.length;
        for (let i = 0; i < count - 1; i++) {
          const p1 = points[i];
          const p2 = points[i + 1];

          const age1 = now - p1.time;
          const ageFactor = Math.max(0, 1 - age1 / trailLifetime);
          const progress = i / (count - 1); // 0 at tail, 1 at head

          // Color interpolation from cyan (tail) to emerald (head)
          const r = Math.round(34 + progress * (52 - 34));
          const g = Math.round(211 + progress * (211 - 211));
          const b = Math.round(238 - progress * (238 - 153));
          const alpha = (0.15 + progress * 0.75) * ageFactor;

          ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${alpha.toFixed(3)})`;
          ctx.lineWidth = Math.max(0.5, (0.8 + progress * 2.8) * ageFactor);
          ctx.shadowBlur = 8 * ageFactor;
          ctx.shadowColor = progress > 0.5 ? "#34d399" : "#22d3ee";

          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }

        ctx.restore();
      }

      // 5. Render Click Ripples & Directional Sparks
      if (ripples.length > 0) {
        ctx.save();

        for (const ripple of ripples) {
          const elapsed = now - ripple.startTime;
          const progress = Math.min(1, elapsed / rippleDuration);
          const easeOut = 1 - Math.pow(1 - progress, 2);
          const alpha = Math.max(0, 1 - progress);

          // Outer Emerald Tactical Ring
          const outerRadius = 4 + 34 * easeOut;
          ctx.beginPath();
          ctx.arc(ripple.x, ripple.y, outerRadius, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(52, 211, 153, ${(alpha * 0.9).toFixed(3)})`;
          ctx.lineWidth = 1.5;
          ctx.shadowBlur = 6 * alpha;
          ctx.shadowColor = "#34d399";
          ctx.stroke();

          // 4 Tactical Cardinal Tick Marks on the Outer Ring
          const tickLen = 4;
          const tickAngles = [0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2];
          ctx.strokeStyle = `rgba(52, 211, 153, ${(alpha * 0.8).toFixed(3)})`;
          ctx.lineWidth = 1.2;

          for (const angle of tickAngles) {
            const cos = Math.cos(angle);
            const sin = Math.sin(angle);
            const startX = ripple.x + cos * (outerRadius - tickLen / 2);
            const startY = ripple.y + sin * (outerRadius - tickLen / 2);
            const endX = ripple.x + cos * (outerRadius + tickLen / 2);
            const endY = ripple.y + sin * (outerRadius + tickLen / 2);

            ctx.beginPath();
            ctx.moveTo(startX, startY);
            ctx.lineTo(endX, endY);
            ctx.stroke();
          }

          // Inner Cyan Concentric Ring
          const innerRadius = 2 + 20 * easeOut;
          ctx.beginPath();
          ctx.arc(ripple.x, ripple.y, innerRadius, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(34, 211, 238, ${(alpha * 0.75).toFixed(3)})`;
          ctx.lineWidth = 1;
          ctx.shadowBlur = 4 * alpha;
          ctx.shadowColor = "#22d3ee";
          ctx.stroke();

          // Directional Sparks
          for (const spark of ripple.sparks) {
            spark.x += spark.vx;
            spark.y += spark.vy;
            spark.vx *= 0.94; // Deceleration
            spark.vy *= 0.94;

            ctx.fillStyle = spark.color;
            ctx.shadowBlur = 4 * alpha;
            ctx.shadowColor = spark.color;
            ctx.globalAlpha = alpha;

            ctx.beginPath();
            ctx.arc(spark.x, spark.y, spark.size * (1 - progress * 0.5), 0, Math.PI * 2);
            ctx.fill();
          }

          ctx.globalAlpha = 1.0;
        }

        ctx.restore();
      }

      // Schedule next frame
      animId = requestAnimationFrame(animate);
    };

    return () => {
      if (animId) cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-50 select-none"
      aria-hidden="true"
    />
  );
}

