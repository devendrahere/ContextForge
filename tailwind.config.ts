import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0b1020",
        surface: "#111833",
        panel: "#172042",
        accent: "#7dd3fc",
        accentSoft: "#1b355f",
        text: "#e6edf7",
        muted: "#9fb0cc",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(125, 211, 252, 0.16), 0 24px 80px rgba(0, 0, 0, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;