import React from 'react'
import { expect } from 'chai'
import { mount } from 'enzyme'
import GridList from './GridList'

describe('GridList - Module', () => {
  let module

  beforeEach(() => {
    module = mount(<GridList />)
  })

  it('should render', () => {
    expect(module).to.have.data('black-locus', 'grid-list')
  })
})
