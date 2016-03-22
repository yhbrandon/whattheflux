import '../styles/containers/app.scss'
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Welcome from '../components/Welcome'

class App extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { data } = this.props

    return (
      <main>
        <Welcome title={data.name} tagline={data.tagline}/>
      </main>
    )
  }
}

App.propTypes = {
  data: PropTypes.array.isRequired
}

function mapStateToProps(state) {
  console.log(state)
  return {
    data: state
  }
}

export default connect(mapStateToProps)(App)
