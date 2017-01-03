import React from 'react'
import { expect } from 'chai'
import { mount } from 'enzyme'
import GridTile from './GridTile'

describe('GridTile - Module', () => {
  let module

  beforeEach(() => {
    module = mount(<GridTile columns={ 1 } title='Test' />)
  })

  it('should have props for columns and title', () => {
    expect(module.props().columns).to.be.defined
    expect(module.props().title).to.be.defined
  })

  it('should render', () => {
    expect(module).to.have.data('black-locus', 'grid-tile')
  })

  it('should title', () => {
    expect(module.find('p')).to.have.text('Test')
  })
})
