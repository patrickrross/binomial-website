import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0a0a0a",
        "bg-alt": "#0d0d0d",
        surface: "#141414",
        border: "#222222",
        accent: "#8c52ff",
        "accent-hover": "#9d6aff",
        "text-primary": "#ffffff",
        "text-secondary": "#999999",
        "text-muted": "#666666",
      },
      fontFamily: {
        serif: ["Instrument Serif", "Georgia", "serif"],
        mono: ["PP Mondwest", "Space Mono", "monospace"],
        sans: ["Roboto Condensed", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1100px",
      },
    },
  },
  plugins: [],
};

export default config;
