"use client";

import { useEffect, useRef } from "react";

export function Blackhole() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth || 850);
    let height = (canvas.height = canvas.offsetHeight || 320);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("resize", handleResize);

    // Infalling matter particles with orbital velocity
    interface TrailPoint {
      x: number;
      y: number;
    }

    interface Particle {
      r: number;
      theta: number;
      speed: number;
      infallSpeed: number;
      size: number;
      alpha: number;
      color: string;
      trail: TrailPoint[];
    }

    const particleCount = 80;
    const particles: Particle[] = [];
    const colors = [
      "255, 255, 255", // Pure starlight white
      "243, 232, 255", // Hot lavender-white
      "216, 180, 254", // Radiant Lavender
      "168, 85, 247",  // Vivid Purple
      "141, 69, 255",  // Bright Electric Violet
    ];

    const minR = 95;  // Photon ring boundary
    const maxR = 360; // Outer accretion radius

    for (let i = 0; i < particleCount; i++) {
      const r = minR + Math.random() * (maxR - minR);
      const theta = Math.random() * Math.PI * 2;
      const cx = width / 2;
      const cy = height / 2;
      const x = cx + r * Math.cos(theta);
      const y = cy + r * Math.sin(theta) * 0.26;

      particles.push({
        r,
        theta,
        speed: (0.012 + Math.random() * 0.016) * (200 / (r + 30)),
        infallSpeed: 0.1 + Math.random() * 0.18,
        size: 0.75 + Math.random() * 1.5,
        alpha: 0.25 + Math.random() * 0.7,
        color: colors[Math.floor(Math.random() * colors.length)],
        trail: [{ x, y }],
      });
    }

    let lastTime = performance.now();

    const render = (time: number) => {
      const dt = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!prefersReducedMotion) {
          p.theta += p.speed * (dt * 60);
          p.r -= p.infallSpeed * (dt * 60);

          if (p.r < 140) {
            p.speed *= 1.002;
          }

          if (p.r < minR) {
            p.r = maxR - Math.random() * 30;
            p.theta = Math.random() * Math.PI * 2;
            p.speed = (0.012 + Math.random() * 0.016) * (200 / (p.r + 30));
            const newX = cx + p.r * Math.cos(p.theta);
            const newY = cy + p.r * Math.sin(p.theta) * 0.26;
            p.trail = [{ x: newX, y: newY }];
          }
        }

        const x = cx + p.r * Math.cos(p.theta);
        const y = cy + p.r * Math.sin(p.theta) * 0.26;

        p.trail.unshift({ x, y });
        if (p.trail.length > 5) {
          p.trail.pop();
        }

        // Doppler beaming: approaching side (left) is brighter
        const doppler = (Math.sin(p.theta) + 1) / 2;
        const currentAlpha = p.alpha * (0.35 + 0.65 * doppler);

        // Draw particle streak trail
        if (p.trail.length > 1) {
          ctx.beginPath();
          ctx.moveTo(p.trail[0].x, p.trail[0].y);
          for (let j = 1; j < p.trail.length; j++) {
            ctx.lineTo(p.trail[j].x, p.trail[j].y);
          }
          ctx.strokeStyle = `rgba(${p.color}, ${currentAlpha * 0.7})`;
          ctx.lineWidth = p.size;
          ctx.lineCap = "round";
          ctx.stroke();
        }

        // Draw particle head
        ctx.beginPath();
        ctx.arc(x, y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${currentAlpha})`;
        ctx.fill();
      }

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    if (prefersReducedMotion) {
      render(performance.now());
    } else {
      animationFrameId = requestAnimationFrame(render);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      className="relative w-full max-w-[960px] h-[330px] sm:h-[370px] lg:h-[390px] flex items-center justify-center pointer-events-none select-none overflow-visible"
      aria-hidden="true"
    >
      {/* 1. Atmospheric Violet Glow Core */}
      <div className="absolute w-[760px] h-[320px] rounded-full bg-gradient-to-b from-[#762BFF]/35 via-[#3B087F]/20 to-transparent blur-[95px] opacity-90" />
      <div className="absolute w-[380px] h-[250px] rounded-full bg-[#8D45FF]/30 blur-[65px] animate-pulse-subtle" />

      {/* 2. Vertical Relativistic Jets (Polar Radiation Needles) */}
      <div className="absolute w-[1.5px] h-[390px] bg-gradient-to-t from-transparent via-[#FFFFFF]/85 to-transparent blur-[0.5px] opacity-80" />
      <div className="absolute w-[10px] h-[320px] bg-gradient-to-t from-transparent via-[#C8A8FF]/40 to-transparent blur-[4px] opacity-70" />
      <div className="absolute w-[50px] h-[260px] bg-gradient-to-t from-transparent via-[#762BFF]/25 to-transparent blur-[25px] opacity-75" />

      {/* 3. Relativistic SVG Blackhole Core & Accretion Structure */}
      <svg
        viewBox="0 0 850 320"
        className="absolute inset-0 w-full h-full z-10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="bhMidSuperGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="14" result="blur1" />
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur2" />
            <feMerge>
              <feMergeNode in="blur1" />
              <feMergeNode in="blur2" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="bhMidSharpGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Accretion Disk Doppler Beamed Gradient */}
          <linearGradient id="bhMidDoppler" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C8A8FF" stopOpacity="0.9" />
            <stop offset="25%" stopColor="#8D45FF" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#762BFF" stopOpacity="0.65" />
            <stop offset="75%" stopColor="#3B087F" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#15131D" stopOpacity="0.1" />
          </linearGradient>

          {/* Upper Einstein Arch Gradient */}
          <linearGradient id="bhMidUpperArch" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#762BFF" stopOpacity="0.3" />
            <stop offset="55%" stopColor="#C8A8FF" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="1" />
          </linearGradient>

          {/* Lower Einstein Arch Gradient */}
          <linearGradient id="bhMidLowerArch" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#8D45FF" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#3B087F" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* --- BACK OF ACCRETION DISK --- */}
        {/* Outer Plasma Stream */}
        <ellipse
          cx="425"
          cy="160"
          rx="360"
          ry="82"
          stroke="url(#bhMidDoppler)"
          strokeWidth="26"
          opacity="0.55"
          filter="url(#bhMidSuperGlow)"
        />

        {/* Mid Accretion Stream */}
        <ellipse
          cx="425"
          cy="160"
          rx="280"
          ry="65"
          stroke="url(#bhMidDoppler)"
          strokeWidth="14"
          opacity="0.8"
          filter="url(#bhMidSuperGlow)"
        />

        {/* Upper Relativistic Lensing Arch */}
        <path
          d="M 335 160 C 335 55, 515 55, 515 160"
          stroke="url(#bhMidUpperArch)"
          strokeWidth="4.5"
          opacity="0.95"
          filter="url(#bhMidSuperGlow)"
        />
        <path
          d="M 345 160 C 345 66, 505 66, 505 160"
          stroke="#FFFFFF"
          strokeWidth="2"
          opacity="0.95"
          filter="url(#bhMidSharpGlow)"
        />

        {/* Lower Relativistic Lensing Arch */}
        <path
          d="M 350 160 C 350 245, 500 245, 500 160"
          stroke="url(#bhMidLowerArch)"
          strokeWidth="3.5"
          opacity="0.6"
          filter="url(#bhMidSuperGlow)"
        />

        {/* Continuous Smooth Cosmic Gas Filaments */}
        <g
          className="animate-[spin_44s_linear_infinite]"
          style={{ transformOrigin: "425px 160px" }}
        >
          <ellipse
            cx="425"
            cy="160"
            rx="240"
            ry="56"
            stroke="rgba(200, 168, 255, 0.45)"
            strokeWidth="1.2"
            opacity="0.75"
          />
          <ellipse
            cx="425"
            cy="160"
            rx="200"
            ry="48"
            stroke="rgba(141, 69, 255, 0.35)"
            strokeWidth="1"
            opacity="0.65"
          />
        </g>

        {/* Inner High-Velocity Stream */}
        <g
          className="animate-[spin_26s_linear_infinite_reverse]"
          style={{ transformOrigin: "425px 160px" }}
        >
          <ellipse
            cx="425"
            cy="160"
            rx="160"
            ry="38"
            stroke="rgba(233, 213, 255, 0.8)"
            strokeWidth="1.5"
            opacity="0.85"
            filter="url(#bhMidSharpGlow)"
          />
        </g>

        {/* --- THE SINGULARITY CORE & PHOTON RING --- */}
        {/* Pitch Black Singularity Void */}
        <circle cx="425" cy="160" r="88" fill="#000000" />

        {/* Razor-sharp Luminous Photon Sphere Ring */}
        <circle
          cx="425"
          cy="160"
          r="89.5"
          stroke="#FFFFFF"
          strokeWidth="2.5"
          filter="url(#bhMidSuperGlow)"
        />
        <circle
          cx="425"
          cy="160"
          r="90.5"
          stroke="#C8A8FF"
          strokeWidth="1.5"
          opacity="0.9"
        />

        {/* --- FRONT OF ACCRETION DISK --- */}
        <path
          d="M 240 160 C 290 220, 560 220, 610 160"
          stroke="url(#bhMidDoppler)"
          strokeWidth="12"
          opacity="0.7"
          filter="url(#bhMidSuperGlow)"
        />
        <path
          d="M 290 160 C 335 210, 515 210, 560 160"
          stroke="rgba(200, 168, 255, 0.75)"
          strokeWidth="2"
          opacity="0.8"
          filter="url(#bhMidSharpGlow)"
        />
      </svg>

      {/* 4. Infalling Matter Canvas Particle Trails */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-20"
      />
    </div>
  );
}
