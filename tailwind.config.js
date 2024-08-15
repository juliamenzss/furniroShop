/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': {'max': '435px'},
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      boxShadow:{
        'header':'1px 4px 5px #000000015',
      },
      colors: {
        'light-pink': '#FAF3EA',
        'light-salmon': '#F9F1E7',
        'gray': '#898989',
        'light-gray': '#9F9F9F',
        'silver-gray': '#F4F5F7',
      },
      height: {
        'custom': '3.8rem',
      },
    },
  },
  plugins: [],
}
