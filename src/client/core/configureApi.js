// Core
import queryString from 'query-string'

export default (url, key, body) => {
  const action = key.replace(/([A-Z])/g, '_$1').toUpperCase()

  return {
    url: url,
    actionTypes: {
      request: `REQUEST_${action}`,
      receive: `RECEIVE_${action}`,
      error: `ERROR_${action}`
    },
    key: key,
    body: body
  }
}
