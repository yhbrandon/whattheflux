import { merge } from 'lodash'

import { actionTypes } from 'core/constants'

const initialState = {}

const { SET } = actionTypes

const item = (state = {}, action) => {
  const { type, payload } = action

  switch (type) {
    case SET:
      return merge({}, state, payload)
    default:
      return state
  }
}

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
