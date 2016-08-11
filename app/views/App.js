// Core
import React, { Component, PropTypes } from 'react'

// Third Party Components
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Header from '../modules/Header/HeaderContainer'

// Styles
import 'react-flex/index.scss'
import './App.scss'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { children } = this.props

    return (
      <MuiThemeProvider>
        <div className="container">
          <Header />
          <main>
            { children }
          </main>
        </div>
      </MuiThemeProvider>
    )
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired
}

export default App
