/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*{html,js}",
  "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        'primary': '#123043',
      },
      fontFamily: {
        "quick-sand": ["Quicksand", "sans-serif"],
      },
      screens: {
        'phone': '414px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}

