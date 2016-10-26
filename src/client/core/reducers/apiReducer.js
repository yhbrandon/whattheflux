import { merge } from 'lodash'
import { actionTypes } from 'core/constants'

// Initial state for the global store
const initialState = {}
// Initial state for each key passed in by the action
const itemState = {
  data: null,
  isFetching: false,
  lastUpdated: 0
}

const { REQUEST, RECEIVE, ERROR } = actionTypes

/*
 * @name item
 * @description logic responsible for setting the state for the appropriate key
 * @param {object} state  default state
 * @param {object} action params passed in from middlewares
 */
const item = (state = itemState, action) => {
  const { dataType, type, payload } = action

  switch(type) {
    case REQUEST:
      return merge({}, state, { isFetching: true, data: dataType })
    case RECEIVE:
      return merge({}, state, {
        isFetching: false,
        data: action.payload,
        lastUpdated: Date.now()
      })
    case ERROR:
      return merge({}, state, { isFetching: false, error: action.payload })
    default:
      return state
  }
}

/*
 * @name default
 * @description logic for mapping key to global store, this uses item.
 * @param {object} state  default state
 * @param {object} action params passed in from middlewares
 */
export default (state = initialState, action) => {
  const { type, key, payload } = action

  switch (type) {
    case RECEIVE:
    case ERROR:
    case REQUEST:
      return merge({}, state, {
        [key]: item(state[key], action)
      })
    default:
      return state
  }
}
