import { merge } from 'lodash'

import constants from 'core/constants'

const initialState = {}

export default (state = initialState, action) => {
  if (!action.key) { return state }

  const type = action.type.substr(0, action.type.indexOf('_'))
  const key = action.key ? action.key : 'app'

  switch (type) {
    case constants.reducerActions.SET:
      return merge({}, state, {
        [key]: action.payload
      })
    case constants.reducerActions.REQUEST:
      return merge({}, state, {
        [key]: {
          isFetching: true
        }
      })
    case constants.reducerActions.RECEIVE:
      return merge({}, state, {
        [key]: {
          isFetching: false,
          lastUpdated: Date.now(),
          ...action.response
        }
      })
    case constants.reducerActions.ERROR:
      return merge({}, state, {
        [key]: {
          isFetching: false
        }
      })
    default:
      return state
  }
}