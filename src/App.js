import React, { PropTypes } from 'react'
import { Router } from 'react-router'
import { Provider } from 'react-redux'

import routes from 'core/routes'

const App = ({ history, store }) => (
  <Router history={ history } routes={ routes } />
)

App.propTypes = {
  history: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
}

export default App
