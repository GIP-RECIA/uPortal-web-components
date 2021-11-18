/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlMinimizerPlugin = require('html-minimizer-webpack-plugin');

module.exports = {
  entry: {
    'eyebrow-user-info': './src/eyebrow.ts',
    'eyebrow-user-info.min': './src/eyebrow.ts',
  },
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader' }, { loader: 'ts-loader' }],
      },
      {
        test: /\.scss$/,
        use: [{ loader: 'css-loader' }, { loader: 'sass-loader' }],
        exclude: [/node_modules/],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.css', '.scss'],
    alias: {
      '@helpers': path.resolve(__dirname, 'src/helpers/'),
      '@styles': path.resolve(__dirname, 'src/styles/'),
      '@locales': path.resolve(__dirname, 'src/locales/'),
    },
  },
  devServer: {
    static: {
      directory: path.join(__dirname, ''),
    },
    compress: true,
    port: 8080,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './samples/index.html',
      chunks: ['eyebrow-user-info'],
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        include: /\.min\.js$/,
        parallel: true,
        terserOptions: {
          output: {
            comments: false,
          },
        },
      }),
      new HtmlMinimizerPlugin({
        include: /\.min\.js$/,
        parallel: true,
        minimizerOptions: {
          collapseWhitespace: true,
        },
      }),
    ],
  },
};
