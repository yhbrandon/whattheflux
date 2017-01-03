import React, { PropTypes } from 'react'
import classnames from 'classnames'

import Flexbox from 'react-material-flexbox'

import theme from './GridList.scss'

const configureClasses = (className, columns) => {
  const classes = {
    [theme.gridTile]: true,
    [theme[`column__${columns}`]]: true
  }

  return classnames(className, classes)
}

const GridTile = ({ className, columns, children }) => {
  return (
    <div className={ configureClasses(className, columns) } data-black-locus='grid-tile'>
      <Flexbox layout='row' align='center center'>
        { children }
      </Flexbox>
    </div>
  )
}

GridTile.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  columns: PropTypes.number.isRequired,
  onClick: PropTypes.func
}

export default GridTile
