const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

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
        loader: 'babel-loader'
      },
      {
        test: /\.s?css/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        }),
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: '2000',
            name: '[name].[hash:6].[ext]',
          },
        }],
      }
    ]
  },
  output: {
    path: buildDir,
    filename: 'bundle.[hash:6].js'
  },
  plugins: [
    HtmlWebpackPluginConfig,
    new CleanWebpackPlugin(['dist']),
    new ExtractTextPlugin('styles.css'),
    new OpenBrowserPlugin({url: 'http://localhost:8080'})
  ]
};
