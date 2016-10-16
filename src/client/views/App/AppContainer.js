// Core
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// Modules
import App from 'views/App/App'

const mapPropsToState = (state) => {
  return { theme: state.app.theme ? state.app.theme : 'light' }
}

export default connect(mapPropsToState)(App)