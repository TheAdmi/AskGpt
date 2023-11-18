/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'linen': '#FAE3E1',
        'cotton': '#F5E7C6',
        'tangerine': '#FF6D1F',
        'black-hole': '#222222',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}

