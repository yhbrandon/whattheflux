// Core
import React from 'react'

// Thirdparty
import { AppBar } from 'react-toolbox'
import Flexbox from 'react-material-flexbox'

// Styles
import theme from './Header.scss'

// Assets
import logo from 'assets/logo.png'

const Header = () => (
  <div data-what-the-flux='header'>
    <AppBar className={ theme.header } flat fixed>
      <Flexbox className={ theme.wrapper } layout='row' flex align='start center'>
        <img className={ theme.logo } src={ logo } />
      </Flexbox>
    </AppBar>
  </div>
)

export default Header
