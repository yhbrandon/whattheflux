import React from 'react'
import { Button } from 'react-toolbox'

const Switcher = ({ toggleBackground }) => (
  <Button label='Redux it up' accent onClick={ () => toggleBackground() } />
)

export default Switcher