import React, { PropTypes } from 'react'
import { Router } from 'react-router'
import { Provider } from 'react-redux'

import routes from 'core/routes'

const App = (props) => (
	<Provider store={ props.store }>
		<Router history={ props.history } routes={ routes(props.store) } />
	</Provider>
)

App.propTypes = {
	history: PropTypes.object.isRequired,
	store: PropTypes.object.isRequired
}

export default App