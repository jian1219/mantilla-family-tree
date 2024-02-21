/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'cp': {'min': '350px', 'max': '450px'},
      'tablet': '451px',
      'tablet2': '700px',
      'laptop': '900px',
      'adjust': '1300px'
      
     
      
    },

    extend: {},
  },
  plugins: [],
}

