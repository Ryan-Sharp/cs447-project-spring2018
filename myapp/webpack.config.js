var webpack = require('webpack');
var path = require('path');
var BundleTracker = require('webpack-bundle-tracker');
var env = process.env.WEBPACK_ENV || 'dev';

var appName = 'myapp';


var plugins = [new BundleTracker({filename: './webpack-stats.json'})], outputFile;

if (env === 'build') {
  plugins.push(new UglifyJsPlugin({ minimize: true }));
  outputFile = appName + '.min.js';
} else {
  outputFile = appName + '.js';
}

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
        test: /(\.jsx|\.js)$/,
        loader: 'babel',
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  resolve: {
    root: path.resolve('./src'),
    extensions: ['', '.js', '.jsx'],
  },
  plugins: plugins
};

module.exports = config;
