import { compose, createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

import { apiMiddleware, appMiddleware, routeMiddleware } from 'middlewares'

export default (preloadedState, history, rootReducer) => {
  const middlewares = [
    thunkMiddleware,
    routerMiddleware(history),
    apiMiddleware,
    appMiddleware,
    routeMiddleware
  ]

  if (__DEV__) {
    const loggerMiddleware = createLogger()

    middlewares.push(loggerMiddleware)
  }

  const store = createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(...middlewares)
    )
  )

  return store
}
