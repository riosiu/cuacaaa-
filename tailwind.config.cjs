/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fira : ['Fira Code' , 'monospace'],
        nunito : ['Nunito' , 'sans-serif'],
      },
      colors :{
        'header' : '#144272',
        'footer' : '#0A2647',
        'card' : '#262f44',
        'forecast-color' :'#302644'
      }
    },
  },
  plugins: [],
}