"use client";

import { useEffect, useRef, useState } from "react";

export function CosmicBackdrop() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initStars();
    };

    window.addEventListener("resize", handleResize);

    // Realistic Starfield Definition with Idle Animation & Mouse Hover Physics
    interface Star {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      vx: number;
      vy: number;
      r: number;
      baseAlpha: number;
      color: string;
      parallaxFactor: number;
      twinkleSpeed: number;
      twinkleOffset: number;
      hasSpikes: boolean;
    }

    let stars: Star[] = [];

    const starColors = [
      "255, 255, 255", // Diamond white
      "243, 232, 255", // Lavender white
      "216, 180, 254", // Soft Lavender
      "199, 210, 254", // Ice blue
      "168, 85, 247",  // Radiant violet
    ];

    const initStars = () => {
      stars = [];
      const count = Math.floor((width * height) / 5800); // Dense, realistic starfield (~250 stars on desktop)

      for (let i = 0; i < count; i++) {
        const tier = Math.random();
        let r: number;
        let baseAlpha: number;
        let parallaxFactor: number;
        let hasSpikes = false;

        if (tier < 0.65) {
          // Far background stars (65%)
          r = 0.5 + Math.random() * 0.4;
          baseAlpha = 0.2 + Math.random() * 0.3;
          parallaxFactor = 0.05;
        } else if (tier < 0.90) {
          // Mid-distance stars (25%)
          r = 0.9 + Math.random() * 0.6;
          baseAlpha = 0.45 + Math.random() * 0.35;
          parallaxFactor = 0.12;
        } else {
          // Foreground bright stars with diffraction spikes (10%)
          r = 1.5 + Math.random() * 0.8;
          baseAlpha = 0.75 + Math.random() * 0.25;
          parallaxFactor = 0.22;
          hasSpikes = Math.random() > 0.3;
        }

        const x = Math.random() * width;
        const y = Math.random() * height;
        const vx = (Math.random() - 0.5) * 0.18 * (parallaxFactor * 8);
        const vy = (Math.random() - 0.5) * 0.18 * (parallaxFactor * 8);

        stars.push({
          x,
          y,
          baseX: x,
          baseY: y,
          vx,
          vy,
          r,
          baseAlpha,
          color: starColors[Math.floor(Math.random() * starColors.length)],
          parallaxFactor,
          twinkleSpeed: 0.8 + Math.random() * 2.2,
          twinkleOffset: Math.random() * Math.PI * 2,
          hasSpikes,
        });
      }
    };

    initStars();

    let currentScroll = window.scrollY || 0;
    const handleScroll = () => {
      currentScroll = window.scrollY || 0;
      setScrollY(currentScroll);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Interactive Mouse Hover & Pointer Physics
    let mouseX = -9999;
    let mouseY = -9999;
    let targetMouseX = -9999;
    let targetMouseY = -9999;
    let isHovering = false;

    const handlePointerMove = (e: PointerEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
      isHovering = true;
    };

    const handlePointerLeave = () => {
      isHovering = false;
      targetMouseX = -9999;
      targetMouseY = -9999;
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerleave", handlePointerLeave);

    let animationFrameId: number;

    const render = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      const sec = time / 1000;

      // Smooth mouse lerp interpolation
      if (isHovering && targetMouseX !== -9999) {
        if (mouseX === -9999) {
          mouseX = targetMouseX;
          mouseY = targetMouseY;
        } else {
          mouseX += (targetMouseX - mouseX) * 0.08;
          mouseY += (targetMouseY - mouseY) * 0.08;
        }
      } else {
        mouseX = -9999;
        mouseY = -9999;
      }

      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];

        // 1. Idle Ambient Drift Physics
        if (!prefersReducedMotion) {
          s.baseX += s.vx;
          s.baseY += s.vy;
          if (s.baseX < 0) s.baseX += width;
          if (s.baseX > width) s.baseX -= width;
          if (s.baseY < 0) s.baseY += height;
          if (s.baseY > height) s.baseY -= height;
        }

        const idleDriftX = !prefersReducedMotion
          ? Math.sin(sec * 0.55 + s.twinkleOffset) * 6 * s.parallaxFactor
          : 0;
        const idleDriftY = !prefersReducedMotion
          ? Math.cos(sec * 0.45 + s.twinkleOffset) * 6 * s.parallaxFactor
          : 0;

        // 2. Parallax vertical offset with continuous wrap-around
        let currentY = s.baseY + idleDriftY - currentScroll * s.parallaxFactor;
        currentY = ((currentY % height) + height) % height;

        let currentX = s.baseX + idleDriftX;
        currentX = ((currentX % width) + width) % width;

        // 3. Interactive Mouse Hover Parallax & Magnetic Lensing
        let extraAlpha = 0;
        if (!prefersReducedMotion && mouseX !== -9999) {
          // Global depth parallax from cursor position
          const cursorParallaxX = (mouseX - width / 2) * (s.parallaxFactor * 0.15);
          const cursorParallaxY = (mouseY - height / 2) * (s.parallaxFactor * 0.15);
          currentX += cursorParallaxX;
          currentY += cursorParallaxY;

          // Local magnetic deflection around cursor
          const dx = currentX - mouseX;
          const dy = currentY - mouseY;
          const dist = Math.hypot(dx, dy);
          const hoverRadius = 170;

          if (dist < hoverRadius && dist > 0.1) {
            const norm = 1 - dist / hoverRadius;
            const force = norm * norm * 24 * (s.parallaxFactor * 4);
            currentX += (dx / dist) * force;
            currentY += (dy / dist) * force;
            extraAlpha = norm * 0.45;
          }
        }

        // Twinkle luminance calculation
        let alpha = s.baseAlpha;
        if (!prefersReducedMotion) {
          const wave = Math.sin(sec * s.twinkleSpeed + s.twinkleOffset);
          alpha = Math.max(0.1, Math.min(1, s.baseAlpha + wave * 0.25 + extraAlpha));
        }

        // Draw star core
        ctx.beginPath();
        ctx.arc(currentX, currentY, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${s.color}, ${alpha})`;
        ctx.fill();

        // Draw 4-point micro diffraction spike for prominent stars
        if (s.hasSpikes && alpha > 0.5) {
          const spikeLen = s.r * 3.8;
          ctx.strokeStyle = `rgba(${s.color}, ${alpha * 0.45})`;
          ctx.lineWidth = 0.6;
          ctx.beginPath();
          // Horizontal spike
          ctx.moveTo(currentX - spikeLen, currentY);
          ctx.lineTo(currentX + spikeLen, currentY);
          // Vertical spike
          ctx.moveTo(currentX, currentY - spikeLen);
          ctx.lineTo(currentX, currentY + spikeLen);
          ctx.stroke();
        }
      }

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    if (prefersReducedMotion) {
      render(0);
    } else {
      animationFrameId = requestAnimationFrame(render);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Parallax translation for atmospheric nebula clouds drifting downwards with scroll
  const cloudDriftDown = scrollY * 0.15;
  const cloudDriftSlow = scrollY * 0.08;

  return (
    <div
      className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden z-0"
      aria-hidden="true"
    >
      {/* 1. Realistic Parallax Starfield Canvas (Fixed Viewport Layer) */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full opacity-90"
        />

        {/* Viewport-relative subtle aurora drifting fog */}
        <div
          className="absolute top-1/3 left-1/4 w-[500px] h-[300px] bg-gradient-to-r from-[#762BFF]/10 to-[#8D45FF]/5 blur-[120px] rounded-full transition-transform duration-200 ease-out"
          style={{
            transform: `translate3d(0, ${cloudDriftSlow}px, 0)`,
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[550px] h-[350px] bg-gradient-to-l from-[#C8A8FF]/10 via-[#762BFF]/8 to-transparent blur-[130px] rounded-full transition-transform duration-200 ease-out"
          style={{
            transform: `translate3d(0, ${-cloudDriftSlow * 0.5}px, 0)`,
          }}
        />
      </div>

      {/* 2. Scrollable Volumetric Nebula Clouds ("Awan-awan Kosmik" positioned throughout document) */}
      {/* Cloud Tier 1: Transition Nebula (ValueStrip & Philosophy) */}
      <div
        className="absolute top-[820px] -left-36 w-[860px] h-[600px] rounded-full bg-gradient-to-br from-[#762BFF]/22 via-[#3B087F]/15 to-transparent blur-[140px] opacity-85 transition-transform duration-200 ease-out animate-nebula"
        style={{
          transform: `translate3d(0, ${cloudDriftDown}px, 0)`,
        }}
      />
      <div
        className="absolute top-[1080px] -right-28 w-[800px] h-[540px] rounded-full bg-gradient-to-bl from-[#C8A8FF]/18 via-[#762BFF]/15 to-transparent blur-[130px] opacity-80 transition-transform duration-200 ease-out animate-nebula-delayed"
        style={{
          transform: `translate3d(0, ${cloudDriftDown * 1.2}px, 0)`,
        }}
      />

      {/* Cloud Tier 2: Core Pillars & Lifestyle Gas Clouds */}
      <div
        className="absolute top-[2050px] left-1/2 -translate-x-1/2 w-[1100px] h-[680px] rounded-full bg-gradient-to-b from-[#8D45FF]/16 via-[#3B087F]/12 to-transparent blur-[150px] opacity-75 transition-transform duration-200 ease-out animate-nebula"
        style={{
          transform: `translate3d(-50%, ${cloudDriftSlow}px, 0)`,
        }}
      />
      <div
        className="absolute top-[2750px] -left-28 w-[760px] h-[580px] rounded-full bg-[#762BFF]/15 blur-[140px] opacity-70 transition-transform duration-200 ease-out"
        style={{
          transform: `translate3d(0, ${cloudDriftDown}px, 0)`,
        }}
      />

      {/* Cloud Tier 3: Feature Band & Dashboard Preview Nebula */}
      <div
        className="absolute top-[3750px] -right-44 w-[950px] h-[640px] rounded-full bg-gradient-to-l from-[#762BFF]/18 via-[#1B063A]/15 to-transparent blur-[150px] opacity-80 transition-transform duration-200 ease-out animate-nebula-delayed"
        style={{
          transform: `translate3d(0, ${cloudDriftDown * 0.8}px, 0)`,
        }}
      />
      <div
        className="absolute top-[4650px] left-1/4 w-[850px] h-[560px] rounded-full bg-[#8D45FF]/14 blur-[140px] opacity-70 transition-transform duration-200 ease-out animate-nebula"
        style={{
          transform: `translate3d(0, ${cloudDriftSlow}px, 0)`,
        }}
      />

      {/* Cloud Tier 4: How It Works & Growth Cosmic Stream */}
      <div
        className="absolute top-[5450px] -left-32 w-[900px] h-[600px] rounded-full bg-gradient-to-r from-[#762BFF]/16 via-[#C8A8FF]/10 to-transparent blur-[150px] opacity-75 transition-transform duration-200 ease-out"
        style={{
          transform: `translate3d(0, ${cloudDriftDown}px, 0)`,
        }}
      />

      {/* Cloud Tier 5: Final CTA Gravitational Event Horizon Nebula */}
      <div
        className="absolute top-[6400px] left-1/2 -translate-x-1/2 w-[1200px] h-[720px] rounded-full bg-gradient-to-t from-[#762BFF]/24 via-[#3B087F]/16 to-transparent blur-[160px] opacity-85 transition-transform duration-200 ease-out animate-nebula"
        style={{
          transform: `translate3d(-50%, ${cloudDriftSlow}px, 0)`,
        }}
      />

      {/* 3. Global Orbital Accents & Keplerian Trajectory Lines (Aksen-Aksen Orbital menyatu dengan Blackhole) */}
      <svg
        className="absolute inset-0 w-full h-[7600px] opacity-55 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <defs>
          <linearGradient id="orbitLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C8A8FF" stopOpacity="0.55" />
            <stop offset="45%" stopColor="#8D45FF" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#762BFF" stopOpacity="0.12" />
          </linearGradient>

          <filter id="orbitGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Orbit A: Sweeping Gravitational Ellipse (Hero into ValueStrip & Philosophy) */}
        <g transform="translate(720, 1020) rotate(-10)">
          <ellipse
            cx="0"
            cy="0"
            rx="820"
            ry="250"
            stroke="url(#orbitLineGrad)"
            strokeWidth="1.4"
            strokeDasharray="6 12"
            filter="url(#orbitGlow)"
          />
          {/* Orbital Waypoint Node & Telemetry Marker */}
          <circle cx="580" cy="175" r="4" fill="#C8A8FF" filter="url(#orbitGlow)" />
          <circle cx="580" cy="175" r="1.8" fill="#FFFFFF" />
          <text
            x="596"
            y="179"
            fill="#C8A8FF"
            fontSize="10"
            fontFamily="monospace"
            letterSpacing="0.15em"
            opacity="0.75"
          >
            NODE 01 // ACCRETION INTERFACE
          </text>
        </g>

        {/* Orbit B: Inclined Trajectory Ring (Core Pillars & Feature Band) */}
        <g transform="translate(680, 2550) rotate(14)">
          <ellipse
            cx="0"
            cy="0"
            rx="880"
            ry="290"
            stroke="url(#orbitLineGrad)"
            strokeWidth="1.4"
            strokeDasharray="8 14"
            filter="url(#orbitGlow)"
          />
          {/* Orbital Waypoint Nodes */}
          <circle cx="-620" cy="205" r="4" fill="#8D45FF" filter="url(#orbitGlow)" />
          <circle cx="-620" cy="205" r="1.8" fill="#FFFFFF" />
          <text
            x="-605"
            y="209"
            fill="#C8A8FF"
            fontSize="10"
            fontFamily="monospace"
            letterSpacing="0.15em"
            opacity="0.75"
          >
            NODE 02 // 4-PILLAR AXIS
          </text>
          <circle cx="500" cy="-240" r="3" fill="#C8A8FF" />
        </g>

        {/* Orbit C: Grand Celestial Arc (Behind Dashboard Preview) */}
        <g transform="translate(750, 4350) rotate(-8)">
          <ellipse
            cx="0"
            cy="0"
            rx="940"
            ry="320"
            stroke="url(#orbitLineGrad)"
            strokeWidth="1.4"
            strokeDasharray="6 12"
            filter="url(#orbitGlow)"
          />
          <circle cx="700" cy="215" r="4" fill="#E9D5FF" filter="url(#orbitGlow)" />
          <circle cx="700" cy="215" r="1.8" fill="#FFFFFF" />
          <text
            x="716"
            y="219"
            fill="#C8A8FF"
            fontSize="10"
            fontFamily="monospace"
            letterSpacing="0.15em"
            opacity="0.75"
          >
            NODE 03 // HABIT TELEMETRY
          </text>
        </g>

        {/* Orbit D: Step Transfer Arc (How It Works & Growth) */}
        <g transform="translate(660, 5300) rotate(12)">
          <ellipse
            cx="0"
            cy="0"
            rx="890"
            ry="280"
            stroke="url(#orbitLineGrad)"
            strokeWidth="1.3"
            strokeDasharray="7 13"
            filter="url(#orbitGlow)"
          />
          <circle cx="-520" cy="180" r="3.5" fill="#C8A8FF" />
          <text
            x="-505"
            y="184"
            fill="#C8A8FF"
            fontSize="10"
            fontFamily="monospace"
            letterSpacing="0.15em"
            opacity="0.75"
          >
            NODE 04 // COMPOUND MOMENTUM
          </text>
        </g>

        {/* Orbit E: Closing Gravitational Curve (Leading to Final CTA) */}
        <g transform="translate(700, 6800) rotate(-6)">
          <ellipse
            cx="0"
            cy="0"
            rx="860"
            ry="270"
            stroke="url(#orbitLineGrad)"
            strokeWidth="1.4"
            strokeDasharray="8 16"
            filter="url(#orbitGlow)"
          />
          <circle cx="-540" cy="205" r="4" fill="#8D45FF" filter="url(#orbitGlow)" />
          <circle cx="-540" cy="205" r="1.8" fill="#FFFFFF" />
          <text
            x="-525"
            y="209"
            fill="#C8A8FF"
            fontSize="10"
            fontFamily="monospace"
            letterSpacing="0.15em"
            opacity="0.75"
          >
            NODE 05 // HORIZON CONVERGENCE
          </text>
        </g>
      </svg>
    </div>
  );
}
