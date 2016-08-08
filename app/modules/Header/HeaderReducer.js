// Core
import { assign } from 'lodash'

// Action Types
import { GET_HEADER_DATA } from './HeaderActionTypes'

const initialState = { title: '', tagline: ''}

const headerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_HEADER_DATA:
      return assign({}, state, action.payload)
    default:
      return state
  }
}

export default headerReducer
