/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}","./src/**/*.{css,html}",],
  theme: {
    screens: {
      sm: "420px",

      md: "650px",

      lg: "1000px",

      xl: "1200px",

      "2xl": "1636px",
    },
    extend: {
      colors: {
      primary:"rgb(146,195,73)",
      black: "#2a2829",
      },
      fontFamily: {
        title: ["Montserrat", "sans-serif"],
        title2: ["Orbitron", "system-ui"],
        text: ["Varela Round", "sans-serif"],
        text2: ["Kanit", "sans-serif"],
        text3: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};