import React, { Component, PropTypes } from 'react'

import Box from 'react-layout-components'
import Divider from 'material-ui/lib/divider'

import './Welcome.scss'

class Welcome extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { title, tagline } = this.props

    return (
      <section className="welcome">
        <Box fit center column>
          <h1>{title}</h1>
          <h2>{tagline}</h2>
        </Box>
      </section>
    )
  }
}

Welcome.propTypes = {
  title: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired
}

export default Welcome
