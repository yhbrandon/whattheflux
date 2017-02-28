import webpack from 'webpack'
import autoprefixer from 'autoprefixer'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

import config from '../../config'

const baseConfig = {
  target: 'web',
  context: config.paths.src,
  output: {
    path: config.paths.dist,
    publicPath: '/',
    filename: '[name]-[hash].js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.json'],
    modules: [
      'node_modules',
      `${config.paths.src}`
    ]
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: ['babel-loader'],
      include: [`${config.paths.src}`],
      exclude: /node_modules/,
    }, {
      test: /\.(png|jpg|gif|jpeg)$/,
      use: ['file-loader?name=img/img-[hash:6].[ext]']
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${config.paths.src}/index.html`,
      hash: false,
      filename: 'index.html',
      inject: true
    }),
    new webpack.DefinePlugin(config.globals),
  ]
}

export default baseConfig
