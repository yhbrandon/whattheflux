// Core
import React, { PropTypes } from 'react'

// Modules
import Footer from 'modules/Footer'
import Header from 'modules/Header'

// Styles
import 'core/theme/commons.scss'

const App = ({ children }) => (
  <div data-what-the-flux='app'>
    <Header active />
    <main data-what-the-flux='main'>{ children }</main>
    <Footer active />
  </div>
)

App.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ])
}

export default App
