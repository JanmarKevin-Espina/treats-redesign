/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./coding/**/*.{html,pug,js}"],
  theme: {
    extend: {
      screens: {
        'sp': '375px',
        'xsmall': '480px',
        'small': '680px',
        'tablet': '767px',
        'medium': '828px',
        'big': '1023px'
      },
      colors: {
        'primary': '#00bbc2',
        'secondary': '#fe632c',
        'crimson': '#dc3545',
        'light-blue': '#2d4357',
        'text-light': '#fff',
        'text-dark': '#000',
        'text-dark-60': '#000000a8',
        'border-line': '#0000001a',
        'product-bg': '#f4f4f4'
      },
      fontFamily: {
        'header': 'Fredoka, sans-serif',
        'text': 'Montserrat, sans-serif'
      }
    },
  },
  plugins: [],
}

