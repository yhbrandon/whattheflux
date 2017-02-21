import config from 'core/config'
import { getToken } from 'core/utils'

const {
  CALL_API,
  CALL_APP,
  REQUEST,
  RECEIVE,
  ERROR,
  SET,
  ROUTE } = config.actionTypes

/**
 * @name createAction (public)
 * @description Build actions for redux
 * @param {string} type   specifies action type
 * @param {object} action object for action to consume
 */
const action = (type, action) => {
  if (!action) return

  switch (type) {
    case CALL_API:
      return apiAction(action)
    case CALL_APP:
      return appAction(action)
    case ROUTE:
      return routeAction(type, action)
    default:
      return action
  }
}

/**
 * @name apiAction (private)
 * @description Build action for api calls
 * @param {object} action object passed in from action const
 */
const apiAction = (action) => {
  // Builds url for api
  let url = action.external ? action.endpoint : `http://${config.api.host}:${config.api.port}/${action.endpoint}`

  /*
   * Action object expects:
   * - key      (required)
   * - endpoint  (required)
   * - method   (required)
   * - dataType (required)
   * - body     (optional)
   */

  // Uncomment authorization if you want auth
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    //'Authorization': getToken()
  }

  return {
    type: CALL_API,
    types: [REQUEST, RECEIVE, ERROR],
    payload: {
      body: action.body ? action.body : null,
      headers: action.headers ? action.headers : headers,
      endpoint: url,
      key: action.key,
      method: action.method,
      dataType: action.dataType
    }
  }
}

/**
 * @name apiAction (private)
 * @description Build action for app calls
 * @param {object} action object passed in from action const
 */
const appAction = (action) => {
   /*
   * Action object expects:
   * - key      (required)
   * - payload  (required)
   */

  return {
    type: CALL_APP,
    types: [SET],
    payload: {
      key: action.key,
      payload: action.payload,
      event: action.event
    }
  }
}

/**
 * @name apiAction (private)
 * @description Build action for route changes
 * @param {object} action object passed in from action const
 */
const routeAction = (type, action) => {
  /*
   * Action object expects:
   * - key      (required)
   * - payload  (required)
   */

  return {
    type: type,
    payload: {
      key: action.key,
      payload: action.payload
    }
  }
}

export default action
