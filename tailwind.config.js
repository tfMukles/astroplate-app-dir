const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "540px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        gray: "#555555",
        heading: "#040404",
        primary: "#111111",
      },
      fontFamily: {
        sans: [
          "var(--font-heebo)",
          "Open Sans",
          ...defaultTheme.fontFamily.sans,
        ],
        title: [
          "var(--font-signika)",
          "Open Sans",
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
  },
  plugins: [],
};
