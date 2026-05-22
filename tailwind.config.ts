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
        // Core brand palette
        brand: {
          purple:    "#6B21A8",   // deep violet
          "purple-mid": "#7C3AED",
          violet:    "#4C1D95",
          "violet-dark": "#2E1065",
          magenta:   "#C026D3",
          pink:      "#DB2777",
          "pink-light": "#F472B6",
          cream:     "#FFF8E7",
          "cream-warm": "#F5E6C8",
          black:     "#0A0A0A",
          "purple-glow": "#A855F7",
        },
        quiz: {
          card:      "#3B1F6E",
          border:    "#6D28D9",
          hover:     "#5B21B6",
          answer:    "#1E0A3C",
        },
      },
      fontFamily: {
        // Replace with actual fonts via Google Fonts or local files
        display:   ["'Bebas Neue'", "Impact", "sans-serif"],
        heading:   ["'Anton'", "Impact", "sans-serif"],
        body:      ["'DM Sans'", "system-ui", "sans-serif"],
        editorial: ["'Playfair Display'", "Georgia", "serif"],
        mono:      ["'Space Mono'", "monospace"],
      },
      backgroundImage: {
        // Hero gradient replicating dark purple/violet cinematic scene
        "hero-gradient": "linear-gradient(135deg, #0A0020 0%, #1A0050 30%, #2D0080 60%, #150040 100%)",
        "quiz-gradient": "linear-gradient(135deg, #2D0060 0%, #6B21A8 50%, #C026D3 100%)",
        "result-gradient": "linear-gradient(135deg, #1A0040 0%, #3B1F6E 40%, #6B21A8 100%)",
        "card-gradient":   "linear-gradient(180deg, rgba(107,33,168,0.4) 0%, rgba(76,29,149,0.8) 100%)",
        "glow-purple":     "radial-gradient(ellipse at center, rgba(168,85,247,0.3) 0%, transparent 70%)",
        "glow-magenta":    "radial-gradient(ellipse at center, rgba(192,38,211,0.25) 0%, transparent 60%)",
        "announcement":    "linear-gradient(90deg, #FFF8E7 0%, #F5E6C8 100%)",
      },
      boxShadow: {
        "glow-purple": "0 0 30px rgba(168,85,247,0.5), 0 0 60px rgba(168,85,247,0.2)",
        "glow-pink":   "0 0 20px rgba(219,39,119,0.6), 0 0 40px rgba(219,39,119,0.2)",
        "glow-sm":     "0 0 12px rgba(168,85,247,0.4)",
        "card-hover":  "0 8px 40px rgba(107,33,168,0.6)",
        "vinyl":       "0 20px 60px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.05)",
      },
      animation: {
        "float":        "float 6s ease-in-out infinite",
        "float-slow":   "float 9s ease-in-out infinite",
        "float-fast":   "float 4s ease-in-out infinite",
        "glow-pulse":   "glowPulse 3s ease-in-out infinite",
        "spin-slow":    "spin 20s linear infinite",
        "fade-up":      "fadeUp 0.6s ease forwards",
        "slide-in":     "slideIn 0.4s ease forwards",
        "marquee":      "marquee 30s linear infinite",
        "shimmer":      "shimmer 2s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "33%":      { transform: "translateY(-12px) rotate(2deg)" },
          "66%":      { transform: "translateY(-6px) rotate(-1deg)" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.6", filter: "blur(20px)" },
          "50%":      { opacity: "1",   filter: "blur(30px)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          from: { opacity: "0", transform: "translateX(-20px)" },
          to:   { opacity: "1", transform: "translateX(0)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to:   { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      borderRadius: {
        "quiz": "12px",
      },
    },
  },
  plugins: [],
};

export default config;
