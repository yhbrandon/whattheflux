// Core
import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import injectTapEventPlugin from 'react-tap-event-plugin';

// Routes
import routes from './core/routes'

// Store
import configureStore from './core/configureStore'

// Inject events for prop regulation
injectTapEventPlugin()

// Saw this on this boilerplate, thought it was cool
// https://github.com/davezuko/react-redux-starter-kit
const initialState = window.__INITIAL_STATE__
const store = configureStore(initialState, browserHistory)
const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={ store }>
    <Router history={ history } children={ routes(store) } />
  </Provider>,
  document.getElementById('root')
)
