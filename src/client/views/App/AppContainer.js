// Core
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// Modules
import App from 'views/App/App'

const mapPropsToState = (state) => {
  const { app } = state
  const { theme } = app['theme'] || {
    theme: 'light'
  }

	return { theme }
}

export default connect(mapPropsToState)(App)