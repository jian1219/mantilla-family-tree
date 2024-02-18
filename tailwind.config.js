/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'cp': {'min': '400px', 'max': '450px'},
    },

    extend: {},
  },
  plugins: [],
}

