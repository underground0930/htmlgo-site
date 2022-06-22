/** @type {import('tailwindcss').Config} */

const fontSize = require('./tailwind.fontSize')
const spacing = require('./tailwind.spacing')

module.exports = {
  mode: 'jit',
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize,
    margin: ({ theme }) => ({
      auto: 'auto',
      ...spacing,
    }),
    padding: spacing,
    colors: {
      linkActive: '#339fef',
      main: '#24292e',
      base: '#fff',
      font: '#000',
      btn: '#000',
      btnIcon: '#fff',
      footerText: '#fff',
      loader: '#333333',
      border: '#ccc',
    },
    container: {
      center: true,
    },
    extend: {},
  },
  variants: {},
  plugins: [],
}
