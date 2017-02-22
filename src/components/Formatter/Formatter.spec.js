// Core
import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

// Components
import Formatter from './Formatter'

describe('Formatter - Component', () => {
  let module
  const value = 1234

  beforeEach(() => {
    module = shallow(<Formatter type='number' value={ value } />)
  })

  it('should have props', () => {
    expect(module.props().type).to.be.defined
    expect(module.props().value).to.be.defined
  })

  it('should render', () => {
    expect(module).to.have.data('black-locus', 'formatter')
  })

  it('should render a <span /> component', () => {
    expect(module.find('span')).to.have.text('1,234')
  })
})
