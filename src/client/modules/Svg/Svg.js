import classnames from 'classnames'
import React, { PropTypes } from 'react'

import theme from 'modules/Svg/Svg.scss'

const Svg = (props) => (
  <div className={ classnames(theme.oh__svg, props.className) } dangerouslySetInnerHTML={{__html: props.source }} />
)

Svg.propTypes = {
  source: PropTypes.string
}

export default Svg
