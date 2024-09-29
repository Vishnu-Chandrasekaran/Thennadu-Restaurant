/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#5d60c1",
        dark:"#1e1e1e",
        light:"#f5f5f5",
        lightBlue:"#dbedf7",
        primaryMaroon:"#8a1538"
      },
      fontFamily:{
        sans: ["Poppins", "sans-serif"],
        cursive: ["Allura", "cursive"]
      },
      container:{
        center:true,
        padding:{
          DEFAULT: '1rem',
          sm: "3rem"
        }
      }
    },
  },
  plugins: [],
}

