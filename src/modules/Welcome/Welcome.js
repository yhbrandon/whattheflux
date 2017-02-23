// Core
import React from 'react'

// Modules
import Flexbox from 'react-material-flexbox'

// Assets
import logo from './logo.png'

// Theme
import theme from './Welcome.scss'

const Welcome = () => (
  <Flexbox className={ theme.welcome } layout='column' align='center center'>
    <img className={ theme.logo } src={ logo } />
    <h3>What the Flux!</h3>
    <p>React / Redux starter kit with a focus on a modular file structure for self contained functionality.</p>
  </Flexbox>
)

export default Welcome
