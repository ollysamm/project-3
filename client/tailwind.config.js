/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        comfortaa: ["Comfortaa", "cursive"],
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        sofiapro: ["sofiapro", "sans-serif"],
      },

      colors: {
        primary: "#180C49",
        secondary: "#ADCEC2",
        lightpink: "#E6D0EC",
        lightblue: "#463d6d",
        gray: "#747476",
        whitelight: "#fcfcfc",
        blue: "#5703AB",
        graywhite: "#F1E7F3",
        brown: "#422929",
        lightblack: "#1D2B3C",
      },

      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }

        "3xl": "1800px",
        // => @media (min-width: 1800px) { ... }
      },
    },
  },
  plugins: [],
};
