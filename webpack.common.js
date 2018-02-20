const path = require('path');
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
      }
    ]
  },
  output: {
    path: buildDir,
    filename: 'bundle.[hash:6].js'
  },
  plugins: [HtmlWebpackPluginConfig]
};
