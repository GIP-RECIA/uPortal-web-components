/* eslint-disable */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

let config = {
  entry: {
    'extended-uportal-header': './src/extended-uportal-header.ts',
    'extended-uportal-header.min': './src/extended-uportal-header.ts',
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
        exclude: [/node_modules/],
        use: [{ loader: 'css-loader' }, { loader: 'sass-loader' }],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [{ loader: 'file-loader' }],
      },
    ],
  },
  resolve: {
    extensions: [
      '.tsx',
      '.ts',
      '.js',
      '.css',
      '.scss',
      '.png',
      '.jpg',
      '.jpeg',
      '.svg',
    ],
    alias: {
      '@helpers': path.resolve(__dirname, 'src/helpers/'),
      '@services': path.resolve(__dirname, 'src/services/'),
      '@styles': path.resolve(__dirname, 'src/styles/'),
      '@locales': path.resolve(__dirname, 'src/locales/'),
      '@images': path.resolve(__dirname, 'src/images/'),
    },
  },
  devServer: {
    allowedHosts: ['.server1.local', '.server2.local'],
    static: {
      directory: path.join(__dirname, 'samples'),
    },
    compress: true,
    port: 8080,
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        include: /\.min\.js$/,
        parallel: true,
        extractComments: false,
      }),
    ],
    sideEffects: true,
  },
};

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    config.plugins = [
      new Dotenv(),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        chunks: ['extended-uportal-header'],
        template: './samples/extended-uportal-header.html',
      })
    ];
  }
  if (argv.mode === 'production') {
    config.plugins = [new Dotenv()];
    if (env.profiling) {
      config.plugins.push(new BundleAnalyzerPlugin());
    }
    if (env.fortest) config.devtool = 'source-map';
  }
  return config;
}
