/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      warmGray: colors.warmGray,
      lightBlue: colors.lightBlue,
      trueGray: colors.trueGray,
      coolGray: colors.coolGray,
      blueGray: colors.blueGray,
      orange: colors.orange,
      'addnewsbgstart': '#485563',
      'addnewsbgend':'#29323C',

      'dark-bg': '#222831',
      'dark-selected-bg': '#393E46',
      'dark-text': '#EEEEEE',
      'dark-primary': '#00ADB5',

      'light-bg': '#FEFAF6',
      'light-selected-bg': '#BBE9FF',
      'light-text': '#112D4E',
      'light-primary': '#B1AFFF',

    }
  },
  plugins: [],
}
