module.exports = {
  plugins: {
    'postcss-preset-env': require('postcss-preset-env'),
    'autoprefixer': require('autoprefixer'),
    tailwindcss: {
      config: './tailwind/tailwind.config.js',
    },
  },
};
