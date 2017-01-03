// Core
import React from 'react'

// Modules
import { Button } from 'react-toolbox'
import Flexbox from 'react-material-flexbox'

// Theme
import theme from './Footer.scss'

const Footer = () => (
  <footer className={ theme.footer } aria-label='What the Flux Footer'>
    <Flexbox layout='row' align='center center'>
      <Button label='Share feedback' primary />
    </Flexbox>
  </footer>
)

export default Footer
