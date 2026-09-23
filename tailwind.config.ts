import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#14130F",
        panel: "#1C1A15",
        panel2: "#232019",
        line: "#39352A",
        cream: "#EDE7DA",
        muted: "#B4AE9F",
        amber: "#E8A33D",
        amberDim: "#8A6326",
        teal: "#2F6B62",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        tightest2: "-0.04em",
      },
      maxWidth: {
        prose2: "68ch",
      },
    },
  },
  plugins: [],
};
export default config;
