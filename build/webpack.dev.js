const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  plugins: [new ReactRefreshWebpackPlugin(), new FriendlyErrorsWebpackPlugin()],
  devServer: {
    port: 9999,
    hot: true,
    compress: false,
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, '../public'),
    },
    open: true,
  },
});
