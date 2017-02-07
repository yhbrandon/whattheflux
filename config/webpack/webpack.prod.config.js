import webpack from 'webpack'
import merge from 'webpack-merge'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import { assign } from 'lodash'

import config from '../../config'
import webpackConfig from './webpack.base.config'

const prodConfig = {
  entry: [`${config.paths.src}/index.js`],
  devtool: 'hidden-source-map',
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    })
  ]
}

export default merge.smart({}, webpackConfig, prodConfig)
