import webpack from 'webpack'
import autoprefixer from 'autoprefixer'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

import config from '../../config'

export default {
  name: 'name',
  target: 'web',
  context: config.paths.base,
  entry: {
    app: [
      `${config.paths.app}/index.js`
    ],
    vendor: [
      'babel-polyfill',
      'react',
      'react-redux',
      'react-router',
      'react-router-redux',
      'redux'
    ]
  },
  output: {
    path: config.paths.dist,
    pathInfo: true,
    publicPath: '/',
    filename: '[name]-[hash].js'
  },
  resolve: {
    root: config.paths.src,
    modulesDirectories: [
      'node_modules',
      `${config.paths.app}`,
      `${config.paths.server}`
    ],
    extensions: ['', '.js', '.jsx', '.scss', '.css', '.json']
  },
  postcss: [autoprefixer],
  sassLoader: {
    data: `@import "${config.paths.app}/core/theme/_config.scss";`
  },
  plugins: [
    new ExtractTextPlugin('main.css', { allChunks: true }),
    new webpack.DefinePlugin(config.globals),
    new HtmlWebpackPlugin({
      template: `${config.paths.app}/index.html`,
      hash: false,
      filename: 'index.html',
      inject: true
    })
  ],
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /(\.scss|\.css)$/,
        loader: 'style!css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass?sourceMap'
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader?name=img/img-[hash:6].[ext]'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.svg$/,
        loader: 'raw-loader'
      }
    ]
  }
}
