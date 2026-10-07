import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Panels/feature areas (hero, page headers, footer, primary buttons): beige.
        brand: {
          DEFAULT: "#D4CBC4",
          deep: "#C9BEB6",
          dark: "#BCB0A7",
        },
        gold: {
          DEFAULT: "#C5A15B",
          hover: "#D3B06A",
          // Gold for text on beige panels.
          light: "#6A5122",
          // Gold for text on the burgundy page background.
          dark: "#D9BE85",
        },
        // Fixed burgundy for text on gold or beige.
        ink: "#48182F",
        // Text on beige panels.
        warmwhite: "#48182F",
        // Page background, header, cards: burgundy.
        sand: "#48182F",
        ivory: "#5C2840",
        cream: "#6A3149",
        charcoal: "#F3ECE8",
        darktext: "#F3ECE8",
        muted: "#D8C9CF",
        line: "#6E3A52",
        "line-strong": "#8A5670",
        // Secondary text and borders on beige panels.
        mist: "#5A3446",
        slate: "#6E4A5B",
        "line-dark": "#B9AEA6",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        display: ["var(--font-sans)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
      },
      borderRadius: {
        sm: "8px",
        md: "12px",
        lg: "20px",
        xl: "24px",
        "2xl": "28px",
        "3xl": "32px",
      },
      maxWidth: {
        container: "1400px",
        prose: "1280px",
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.02em",
      },
      boxShadow: {
        card: "0 1px 2px rgba(10, 32, 51, 0.04), 0 12px 32px -8px rgba(10, 32, 51, 0.10)",
        "card-hover": "0 2px 4px rgba(10, 32, 51, 0.05), 0 24px 48px -12px rgba(10, 32, 51, 0.18)",
        glow: "0 10px 30px -10px rgba(197, 161, 91, 0.55)",
        nav: "0 1px 0 rgba(10, 32, 51, 0.08)",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
