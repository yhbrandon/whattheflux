// Constants
import constants from 'core/constants'
import fetch from 'isomorphic-fetch'

export default store => next => action => {
  if (action.type !== constants.reducerActions.CALL_API) return next(action)

  const endpoint = action.api

  next({ type: endpoint.actionTypes.request })

  let params = { 
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }

  if (endpoint.body)
    params.body = JSON.stringify(endpoint.body)

  return fetch(endpoint.url, params)
    .then( response => next({ type: endpoint.actionTypes.receive, key: endpoint.key, payload: response }))
    .catch( error => next({ type: endpoint.actionTypes.error, error: error }))
}

