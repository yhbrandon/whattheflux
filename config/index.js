
import path from 'path'

const BASE = path.resolve(__dirname, '..')
const NODE_ENV = JSON.stringify(process.env.NODE_ENV)

const config = {
  env  : process.env.NODE_ENV || 'development',
  port : process.env.PORT || 3000,
  host : process.env.HOST || 'localhost'
}

config.paths = {
  base : BASE,
  src  : `${BASE}/src`,
  dist : `${BASE}/dist`,
}

config.globals = {
  'process.env': {
    'NODE_ENV': JSON.stringify(config.env)
  },
  'NODE_ENV' : config.env,
  '__DEV__'  : config.env === 'development',
  '__PROD__' : config.env === 'production'
}

export default config