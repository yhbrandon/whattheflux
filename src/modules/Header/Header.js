// Core
import React, { PropTypes } from 'react'

// Thirdparty
import { AppBar } from 'react-toolbox'
import Flexbox from 'react-material-flexbox'

// Styles
import theme from './Header.scss'

// Assets
import logo from 'assets/logo.png'

const Header = ({ active, handleClick }) => (
  <div className={ theme.appBar } data-what-the-flux='header'>
    <AppBar className={ theme.header } flat fixed>
      <Flexbox className={ theme.wrapper } layout='row' flex align='start center'>
        <img className={ theme.logo } src={ logo } />
      </Flexbox>
    </AppBar>
  </div>
)

Header.propTypes = {
  active: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
}

export default Header
