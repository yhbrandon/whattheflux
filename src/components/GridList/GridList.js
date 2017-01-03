// Core
import React, { PropTypes } from 'react'
import classnames from 'classnames'

// Thirdparty
import Flexbox from 'react-material-flexbox'

// Theme
import theme from './GridList.scss'

const GridList = ({ className, children }) => {
  return (
    <div data-black-locus='grid-list'>
      <Flexbox layout='row' className={ classnames(className, theme.gridList) }>
        { children }
      </Flexbox>
    </div>
  )
}

GridList.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ])
}

export default GridList
