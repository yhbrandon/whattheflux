// Core
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

// Components
import Header from './HeaderComponent'

// Actions
import { getHeaderData } from './HeaderActions'

class HeaderContainer extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { dispatch } = this.props

    dispatch(getHeaderData())
  }

  render() {
    const { title } = this.props

    return (
      <Header title={ title } />
    )

  }
}

HeaderContainer.propTypes = {
  title: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return { title: state.header.title }
}


export default connect(mapStateToProps)(HeaderContainer)
