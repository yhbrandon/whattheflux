// Core
import React from 'react'
import { render } from 'react-dom'
import RedBox from 'redbox-react'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'

import configureStore from 'core/configureStore'
import rootReducer from 'core/rootReducer'

import Routes from 'core/Routes'

const documentRoot = document.getElementById('root')
const initialState = window.__INITIAL_STATE__
const store = configureStore(initialState, browserHistory, rootReducer)
const history = syncHistoryWithStore(browserHistory, store)

const renderApp = (Content) => {
  render(
    <AppContainer>
      <Provider store={ store }>
        <Content history={ history } />
      </Provider>
    </AppContainer>,
    documentRoot,
  )
}

if (module.hot) {
  module.hot.accept('./core/rootReducer', () => {
    store.replaceReducer(rootReducer)
  })

  const reRenderApp = (content) => {
    try {
      renderApp(content)
    } catch (error) {
      render(<RedBox error={ error } />, documentRoot)
    }
  }

  module.hot.accept('./core/Routes', () => {
    const NewApp = require('./core/Routes').default

    reRenderApp(NewApp)
  })
}

renderApp(Routes)
