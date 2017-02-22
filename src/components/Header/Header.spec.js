// Core
import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

// Components
import Header from './Header'

describe('Header - Component', () => {
  let module

  beforeEach(() => {
    module = shallow(<Header />)
  })

  it('should render', () => {
    expect(module.exists()).to.be.true
  })
})
