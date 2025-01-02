const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');

module.exports = merge(baseConfig, {
  mode: 'production', //生产模式下，会开启tree-shaking和压缩代码，以及其他优化
  plugins: [
    new CssMinimizerWebpackPlugin(),
  ],
});
