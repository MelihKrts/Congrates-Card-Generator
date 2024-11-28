/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      container:{
        center:true
      },
      boxShadow:{
        custom: "0 0 0 0.2rem rgba(0, 90, 125, 0.25)",
      },

      screens: {
        xs:"480px",
      },
    },
  },
  plugins: [],
}

