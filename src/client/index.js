// Core
import React from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { AppContainer } from 'react-hot-loader'
import Redbox from 'redbox-react'
import { Provider } from 'react-redux'

import configureStore from 'core/configureStore'
import Routes from 'core/configureRoutes'

import App from './App'

const documentRoot = document.getElementById('root')
const initialState = window.__INITIAL_STATE__
const store = configureStore(initialState, browserHistory)
const history = syncHistoryWithStore(browserHistory, store)

render (
	<AppContainer errorReporter={ Redbox }>
		<App store={ store } history={ history } />
	</AppContainer>,
	documentRoot
)

if (__DEV__) {
	if (module.hot) {
		module.hot.accept('./App', () => {
			const NextApp = require('./App').default

			render(
				<AppContainer errorReporter={ Redbox }>
					<NextApp store={ store } history={ history } />
				</AppContainer>,
				documentRoot
			)
		});
	}
}