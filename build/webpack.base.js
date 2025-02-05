const path = require('path');

const { getResolveAlias } = require('./utils/getResolveAlias');
const { getBaseModules } = require('./utils/getModules');
const { getPlugins } = require('./utils/getPlugins');

/** @type {import('webpack/types.d.ts').Configuration} */
module.exports = {
  entry: {
    newtab: path.resolve(__dirname, '../packages/newtab/index.tsx'),
    popup: path.resolve(__dirname, '../packages/popup/index.tsx'),
  },
  output: {
    filename: 'static/js/[name].js',
    path: path.join(__dirname, '../dist'),
    clean: true, //webapck5内置的，webpack4中需要配置clean-webpack-plugin来删除之前的dist
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.tsx', '.ts'],
    alias: getResolveAlias(),
  },
  // cache: {
  //   type: 'filesystem',
  // },
  plugins: getPlugins(),
  module: getBaseModules(),
};
