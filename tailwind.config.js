/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      boxShadow:{
        'header':'1px 4px 5px #000000015',
      },
      colors: {
        'light-pink': '#FAF3EA',
        'gray': '#898989',
        'light-gray': '#9F9F9F',
      },
      height: {
        'custom': '3.8rem',
      },
    },
  },
  plugins: [],
}
