/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './assets/js/**/*.js',
    './*.php',
    './woocommerce/**/*.php',
  ],
  theme: {
    letterSpacing: {
      tight: '-0.02em',
    },
    colors: {
      transparent: "transparent",
      white: {
        DEFAULT: "#F8FAFC",
        true: "#FFFFFF",
      },

      yellow: "#FFE500",
      purple: {
        default: "#5B00BF",
        darkest: "#140128",
      },
      blackTxt: "#303030",
    },
    fontFamily: {
      'montserrat': 'Montserrat, sans-serif'
    },
    extend: {
      fontSize: {
        'text-2lg': ['22px', ''],
      }
    },
  },
  plugins: [],
};