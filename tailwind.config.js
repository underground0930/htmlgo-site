/** @type {import('tailwindcss').Config} */

const fontSize = require('./tailwind.fontSize')

module.exports = {
  mode: 'jit',
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize,
    container: {
      center: true,
    },
    extend: {
      colors: {
        linkActive: '#339fef',
        main: '#24292e',
        base: '#fff',
        font: '#000',
        btn: '#000',
        btnIcon: '#fff',
        footerText: '#fff',
        loader: '#333333',
        border: '#dddddd',
      },
    },
  },
  variants: {},
  plugins: [],
}
