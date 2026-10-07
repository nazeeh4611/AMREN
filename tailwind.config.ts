import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#48182F",
          deep: "#3A1226",
          dark: "#2A0C1B",
        },
        gold: {
          DEFAULT: "#C5A15B",
          light: "#D5BB82",
          dark: "#6A5122",
        },
        warmwhite: "#FFFFFF",
        sand: "#D4CBC4",
        ivory: "#C8BEB6",
        cream: "#BFB4AC",
        charcoal: "#1B1D1F",
        darktext: "#252525",
        muted: "#4A4A52",
        line: "#B9AEA6",
        "line-strong": "#A89D95",
        // Solid tones for use on brand (maroon) backgrounds (no transparency).
        mist: "#E6D6DD",
        slate: "#B79AA7",
        "line-dark": "#5C2B42",
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
