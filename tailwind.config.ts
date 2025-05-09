import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // enables dark mode toggle
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ["var(--font-lato)", "sans-serif"],
        opensans: ["var(--font-open-sans)", "sans-serif"],
        playfair: ["var(--font-playfair)", "serif"],
      },
      colors: {
        primary: "#0d9488", // teal
        secondary: "#8b5cf6", // purple
        dark: "#000000",
      },
      backgroundImage: {
        gradient: "linear-gradient(to bottom right, #0d9488, #8b5cf6, #000000)",
      },
    },
  },
  plugins: [],
};

export default config;
