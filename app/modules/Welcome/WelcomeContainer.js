import { connect } from 'react-redux';

import Welcome from './WelcomeComponent'

function mapStateToProps(state) {
  return {
    title: state.header.title,
    tagline: state.header.tagline
  }
}

export default connect(mapStateToProps)(Welcome)
