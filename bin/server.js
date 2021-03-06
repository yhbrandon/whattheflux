// Core
import chalk from 'chalk'
import webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'

// Configs
import config from '../config'
import webpackDevConfig from '../config/webpack/webpack.dev.config'

// Server setup
console.log(chalk.yellow('[webpack] Initializing development environment...'))

new WebpackDevServer(webpack(webpackDevConfig), {
  publicPath: webpackDevConfig.output.publicPath,
  hot: true,
  historyApiFallback: true,
  quiet: false,
  stats: {
    assets: false,
    colors: true,
    version: false,
    chunks: false,
    chunkModules: false
  }
}).listen(config.port, config.host, error => {
  if (error) {
    console.log(chalk.red(error))

    return reject(error)
  }

  console.log(chalk.green(`[webpack] APP Listening at http://${config.host}:${config.port}`))
})
