const path = require('path');

module.exports = {
  entry: {
    rdgenaratorcitest: './src/rdgenaratorcitest.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    library: 'rdgenaratorcitest',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader' },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
};
