const merge = require('webpack-merge');
const common = require('./webpack.config.common');

const prod = {
  mode: 'production',
  devtool: 'source-map',
  target: 'node',
};

module.exports = merge(common, prod);
