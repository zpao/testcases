const path = require('path');
const webpack = require('webpack');

module.exports = {
  // REMOVING THIS FIXES EVERYTHING
  resolve: {
    modules: ['.', 'node_modules'],
    extensions: ['.js']
  },

  entry: './index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};

