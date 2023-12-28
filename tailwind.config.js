/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        // primary: "#222831",
        // secondary: "#413543",
        // tertiary: "#53C1DE",
        // quatenary: "#F9F7F7",
        // pentanary: "#EEEEEE"
        background: "#1B1B1F",
        textColor: "#DFDFD6",
        textHover:"#8981DB",
        card: "#202127",
        buttonBg: "#2B2F36",
        buttonHover: "#414853",
        buttonFocus: "#747BFF",
        icon: "#DFDFD7",
        paragraph: "#9A9AA3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },

      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },

      fontFamily: {
        grenze: ["Grenze Gotisch", "serif"],
        poppins:['Poppins', 'sans-serif']
      },
      fill: {
        primary: "#222831",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/background.jpg')",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
    },
  },
  plugins: [],
};
