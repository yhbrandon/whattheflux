import React from 'react'
import { IndexRoute, Route } from 'react-router'

// Views
import App from 'views/App'

// Modules
import Welcome from 'modules/Welcome'

const routes = (
  <Route path='/' component={ App }>
    <IndexRoute component={ Welcome } />
  </Route>
)

export default routes
