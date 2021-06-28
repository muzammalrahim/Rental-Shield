const colors = require('tailwindcss/colors')

module.exports = {
  // purge: [],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extends: {
      

    },
    colors: {
      gray: '#606060',
      green: '#72C92A',
      lightgreen: '#F3FDEA'

      // 'atlantis': {  
      //   DEFAULT: '#72C92A',  
      //   '50': '#EBF9E0',  
      //   '100': '#DEF4CB',  
      //   '200': '#C2EBA1',  
      //   '300': '#A7E277',  
      //   '400': '#8CDA4C',  
      //   '500': '#72C92A',  
      //   '600': '#5A9F21',  
      //   '700': '#427518',  
      //   '800': '#2A4A10',  
      //   '900': '#122007'
      // },

      // 'scorpion': 
      // {  
      //   DEFAULT: '#606060',  
      //   '50': '#D3D3D3',  
      //   '100': '#C6C6C6',  
      //   '200': '#ADADAD',  
      //   '300': '#939393',  
      //   '400': '#7A7A7A',  
      //   '500': '#606060',  
      //   '600': '#474747',  
      //   '700': '#2D2D2D',  
      //   '800': '#141414',  
      //   '900': '#000000'
      // },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
