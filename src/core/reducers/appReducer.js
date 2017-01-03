import { merge } from 'lodash'
import { actionTypes } from 'core/constants'

// Initial State
const initialState = {}

const { SET } = actionTypes

/*
 * @name item
 * @description logic responsible for setting the state for the appropriate key
 * @param {object} state  default state
 * @param {object} action params passed in from middlewares
 */
const item = (state = {}, action) => {
  const { type, payload } = action

  switch (type) {
    case SET:
      return merge({}, state, payload)
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
  const { type, key } = action

  switch (type) {
    case SET:
      return merge({}, state, {
        [key]: item(state[key], action)
      })
    default:
      return state
  }
}
