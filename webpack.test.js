const webpack = require('webpack');
const config = require('./webpack.base');

// plugins
const DefinePlugin = webpack.DefinePlugin;


module.exports = {
  devtool: 'inline-source-map',
  resolve: config.resolve,

  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel'}
    ]
  },

  plugins: [
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('test')
    })
  ]
};
