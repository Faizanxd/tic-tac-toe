/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        body:['Nunito']
       
      },
      gridTemplateColumns:{
        '3': 'repeat(3,6rem)'
    },
    gridTemplateRows:{
      '3': 'repeat(3,6rem);'
  },
    },
  },
  plugins: [],
}
