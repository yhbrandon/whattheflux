// Core
import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

// Routes
import routes from './core/routes'

// Store
import configureStore from './core/configureStore'

const initialState = {}
const store = configureStore(initialState, browserHistory)
const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={ store }>
    <Router history={ history } children={ routes(store) } />
  </Provider>,
  document.getElementById('root')
)
