/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ["./templates/**/*.twig",
            "./templates/**/*",      
],
  options: {
    prefix: 'tw-',
    important: true,
},
  theme: {
    extend: {
      colors: {
        'primary': colors.red,
        'secondary': colors.blue,
      }
    },
  },
  plugins: [],
}

