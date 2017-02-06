// Core
import chalk from 'chalk'
import express from 'express'
import historyApiFallback from 'connect-history-api-fallback'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

// Configs
import config from '../config'
import webpackDevConfig from '../config/webpack/webpack.dev.config'

// Server setup
console.log(chalk.yellow('[express] Initializing content...'))

const app = express()

app.use(express.static(config.paths.base))
app.use(historyApiFallback({ verbose : true }))

if (config.env === 'development') {
  console.log(chalk.yellow('[webpack] Initializing development environment...'))

  const compiler = webpack(webpackDevConfig)
  const { publicPath } = webpackDevConfig.output

  const devMiddleWare = webpackDevMiddleware(compiler, {
    publicPath,
    contentBase: config.paths.app,
    hot: true,
    stats: {
      children: false,
      chunks : false,
      chunkModules : false,
      colors : true
    }
  })

  app.use(devMiddleWare)
  app.use(webpackHotMiddleware(compiler))
} else {
  console.log(chalk.red('[webpack] Cannot run a development server in a non development environment'))
}

app.listen(config.port, error => {
  if (error) {
    console.error(chalk.red(error))
  } else {
    console.log(chalk.green(`[express] APP Listening at http://${config.host}:${config.port}`))
  }
})
