const MiniCssExtractPlugin = require('mini-css-extract-plugin');

function getBaseModules() {
  return {
    rules: [
      {
        test: /.(ts|tsx)$/,
        use: [
          'thread-loader',
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react', '@babel/preset-typescript'],
            },
          },
        ],
      },
      {
        test: /\.module\.scss$/, // 匹配以 .module.scss 结尾的文件
        use: [
          MiniCssExtractPlugin.loader, // 将 CSS 插入到页面
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]', // 类名生成规则
                auto: true,
                namedExport: false, // 确保 namedExport 为 false
                exportLocalsConvention: 'as-is',
              },
              import: true,
              esModule: true,
            },
          },
          'postcss-loader',
          'sass-loader', // 将 SCSS 编译为 CSS
        ],
      },
      {
        test: /\.scss$/, // 匹配普通 SCSS 文件
        exclude: /\.module\.scss$/, // 排除 CSS Modules 文件
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.module\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]',
                auto: true,
                namedExport: false, // 确保 namedExport 为 false
                exportLocalsConvention: 'as-is',
              },
              import: true,
              esModule: true,
            },
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.css$/,
        exclude: /\.module\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /.(png|jpg|jpeg|gif|svg)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024,
          },
        },
        generator: {
          filename: 'static/images/[name][ext]',
        },
      },
      {
        test: /.(woff2?|eot|ttf|otf)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024,
          },
        },
        generator: {
          filename: 'static/fonts/[name][ext]',
        },
      },
      {
        test: /.(mp4|webm|ogg|mp3|wav|flac|aac)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024,
          },
        },
        generator: {
          filename: 'static/media/[name][ext]',
        },
      },
    ],
  };
}

module.exports = {
  getBaseModules,
};
