// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // --- YOUR EXISTING COLORS ---
        iraPrimary: "#cdd5a2",
        iraBg: "#e0e5c4",
        iraBrown: "#8d6554",
        iraDark: "#333333",
        // --- NEW ADDITIONS (From the 'About' Section) ---
        primary: "#6A8A2C",  // The dark text green
        secondary: "#CDE244", // The bright lime border green
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"],
        gotham: ["var(--font-gotham)", "sans-serif"],
      },

      height: {
        hero: "600px",
        heroMd: "760px",
        heroLg: "820px",
      },

      fontSize: {
        heroTitle: "32px",
        heroTitleMd: "48px",
        heroTitleLg: "60px",

        heroSub: "18px",
        heroSubMd: "22px",

        heroBtn: "15px",
      },

      lineHeight: {
        heroTitle: "1.25",
      },
    },
  },
  plugins: [],
};