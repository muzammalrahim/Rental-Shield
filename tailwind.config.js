module.exports = {
  // purge: [],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray: {
        light: '#606060',
        DEFAULT: '',
        dark: '',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
