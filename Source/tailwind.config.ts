import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        auren: {
          bg: "#08070D",
          elevated: "#111018",
          surface: "#15131D",
          "surface-hover": "#1B1728",
          border: "rgba(255, 255, 255, 0.12)",
          "border-focus": "rgba(141, 69, 255, 0.45)",
          primary: "#762BFF",
          "primary-bright": "#8D45FF",
          "primary-deep": "#3B087F",
          lavender: "#C8A8FF",
          text: "#F8F7FC",
          muted: "#C5C0D0",
          subtle: "#8E889B",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
      },
      animation: {
        "pulse-subtle": "pulseSubtle 6s ease-in-out infinite",
        "float-slow": "floatSlow 8s ease-in-out infinite",
      },
      keyframes: {
        pulseSubtle: {
          "0%, 100%": { opacity: "0.65", transform: "scale(1)" },
          "50%": { opacity: "0.95", transform: "scale(1.05)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
