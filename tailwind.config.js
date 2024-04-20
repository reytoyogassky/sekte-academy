/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#114232',
        secondary:'#FCDC2A',
      },
      container:{
        center: true,
        padding:{
          DEFAULT: "1rem",
          sm: "3rem",
        }
      }
    },
    fontFamily:{
      body:['Inter'],
    }
  },
  plugins: [],
}