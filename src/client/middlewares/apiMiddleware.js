import { fetchJSON } from 'core/utils'

import { actionTypes } from 'core/constants'

const { CALL_API } = actionTypes

export default store => next => action => {
  const { type, types, payload } = action

  if (type !== CALL_API) return next(action)

  const [ REQUEST, RECEIVE, ERROR ] = types
  const { body, endpoint, key, method, dataType } = payload

  next({ type: REQUEST, key, dataType })

  return fetchJSON(endpoint, method, body).then(
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

