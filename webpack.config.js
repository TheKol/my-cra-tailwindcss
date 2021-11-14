// const path = require('path');
// const webpack = require('webpack');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const HtmlWebPackPlugin = require('html-webpack-plugin');

// module.exports = {
//   entry: './src/index.js',
//   mode: 'development',
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /(node_modules)/,
//         loader: 'babel-loader',
//         options: {
//           presets: ['@babel/env'],
//         },
//       },
//       {
//         test: /\.css$/,
//         use: [MiniCssExtractPlugin.loader, 'style-loader', 'css-loader'],
//       },
//     ],
//   },
//   plugins: [
//     new MiniCssExtractPlugin({
//       filename: 'styles.css',
//       chunkFilename: 'styles.css',
//     }),
//     new HtmlWebPackPlugin({
//       template: './public/index.html',
//       filename: './index.html',
//     }),
//   ],
//   resolve: {
//     extensions: ['*', '.js', '.jsx'],
//   },
//   output: {
//     path: path.resolve(__dirname, 'dist/'),
//     publicPath: '/dist/',
//     filename: 'bundle.js',
//   },
//   devServer: {
//     static: {
//       directory: path.join(__dirname, 'public/'),
//     },
//     port: 3000,
//     devMiddleware: {
//       publicPath: 'https://localhost:3000/dist/',
//     },
//     hot: 'only',
//   },
// };

const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css',
      chunkFilename: 'styles.css',
    }),
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
  ],
};
