import autoprefixer from 'autoprefixer'
import webpack from 'webpack'
import merge from 'webpack-merge'
import { assign } from 'lodash'

import config from '../../config'
import webpackConfig from './webpack.base.config'

const devConfig = {
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
    `${config.paths.src}/index.js`
  ],
  module: {
    rules: [{
      test: /(\.scss|\.css)$/,
      use: [
        { loader: 'style-loader' },
        {
          loader: 'css-loader',
          options: {
            localIdentName: '[name]__[local]--[hash:base64:5]',
            modules: true,
            sourceMap: true
          }
        },
        {
          loader: 'postcss-loader',
          options: { plugins: () => { return [ autoprefixer ] } }
        }, {
          loader: 'sass-loader',
          options: {
            data: `@import "${config.paths.src}/core/theme/_config.scss";`,
            sourceMap: true
          }
        }
      ]
    }]
  },
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.EvalSourceMapDevToolPlugin(),
    new webpack.NamedModulesPlugin()
  ]
}

export default merge.smart({}, webpackConfig, devConfig)
