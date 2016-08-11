import React, { Component, PropTypes } from 'react'

import { Flex } from 'react-flex'
import Divider from 'material-ui/Divider'

import './Welcome.scss'

class Welcome extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { title, tagline } = this.props

    return (
      <section className="welcome">
        <Flex column={ true } alignItems="center" justifyContent="center">
          <h1>{title}</h1>
          <h2>{tagline}</h2>
        </Flex>
      </section>
    )
  }
}

Welcome.propTypes = {
  title: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired
}

export default Welcome
