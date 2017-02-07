import config from '../../../config'

/**
 * @name createAction (public)
 * @description Build actions for redux
 * @param {string} type   specifies action type
 * @param {object} action object for action to consume
 */
const action = (type, action) => {
  if (!action) return

  switch (type) {
    case 'CALL_API':
      return apiAction(action)
    case 'CALL_APP':
      return appAction(action)
    case 'CALL_EVENT' || ROUTE:
      return gaAction(type, action)
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

  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }

  return {
    type: 'CALL_API',
    types: ['REQUEST', 'RECEIVE', 'ERROR'],
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
    type: 'CALL_APP',
    types: ['SET'],
    payload: {
      key: action.key,
      payload: action.payload
    }
  }
}

/**
 * @name apiAction (private)
 * @description Build action for ga calls
 * @param {object} action object passed in from action const
 */
const gaAction = (type, action) => {
  /*
   * Action object expects:
   * - key      (required)
   * - payload  (required)
   * - tracking (required)
   */

  return {
    type: type,
    payload: {
      key: action.key,
      payload: action.payload,
      tracking: action.tracking
    }
  }
}

export default action
