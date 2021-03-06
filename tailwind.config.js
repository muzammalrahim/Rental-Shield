const colors = require("tailwindcss/colors");

module.exports = {
  // purge: [],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minWidth: {
      0: "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%",
      550: "550px",
    },
    fontSize: {
      sm: "0.875rem", //14px
      f15: "0.9375rem", //15px
      base: "1rem", // 16px

      lg: "1.13rem", // 18px
      xl: "1.44rem", // 20px

      lg: "1.125rem", // 18px
      xl: "1.25rem", // 20px
      xll: "1.375rem", //22px
      "2x": "1.4375rem", //23px
      "2xl": "1.5rem", // 24px
      "2lx": "1.5625rem", // 25px
      "2xx": "1.625rem", // 26px
      "3xl": "1.875rem", // 30px
      "4xl": "2.25rem", // 36px
      "5x": "2.5rem", //40px
      "5xx": "2.8125rem", //45px
      "5xl": "3rem", // 48px
      "6xl": "3.75rem", // 60px
      normal: "18px",
    },
    extends: {
      zIndex: {
        "-10": "-10",
      },
    },
    colors: {
      black: "#000000",
      green: {
        200: "#7fc940",
        400: "#609732",
        500: "#87ED31",
        600: "#72C92A",
        700: "#DFF8C9",
        800: "#F3FDEA",
        900: "#72C92A",
        800: "#F3FDEA",
      },
      gray: {
        200: "#E5E5E5",
        400: "#8C8B8B",
        500: "#606060",
        600: "#F9F9F9",
        700: "#F6F6F6",
        800: "#F4F4F4",
        900: "#E4E4E4",
      },
      silver: {
        50: "#E5E7EB",
        100: "#E6E7E8",
        600: "#F9F9F9",
      },
    },
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      50: "50%",
      16: "4rem",
    },

    fontFamily: {
      body: ["Roboto"],
    },
  },
  screens: {
    xs: { min: "320px", max: "639px" },

    sm: { min: "640px", max: "991px" },

    md: "768px",
    // => @media (min-width: 768px) { ... }

    //'mid': {'min': '601px', 'max': '1023px'},

    lg: "1024px",
    // => @media (min-width: 1024px) { ... }

    xl: "1280px",
    // => @media (min-width: 1280px) { ... }

    "2xl": "1536px",
    // => @media (min-width: 1536px) { ... }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
