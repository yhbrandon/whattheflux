import webpack from 'webpack'
import webpackMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

// Configs
import webpackDevConfig from '../config/webpack/webpack.dev.config'

const server = (app, config) => {
  let compiler = webpack(webpackDevConfig)
  let { publicPath } = webpackDevConfig.output

  let devMiddleware = webpackMiddleware(compiler, {
    publicPath,
    contentBase: config.paths.src,
    hot: true,
    stats: {
      chunks : false,
      chunkModules : false,
      colors : true
    }
  })

  app.use(devMiddleware)
  app.use(webpackHotMiddleware(compiler))
}

export default server