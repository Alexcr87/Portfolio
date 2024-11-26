import type { Config } from "tailwindcss";


const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 0px rgba(255, 255, 255, 0.7)' },
          '100%': { boxShadow: '0 0 15px 5px rgba(255, 255, 255, 0.7)' },
        },
      },
      animation: {
        "spin-slow": "spin 3s linear infinite", // Animación lenta
        "spin-fast": "spin 0.5s linear infinite", // Animación rápida
        glow: 'glow 1.5s ease-in-out infinite'
      },
      colors: {
        colorSombra:"#133062",
        colorLogo:"#2272FF",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primaryColor: "var(--primary-color)",
        secundaryColor: "var(--secundary-color)",
        tertiaryColor: "var(--tertiary-color)",
        cuartiaryColor: "var(--cuartiary-color)"
      },
      fontFamily: {
        tourney: ['Tourney', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;

