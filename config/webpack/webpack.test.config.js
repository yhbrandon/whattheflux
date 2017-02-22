import config from '../../config'

const testConfig = {
  resolve: {
    alias: {
      data: `${config.paths.data}`
    },
    extensions: ['', '.js', '.jsx', '.json']
  }
}

export default testConfig
