// Core
import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import configureReducer from './configureReducer'

const rootReducer = combineReducers({
  routing: router,
  app: configureReducer
})

export default rootReducer