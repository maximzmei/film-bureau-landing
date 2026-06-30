import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#F5C400",
        ink: "#0A0A0A",
        muted: "#6B6B6B",
      },
      fontFamily: {
        sans: ["var(--font-nunito)", "sans-serif"],
        display: ["var(--font-great-vibes)", "cursive"],
      },
    },
  },
};

export default config;
