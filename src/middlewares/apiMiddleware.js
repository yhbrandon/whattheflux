// Config
import config from 'core/config'

// Utils
import { fetchJSON } from 'core/utils'

const { CALL_API } = config.actionTypes

/*
 * @name apiMiddleware
 * @description middleware responsible for handling CALL_API actions
 * @param {object}   action params passed in from action
 * @param {function} next   redux dispatch function
 * @param {object}   store  redux global store
 */
export default store => next => action => {
  const { type, types, payload } = action

  if (type !== CALL_API) return next(action)

  const [ REQUEST, RECEIVE, ERROR ] = types
  const { body, headers, endpoint, key, method, dataType } = payload

  // Dispatching that the request is being made
  next({ type: REQUEST, key, dataType })

  // making request and dispatching response
  return fetchJSON(endpoint, method, headers, body).then(
    response => next({
      type: RECEIVE,
      payload: response,
      key
    }),
    error => next({
      type: ERROR,
      payload: error,
      key
    }))
}

