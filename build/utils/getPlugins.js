const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const LinkTypePlugin =
  require('html-webpack-link-type-plugin').HtmlWebpackLinkTypePlugin;
const path = require('path');

const urlPrefix = '../..';

function getPlugins() {
  return [
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].css',
      chunkFilename: '[id].css',
    }),
    new LinkTypePlugin({
      '*.css': 'text/css',
      '*.js': 'text/javascript',
      '*.png': 'image/png',
      '*.jpg': 'image/jpeg',
      '*.jpeg': 'image/jpeg',
      '*.gif': 'image/gif',
      '*.webp': 'image/webp',
      '*.bmp': 'image/bmp',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(
        __dirname,
        `${urlPrefix}/public/newtab/index.html`
      ),
      inject: true,
      filename: 'newtab/index.html',
      chunks: ['vendors', 'common', 'newtab'],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, `${urlPrefix}/public/popup/index.html`),
      inject: true,
      filename: 'popup/index.html',
      chunks: ['vendors', 'common', 'popup'],
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, `${urlPrefix}/public`),
          to: path.resolve(__dirname, `${urlPrefix}/dist`),
          filter: (source) => {
            return !source.includes('index.html');
          },
        },
      ],
    }),
  ];
}

module.exports = {
  getPlugins,
};
