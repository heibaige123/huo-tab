const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');

module.exports = merge(baseConfig, {
  mode: 'production',
  plugins: [new CssMinimizerWebpackPlugin()],
  splitChunks: {
    cacheGroups: {
      vendors: {
        test: /node_modules/,
        name: 'vendors',
        minChunks: 1,
        chunks: 'initial',
        minSize: 0,
        priority: 1,
      },
      commons: {
        name: 'commons',
        minChunks: 2,
        chunks: 'initial',
        minSize: 0,
      },
    },
  },
});
