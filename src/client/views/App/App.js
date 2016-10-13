// Core
import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import classnames from 'classnames'

// Styles
import 'core/theme/commons.scss'

// Modules
import Header from 'modules/Header/Header'

// Theme
// Normally we would call this theme, but it conflicts with the state
import styles from 'views/App/App.scss'

const configureClasses = (theme) => {
  return classnames({
    [styles.app]: true,
    [styles[theme]]: true
  })
}

const App = ({ children, theme }) => (
  <div className={ configureClasses(theme) } data-oh-hi='app'>
    <Header />
    <main>
      { children }
    </main>
  </div>
)

App.propTypes = {
  children: PropTypes.element.isRequired,
  theme: PropTypes.string
}

export default App
