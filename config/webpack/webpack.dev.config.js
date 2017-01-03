
import webpack from 'webpack'
import merge from 'webpack-merge'
import { assign, clone } from 'lodash'

import config from '../../config'
import webpackConfig from './webpack.base.config'


const devConfig = {
  entry  : assign({}, webpackConfig.entry, {
    app: [
      `webpack-hot-middleware/client?path=/__webpack_hmr&reload=true`,  
    ].concat(webpackConfig.entry.app),
    vendor: [
      'react-hot-loader/patch'
    ].concat(webpackConfig.entry.vendor)
  }),
  devtool: 'source-maps',
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ names: ['vendor'] }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
}

export default merge.smart({}, webpackConfig, devConfig)
