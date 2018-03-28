// Authors: Ryan Sharp
// last modified: 3/27/18

var webpack = require('webpack');
var path = require('path');
var BundleTracker = require('webpack-bundle-tracker');
var env = 'dev';

var appName = 'myapp';


var plugins = [new BundleTracker({filename: './webpack-stats.json'})], outputFile;


outputFile = appName + '.js';

var config = {
  entry: './src/index.js',
  devtool: 'source-map',
  output: {
    path: __dirname + '/src/lib',
    filename: outputFile,
    // publicPath: __dirname + '/example'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
    ],
  },
  resolve: {
    modules: [__dirname, 'node_modules'],
    extensions: ['*','.js', '.jsx'],
  },
  plugins: plugins
};

module.exports = config;
