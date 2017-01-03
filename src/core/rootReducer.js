import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import { apiReducer, appReducer } from 'core/reducers'

const rootReducer = combineReducers({
  routing: router,
  app: appReducer,
  api: apiReducer
})

export default rootReducer
