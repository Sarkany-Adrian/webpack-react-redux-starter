const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const dist = path.resolve(__dirname, 'dist');

module.exports = merge(common, {
  devServer: {
    contentBase: dist,
    historyApiFallback: true,
    port: 3000
  },
  watchOptions: {
    ignored: '/node_modules'
  }
});
