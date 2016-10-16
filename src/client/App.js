import React, { PropTypes } from 'react'
import Redbox from 'redbox-react'
import { Provider } from 'react-redux'

import Routes from 'core/configureRoutes'

const App = (props) => (
  <Provider store={ props.store }>
    <Routes history={ props.history } />
  </Provider>
)

App.propTypes = {
  history: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
}

export default App