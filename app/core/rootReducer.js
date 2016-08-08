// Core
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

// Reducer Imports
import headerReducer from '../modules/Header/HeaderReducer'


// Lets combine the reducers
const reducers = {
  header: headerReducer,
  routing: routerReducer
}

export default combineReducers(reducers);
