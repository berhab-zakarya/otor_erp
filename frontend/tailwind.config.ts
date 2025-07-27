import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        heading: ["var(--font-heading)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      colors: {
        primary: "var(--color-primary)",
        "primary-muted": "var(--color-primary-muted)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        "texts-black": "var(--texts-black)", 
      },
    },
  },
  plugins: [],
};

export default config;
