import { merge } from 'lodash'

import { actionTypes } from 'core/constants'

const initialState = {}

const { REQUEST, RECEIVE, ERROR } = actionTypes

const item = (state = { data: null, isFetching: false, lastUpdated: 0 }, action) => {
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
