const colors = require('tailwindcss/colors')

module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        royalblue: "hsl(241,89%,60%)",
        whitesmoke: "hsl(219,14%,95%)",
        darkslategray: "hsl(0,0%,23%)",
        gray: "hsl(0,0%,46%)",
        darkgray: "hsl(0,0%,59%)",
        sandybrown: "hsl(32,95%,60%)",

      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};