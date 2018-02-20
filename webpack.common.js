const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './index.html',
  filename: 'index.html',
  inject: 'body',
  minify: {
    collapseWhitespace: true,
    collapseInlineTagWhitespace: true,
    removeComments: true,
    removeRedundantAttributes: true
  }
});

const srcDir = path.resolve(__dirname, 'src');
const buildDir = path.resolve(__dirname, 'dist');

module.exports = {
  context: srcDir,
  entry: './app.js',
  target: 'web',
  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['.js', 'jsx', '.json'],
    enforceExtension: false
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react']
        }
      },
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  output: {
    path: buildDir,
    filename: '[hash:6].bundle.js'
  },
  plugins: [
    HtmlWebpackPluginConfig,
    new CleanWebpackPlugin(['dist'])
  ]
};
