const config = {}

config.actionTypes = {
  CALL_API: 'CALL_API',
  CALL_APP: 'CALL_APP',
  CALL_EVENT: 'CALL_EVENT',
  ERROR: 'ERROR',
  RECEIVE: 'RECEIVE',
  REQUEST: 'REQUEST',
  ROUTE: '@@router/LOCATION_CHANGE',
  SET: 'SET'
}

// Update tracking ids for your configuration
config.analytics = {
  environment: process.env.GA_ENV || 'local',
  trackingIds: {
    prod: '',
    local: '',
    dev: '',
    qa: ''
  }
}

config.api = {
  host: 'localhost',
  port: 8080
}

config.auth = {
  required: false,
  cookie: 'access_token'
}

export default config
