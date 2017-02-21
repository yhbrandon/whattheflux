import config from 'core/config'

// Constants
const { REQUEST, RECEIVE, ERROR } = config.actionTypes

// Initial state for the global store
const initialState = {}
// Initial state for each key passed in by the action
const itemState = {
  data: null,
  isFetching: false,
  lastUpdated: 0
}

/*
 * @name item
 * @description logic responsible for setting the state for the appropriate key
 * @param {object} state  default state
 * @param {object} action params passed in from middlewares
 */
const item = (state = itemState, action) => {
  const { dataType, type, payload } = action

  switch (type) {
    case REQUEST:
      return Object.assign({}, state, { isFetching: true, data: state.data ? state.data : dataType, message: null })
    case RECEIVE:
      return Object.assign({}, state, {
        isFetching: false,
        data: payload.data,
        lastUpdated: Date.now(),
        message: payload.message,
        success: payload.success
      })
    case ERROR:
      return Object.assign({}, state, { isFetching: false, message: payload ? payload.messages : '', success: payload ? payload.success : '' })
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
    case RECEIVE:
    case ERROR:
    case REQUEST:
      return Object.assign({}, state, {
        [key]: item(state[key], action)
      })
    default:
      return state
  }
}
