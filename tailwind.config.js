/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        'bgLight': '#9B8C76'
      },
      gridRow: {
        'span-16': 'span 16 / span 16',
      }
    },
  },
  plugins: [],
}
