module.exports = {
  // purge: [],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extends: {
      colors: {

        'atlantis': {  
          DEFAULT: '#72C92A',  
          '50': '#EBF9E0',  
          '100': '#DEF4CB',  
          '200': '#C2EBA1',  
          '300': '#A7E277',  
          '400': '#8CDA4C',  
          '500': '#72C92A',  
          '600': '#5A9F21',  
          '700': '#427518',  
          '800': '#2A4A10',  '900': '#122007'
        },
      }

    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
