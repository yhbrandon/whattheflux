import React, { PropTypes } from 'react'
import classnames from 'classnames'

import theme from './Panel.scss'

const configureChildren = (children) => {
  return React.Children.map(children, (child, index) => {
    const classes = {
      [theme.inGroup]: true,
      [theme.firstPanel]: index === 0,
      [theme.lastPanel]: index === children.length - 1
    }

    return React.cloneElement(child, {
      className: classnames(classes)
    })
  })
}

const PanelGroup = ({ children }) => (
  <div className={ theme.panelGroup }>
    { configureChildren(children) }
  </div>
)

PanelGroup.propTypes = {
  children: PropTypes.node
}

export default PanelGroup

