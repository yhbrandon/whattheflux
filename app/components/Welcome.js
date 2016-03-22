import '../styles/components/welcome.scss'
import React, { Component, PropTypes } from 'react'
import Divider from 'material-ui/lib/divider'
import Icon from 'babel!svg-react!../assets/react.svg?name=Icon'

class Welcome extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { title, tagline } = this.props
    console.log(title)
    return (
      <section id="welcome">
        <Icon width="350" height="350"/>
        <div className="headline">
          <h1>{title}</h1>
          <h2>{tagline}</h2>
        </div>
      </section>
    )
  }
}

Welcome.propTypes = {
  title: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired
}

export default Welcome
