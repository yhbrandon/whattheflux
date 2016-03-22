import { RECEIVE_DATA } from '../constants/ActionTypes'

export default function getData(state = [], action) {
  switch (action.type) {
    case RECEIVE_DATA:
      return action.data
    default:
      return state
  }
}
