/** @type {import('tailwindcss').Config} */

// stab
// https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js

const { zIndex, fontSize, spacing } = require('./tailwind.custom')

module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/hooks/**/*.{js,ts,jsx,tsx}',
    './node_modules/react-tailwindcss-select/dist/index.esm.js',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
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
    extend: {
      keyframes: {
        load8: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      fontSize: {
        ...fontSize(),
      },
      margin: ({ theme }) => ({
        auto: 'auto',
        ...spacing(),
      }),
      padding: spacing,
      zIndex: {
        auto: 'auto',
        ...zIndex(),
      },
      borderWidth: {
        default: '1px',
        0: '0',
        1: '1px',
        2: '2px',
        3: '3px',
        4: '4px',
        5: '5px',
        6: '6px',
      },
    },
  },
  plugins: [],
}
