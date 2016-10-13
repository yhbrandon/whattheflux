// Core
import React, { Component, PropTypes} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// Actions 
import * as Actions from 'modules/BackgroundSwitcher/BackgroundSwitcherActions'

import BackgroundSwitcher from 'modules/BackgroundSwitcher/BackgroundSwitcher'

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Actions, dispatch)
}

export default connect(null, mapDispatchToProps)(BackgroundSwitcher)