import path from 'path'
import webpack from 'webpack'
import merge from 'webpack-merge'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import { assign } from 'lodash'

import config from '../../config'
import webpackConfig from './webpack.base.config'

const prodConfig = {
  entry: [`${config.paths.src}/index.js`],
  devtool: 'hidden-source-map',
  module: {
    rules: [{
      test: /(\.scss|\.css)$/,
      use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: [
          {
            loader: 'css-loader',
            options: {
              localIdentName: '[name]__[local]--[hash:base64:5]',
              modules: true
            }
          },
          {
            loader: 'postcss-loader',
            options: { plugins: () => [autoprefixer] }
          },
          {
            loader: 'sass-loader',
            options: { data: `@import "${config.paths.src}/core/theme/_config.scss";` }
          }
        ]
      })
    }]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new ExtractTextPlugin({ filename: "[name]-[contenthash].css", allChunks: true }),
    new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } })
  ]
}

export default merge.smart({}, webpackConfig, prodConfig)
