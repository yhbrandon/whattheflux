import webpack from 'webpack'
import merge from 'webpack-merge'
import { assign } from 'lodash'

import config from '../../config'
import webpackConfig from './webpack.base.config'

const prodConfig = {
	devtool: 'hidden-source-map',
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({ names: ['vendor'] }),
		new webpack.optimize.OccurrenceOrderPlugin(true),
		new webpack.optimize.AggressiveMergingPlugin(),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin({
		  compress: {
		    warnings: false
		  }
		})
	]
}

export default merge.smart({}, webpackConfig, prodConfig)
