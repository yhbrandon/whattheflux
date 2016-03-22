import _test from '../api/test'
import * as types from '../constants/ActionTypes'

function receiveAPIData(data) {
  return {
    type: types.RECEIVE_DATA,
    data: data
  }
}

export function makeAPICall() {
  return dispatch => {
    _test.getData(data => {
      dispatch(receiveAPIData(data))
    })
  }
}
