/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
export default {
  content: ["./*.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      articulat: ["Articulat CF", "sans-serif"],
    },
    extend: {
      colors: {
        transparent: "transparent",
        current: "#62697C",
        green: "#2CA58D",
        black: colors.black,
        white: colors.white,
        primary: "#2CA58D",
        red: "#FC1154",
        blue: "#0E3B74",
        yellow: "#F6C344",
      },
    },
    variants: {
      extend: {
        margin: ["first", "last"],
        padding: ["first", "last"],
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
};
