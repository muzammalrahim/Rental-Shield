const colors = require('tailwindcss/colors')


module.exports = {
  // purge: [],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize:{
      'base': '1rem',
      'lg':'1.125rem',
      'xl':'1.25rem',
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
      gray: '#606060',
      green: '#72C92A',
      pale: '#F3FDEA',
      black:'#000000'
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
