import React, { Component, PropTypes } from 'react'

import Header from '../modules/Header/HeaderContainer'
import './App.scss'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { children } = this.props

    return (
      <div className="container">
        <Header />
        <main>
          { children }
        </main>
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired
}

export default App
