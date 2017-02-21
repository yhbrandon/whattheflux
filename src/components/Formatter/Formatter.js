// Core
import React, { PropTypes } from 'react'
import format from './format'

const configureFormat = (type, value) => {
  switch (type) {
    case 'number':
      return format('number', value)
    case 'number-abbr':
      return format('number-abbr', value)
    case 'currency':
      return format('currency', value)
    case 'currency-abbr':
      return format('currency-abbr', value)
    case 'percent':
      return format('percent', value)
    default:
      return value
  }
}

const Formatter = ({ type, value }) => (
  <span data-black-locus='formatter'>{ configureFormat(type, value) }</span>
)

Formatter.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired
}

export default Formatter
