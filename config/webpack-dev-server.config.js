const webpack = require('webpack');
const path = require('path');
const root = path.resolve('./')

module.exports = {
  root: {
    path: root
  },
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    root + '/app/index'
  ],
  output: {
    path: root + '/dist',
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loaders: [ 'babel' ],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  }
};
