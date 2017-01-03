import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'

import { FontIcon } from 'react-toolbox'
import Flexbox from 'react-material-flexbox'

import theme from './Panel.scss'

class Panel extends Component {
  state = { expanded: false }

  componentDidMount () {
    const { expanded } = this.props

    this.setState({ expanded: expanded })
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps === this.props) return

    const { expanded } = nextProps

    this.setState({ expanded: expanded })
  }

  handleToggle = () => {
    const { onClick } = this.props

    let expanded = !this.state.expanded

    this.setState({ expanded: expanded })

    if (onClick) this.props.onClick()
  }

  render () {
    const { className, title, subTitle } = this.props
    const { expanded } = this.state

    let panelClass = {
      [theme.panel]: true,
      [theme.expanded]: expanded
    }

    let iconClass = {
      [theme.icon]: true,
      [theme.iconExpanded]: expanded
    }

    return (
      <div className={ classnames(className, panelClass) }>
        <div onClick={ () => this.handleToggle() }>
          <Flexbox layout='row' align='start center' className={ theme.toolbar }>
            <h6 className={ theme.title }>{ title }</h6>
            <h6 className={ theme.subTitle }>{ subTitle }</h6>
            <Flexbox flex />
            <FontIcon className={ classnames(iconClass) } value='keyboard_arrow_down' />
          </Flexbox>
        </div>
        <div className={ theme.content }>
          { this.props.children }
        </div>
      </div>
    )
  }
}

Panel.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  expanded: PropTypes.bool,
  onClick: PropTypes.func,
  subTitle: PropTypes.string,
  title: PropTypes.string
}

export default Panel
