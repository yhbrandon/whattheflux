import React, { PropTypes } from 'react'
import { IndexRoute, Route, Router } from 'react-router'

// Views
import App from 'views/App'

// Modules
import Welcome from 'modules/Welcome'

const Routes = ({ history }) => (
  <Router history={ history }>
    <Route path='/' component={ App }>
      <IndexRoute component={ Welcome } />
    </Route>
  </Router>
)

Routes.propTypes = {
  history: PropTypes.object
}

export default Routes
