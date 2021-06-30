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
      pale: '#F3FDEA',
      black:'#000000'
    }
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
