/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "#FF5F0F",
        black: "#1D1D1B",
        paper: "#F4F3E6",
        white: "#FFFFFF",
      },
      fontFamily: {
        heading: ["var(--font-titillium-web)", "sans-serif"],
        body: ["var(--font-goudy-old-style)", "serif"],
        signature: ["var(--font-lavishly-yours)", "cursive"],
      },
    },
  },
  plugins: [],
};
