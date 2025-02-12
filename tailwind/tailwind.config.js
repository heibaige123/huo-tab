const plugin = require('tailwindcss/plugin');
const theme = require('./theme');
const components = require('./components');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./packages/**/*.{ts,tsx,css}', './public/**/*.{html}'],
  theme,
  plugins: [
    require('tailwindcss-animate'),
    require('tailwind-scrollbar'),
    plugin(function ({ addComponents }) {
      addComponents(components);
    }),
  ],
};
