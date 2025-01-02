const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

/** @type {import('webpack/types.d.ts').Configuration} */
module.exports = {
  entry: path.resolve(__dirname, '../src/newtab/index.tsx'),
  output: {
    filename: 'static/js/[name].js', //每个输出的js文件的名称
    path: path.join(__dirname, '../dist'), //打包结果输出的路径
    clean: true, //webapck5内置的，webpack4中需要配置clean-webpack-plugin来删除之前的dist
    publicPath: '/', //打包后文件的公共前缀路径
  },
  resolve: {
    extensions: ['.js', '.tsx', '.ts'],
    alias: {
      '@/*': path.resolve(__dirname, '../src/*'),
      '@style/*': path.resolve(__dirname, '../src/assets/style/*'),
      '@img/*': path.resolve(__dirname, '../src/assets/images/*'),
    },
  },
  cache: {
    type: 'filesystem', // 使用文件缓存
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'), //模板用定义root节点的模板
      inject: true, //自动注入静态资源
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../public'), // 复制public下文件
          to: path.resolve(__dirname, '../dist'), // 复制到dist目录中
          filter: (source) => {
            return !source.includes('index.html'); // 忽略index.html
          },
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /.(ts|tsx)$/,
        use: ['thread-loader', 'babel-loader'],
      },
      {
        test: /.(ts|tsx)$/, //匹配ts、tsx文件
        use: {
          loader: 'babel-loader',
          options: {
            //预设执行顺序由右往左，所以这里是先处理ts再处理jsx
            presets: ['@babel/preset-react', '@babel/preset-typescript'],
          },
        },
      },
      {
        test: /.(css|scss)$/, //匹配 css和scss 文件
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /.(png|jpg|jpeg|gif|svg)$/, // 匹配图片文件
        type: 'asset', // type选择asset
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 小于10kb转base64位
          },
        },
        generator: {
          filename: 'static/images/[name][ext]', // 文件输出目录和命名
        },
      },
    ],
  },
};
