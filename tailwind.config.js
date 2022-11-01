/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        Playfair: "'Playfair Display', serif",
        Nunito: "'Nunito Sans', sans-serif",
      }
    },
  },
  plugins: [],
}
