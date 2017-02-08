// Core
import chalk from 'chalk'
import webpack from 'webpack'

// Configs
import config from '../config'
import webpackProdConfig from '../config/webpack/webpack.prod.config'

console.log(chalk.yellow('[webpack] Compiling source...'))

const compiler = webpack(webpackProdConfig)

compiler.run(error => {
  if (error) {
    console.log(chalk.red('[webpack] Cannot compile source...'))

    return reject(error)
  }

  console.log(chalk.green('[webpack] Source compiled successfully...'))
})

