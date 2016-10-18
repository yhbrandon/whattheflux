// Standard import from index is not working in this file.
import actionTypes from 'core/constants/actionTypes'
import api from 'core/constants/api'

const {
  CALL_API,
  CALL_APP,
  CALL_GA,
  REQUEST,
  RECEIVE,
  ERROR,
  SET } = actionTypes

const action = (type, action) => {
  switch (type) {
    case CALL_API:
      return apiAction(action)
    case CALL_APP:
      return appAction(action)
    case CALL_GA:
      return gaAction(action)
    default:
      return action
  }
}

const apiAction = (action) => {
  const url = `http://${api.host}:${api.port}/${action.endpoint}`

  return {
    type: CALL_API,
    types: [REQUEST, RECEIVE, ERROR],
    payload: {
      body: action.body ? action.body : null,
      endpoint: url,
      key: action.key,
      method: action.method,
      dataType: action.dataType
    }
  }
}

const appAction = (action) => {
  return {
    type: CALL_APP,
    types: [SET],
    payload: {
      key: action.key,
      payload: action.payload,
    }
  }
}

const gaAction = (action) => {
  return {
    type: CALL_GA,
    types: [ROUTE, CALL_EVENT],
    payload: action.payload
  }
}

export default action
