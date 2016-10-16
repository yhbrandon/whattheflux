// Core
import express from 'express'
import bodyParser from 'body-parser'
import historyApiFallback from 'connect-history-api-fallback'
import chalk from 'chalk'

// Config
import config from '../config'

// Servers
import devServer from './dev.server'

const app = express()

// Setup server
console.log(chalk.yellow('[express] Initializing content...'))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static(config.paths.base))
app.use(historyApiFallback({ verbose : true }))

// Checking environment
if (config.env === 'development')
  console.log(chalk.yellow('[webpack] Initializing development middlewares...'))

  devServer(app, config)

app.listen(config.port, error => {
  if (error)
    console.error(chalk.red(error))
  else
    console.log(chalk.green(`[express] Listening at http://${config.host}:${config.port}`))
})


