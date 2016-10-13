// Core
import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

// Views
import App from 'views/App/AppContainer'
import About from 'views/About/About'

const childRoutes = (
	<Route path="/" component={ App }>
		<IndexRoute component={ About }/>
	</Route>
)

const routes = (props) => (
	<Router history={ props.history }>
		{ childRoutes }
	</Router>
)

export default routes