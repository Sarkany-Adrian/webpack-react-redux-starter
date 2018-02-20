const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');

const dist = path.resolve(__dirname, 'dist');

module.exports = merge(common, {
  devServer: {
    contentBase: dist
  },
  watchOptions: {
    ignored: '/node_modules'
  }
});
