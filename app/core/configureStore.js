import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router';
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

// Reducers
import rootReducer from './rootReducer'

export default (initialState = {}, history) => {

  const applyMiddlewares = applyMiddleware(
    thunkMiddleware,
    routerMiddleware(browserHistory),
    createLogger()
  )

  const finalCreateStore = compose(
    applyMiddlewares
  )(createStore)

  const store = finalCreateStore(
    rootReducer,
    initialState
  )

  return store

}
