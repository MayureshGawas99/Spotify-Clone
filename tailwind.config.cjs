/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "green" : "#1DB954",
        "black-base" : "#121212",
        "black-primary" : "#191414",
        "black-secondary" : "#171818",
        "light-black" : "#282828",
        "primary" : "#FFFFFF",
        "gray" : "#535353",
        "secondary" : "#b3b3b3"

      },
      gridTemplateColumns: {
        'auto-fill-cards': "repeat(auto-fill,minmax(200px,1px))"
      }
    },
  },
  plugins: [require('@tailwindcss/line-clamp'),],
}
