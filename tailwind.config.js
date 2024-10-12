/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        backGround: "#c2c2c2",
        primary: "#1a6aff",
        secondry: "#8b8cd6",
        secondryLight: "#a2a3e9",
      },
    },
  },
  plugins: [],
};
