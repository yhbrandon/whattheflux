import { compose, createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'
import apiMiddleware from 'middlewares/apiMiddleware'
import appMiddleware from 'middlewares/appMiddleware'
import createLogger from 'redux-logger'
import rootReducer from './rootReducer'

export default (preloadedState, history) => {

  let loggerMiddleware = createLogger()

  let middlewares = [
    thunkMiddleware,
    routerMiddleware(history),
    apiMiddleware,
    appMiddleware,
    loggerMiddleware
  ]

  let store = createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(...middlewares)
    )
  )

  return store
}