const colors = require('tailwindcss/colors')


module.exports = {
  // purge: [],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minWidth: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
     },
    fontSize:{
      'base': '1rem',
      'lg':'1.125rem',
      'xl':'1.25rem',
      '2x': '1.4375rem',
      '2xl':'1.5rem',
      '2xx': '1.625rem',
      '3xl':'1.875rem',
      '4xl':'2.25rem',
      '5xl':'3rem',
      '6xl':'3.75rem'
    },
    extends: {
      
    },
    colors: {
      
      black:'#000000',
      lightgreen:'#DFF8C9',
      green:{
        200: '#7fc940',
        400: '#609732',
        500: '#87ED31',
        600: '#72C92A',
        700: '#DFF8C9',
        800: '#F3FDEA',
        900:'#72C92A',

      },
      gray:{
        400: '#8C8B8B',
        500: '#606060',
        600:'#F9F9F9',
      },
      silver:{
        50:'#E5E7EB',
        100:'#E6E7E8',
      }
    },

    fontFamily: {
      'body': ['Roboto']
    },
    
  },
  screens: {
    'xs': {'min': '320px', 'max': '639px'},

    'sm': {'min': '640px','max': '991px'},

    'md': '768px',
    // => @media (min-width: 768px) { ... }

    'lg': '1024px',
    // => @media (min-width: 1024px) { ... }

    'xl': '1280px',
    // => @media (min-width: 1280px) { ... }

    '2xl': '1536px',
    // => @media (min-width: 1536px) { ... }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
