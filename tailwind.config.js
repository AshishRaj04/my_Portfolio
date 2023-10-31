/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#222831",
        secondary: "#413543",
        tertiary: "#53C1DE",
        quatenary: "#F9F7F7",
        pentanary: "#EEEEEE"
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },

      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },

      fontFamily:{
        'custom': ['Grenze Gotisch', 'serif'],
      },
      fill: {
        'primary': '#222831', // Replace with your desired black color
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/background.jpg')",
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      }
    },
  },
  plugins: [],
};
