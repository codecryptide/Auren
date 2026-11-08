"use client";

import { useEffect, useRef, useState } from "react";

export function HeroOrb() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };
    mediaQuery.addEventListener("change", handleMotionChange);

    const canvas = canvasRef.current;
    if (!canvas) return;

    // Test WebGL context
    let gl: WebGLRenderingContext | null = null;
    try {
      gl =
        canvas.getContext("webgl", { alpha: true, antialias: true, powerPreference: "high-performance" }) ||
        (canvas.getContext("experimental-webgl") as WebGLRenderingContext);
    } catch {
      setHasWebGL(false);
      return;
    }

    if (!gl) {
      setHasWebGL(false);
      return;
    }

    // Vertex shader
    const vsSource = `
      attribute vec2 aPosition;
      varying vec2 vUv;
      void main() {
        vUv = aPosition * 0.5 + 0.5;
        gl_Position = vec4(aPosition, 0.0, 1.0);
      }
    `;

    // Fragment shader for organic glowing sphere with atmosphere & depth
    const fsSource = `
      precision highp float;
      varying vec2 vUv;
      uniform float uTime;
      uniform vec2 uMouse;
      uniform vec2 uResolution;

      // Simplex-style 2D noise
      vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

      float snoise(vec2 v) {
        const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                           -0.577350269189626, 0.024390243902439);
        vec2 i  = floor(v + dot(v, C.yy));
        vec2 x0 = v -   i + dot(i, C.xx);
        vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;
        i = mod289(i);
        vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
        vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
        m = m*m;
        m = m*m;
        vec3 x = 2.0 * fract(p * C.www) - 1.0;
        vec3 h = abs(x) - 0.5;
        vec3 ox = floor(x + 0.5);
        vec3 a0 = x - ox;
        m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
        vec3 g;
        g.x  = a0.x  * x0.x  + h.x  * x0.y;
        g.yz = a0.yz * x12.xz + h.yz * x12.yw;
        return 130.0 * dot(m, g);
      }

      void main() {
        vec2 p = (gl_FragCoord.xy * 2.0 - uResolution) / min(uResolution.x, uResolution.y);
        
        // Sphere center with slight mouse parallax
        vec2 center = vec2(0.0, 0.0) + (uMouse - 0.5) * 0.12;
        vec2 d = p - center;
        float r = length(d);

        float radius = 0.62;
        
        // Background deep forest atmosphere
        vec3 color = vec3(0.051, 0.090, 0.067); // #0D1711

        // Atmospheric halo glow
        float glow = exp(-r * 2.4) * 0.45;
        vec3 haloColor = mix(vec3(0.529, 0.608, 0.514), vec3(0.843, 1.0, 0.498), 0.35); // Sage to Soft Lime
        color += haloColor * glow;

        if (r < radius) {
          // Inside sphere - 3D normal
          float z = sqrt(max(0.0, radius * radius - r * r));
          vec3 normal = normalize(vec3(d.x, d.y, z));

          // Animated organic surface texture
          float t = uTime * 0.22;
          float n1 = snoise(normal.xy * 2.4 + vec2(t * 0.5, t * 0.3));
          float n2 = snoise(normal.yz * 3.8 - vec2(t * 0.4, t * 0.2));
          float organicPattern = (n1 * 0.6 + n2 * 0.4) * 0.5 + 0.5;

          // Natural light source (top-left & rim)
          vec3 lightDir = normalize(vec3(-0.45, 0.65, 0.75));
          float diff = max(dot(normal, lightDir), 0.0);

          // Fresnel rim lighting
          float fresnel = pow(1.0 - normal.z, 2.8);

          // AUREN Brand Colors: Forest, Sage, Soft Lime
          vec3 colDeep = vec3(0.078, 0.145, 0.106);    // Forest #14251B
          vec3 colSage = vec3(0.529, 0.608, 0.514);    // Sage #879B83
          vec3 colLime = vec3(0.843, 1.0, 0.498);      // Soft Lime #D7FF7F

          vec3 sphereColor = mix(colDeep, colSage, diff * 0.85 + organicPattern * 0.25);
          sphereColor = mix(sphereColor, colLime, fresnel * 0.75 + pow(diff, 6.0) * 0.4);

          // Smooth antialiased edge
          float edgeAlpha = smoothstep(radius, radius - 0.015, r);
          color = mix(color, sphereColor, edgeAlpha);
        }

        gl_FragColor = vec4(color, 1.0);
      }
    `;

    function createShader(glCtx: WebGLRenderingContext, type: number, source: string) {
      const shader = glCtx.createShader(type);
      if (!shader) return null;
      glCtx.shaderSource(shader, source);
      glCtx.compileShader(shader);
      if (!glCtx.getShaderParameter(shader, glCtx.COMPILE_STATUS)) {
        glCtx.deleteShader(shader);
        return null;
      }
      return shader;
    }

    const vs = createShader(gl, gl.VERTEX_SHADER, vsSource);
    const fs = createShader(gl, gl.FRAGMENT_SHADER, fsSource);
    if (!vs || !fs) {
      setHasWebGL(false);
      return;
    }

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      setHasWebGL(false);
      return;
    }

    gl.useProgram(program);

    // Quad geometry
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    const positions = new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

    const aPosition = gl.getAttribLocation(program, "aPosition");
    gl.enableVertexAttribArray(aPosition);
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(program, "uTime");
    const uMouse = gl.getUniformLocation(program, "uMouse");
    const uResolution = gl.getUniformLocation(program, "uResolution");

    let mouseX = 0.5;
    let mouseY = 0.5;
    let targetMouseX = 0.5;
    let targetMouseY = 0.5;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX / window.innerWidth;
      targetMouseY = 1.0 - e.clientY / window.innerHeight;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    let animationFrameId: number;
    let startTime = performance.now();

    const resize = () => {
      if (!canvas || !gl) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = canvas.clientWidth * dpr;
      const height = canvas.clientHeight * dpr;
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        gl.viewport(0, 0, width, height);
      }
    };

    const render = () => {
      if (!gl || !program) return;
      resize();

      const elapsed = (performance.now() - startTime) * 0.001;

      // Mouse smoothing
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      gl.uniform1f(uTime, mediaQuery.matches ? 1.0 : elapsed);
      gl.uniform2f(uMouse, mouseX, mouseY);
      gl.uniform2f(uResolution, canvas.width, canvas.height);

      gl.drawArrays(gl.TRIANGLES, 0, 6);

      if (!mediaQuery.matches) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      mediaQuery.removeEventListener("change", handleMotionChange);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none select-none"
      aria-hidden="true"
    >
      {hasWebGL && !reducedMotion ? (
        <canvas
          ref={canvasRef}
          className="w-full h-full opacity-90 transition-opacity duration-1000"
          style={{ filter: "contrast(1.04) brightness(1.02)" }}
        />
      ) : (
        /* Accessible Fallback when WebGL is unavailable or user has reduced-motion preference */
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="absolute w-[440px] h-[440px] md:w-[620px] md:h-[620px] rounded-full bg-gradient-to-tr from-[#14251B] via-[#879B83]/40 to-[#D7FF7F]/30 blur-3xl opacity-60" />
          <div className="relative w-[280px] h-[280px] md:w-[420px] md:h-[420px] rounded-full bg-radial from-[#879B83]/50 via-[#14251B] to-[#0D1711] shadow-[0_0_80px_rgba(215,255,127,0.22)] border border-[#879B83]/30" />
        </div>
      )}

      {/* Atmospheric lighting gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[420px] bg-gradient-to-b from-[#879B83]/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#0D1711] to-transparent pointer-events-none" />
    </div>
  );
}

