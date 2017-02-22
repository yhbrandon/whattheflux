const format = (type, value) => {
  if (value === null || value === undefined) return ''
  if (typeof value !== 'number') return value

  switch (type) {
    case 'number':
      return printNumber(value)
    case 'number-abbr':
      return printAbbrNumber(value)
    case 'currency':
      return printCurrency(value)
    case 'currency-abbr':
      return printAbbrCurrency(value)
    case 'percent':
      return printPercent(value)
    default:
      return value
  }
}

export default format

// Print Methods

const printAbbrNumber = value => {
  const negative = isNegative(value)
  const suffix = getSuffix(value)

  value = abbreviate(value)

  if (negative) return `(${value.toString().replace('-', '')}${suffix})`

  return `${value.toString()}${suffix}`
}

const printAbbrCurrency = value => {
  const negative = isNegative(value)
  const suffix = getSuffix(value)

  value = abbreviate(value)

  if (negative) return `($${value.toString().replace('-', '')}${suffix})`

  return `$${value.toString()}${suffix}`
}

const printCurrency = value => {
  const negative = isNegative(value)

  value = insertCommas(roundNumber(value))

  if (negative) return `($${value.toString().replace('-', '')})`

  return `$${value}`
}

const printNumber = value => {
  const negative = isNegative(value)

  value = insertCommas(roundNumber(value))

  if (negative) return `(${value.toString().replace('-', '')})`

  return `${value}`
}

const printPercent = value => {
  const negative = isNegative(value)

  value = percent(value)

  if (negative) return `${value.toString()}%`

  return `${value}%`
}

// Helper Methods

const abbreviate = value => {
  if (value >= 1000000000 || value <= -1000000000) {
    return roundNumber(value / 1000000000)
  } else if (value >= 1000000 || value <= -1000000) {
    return roundNumber(value / 1000000)
  } else if (value >= 1000 || value <= -1000) {
    return roundNumber(value / 1000)
  } else {
    return getPreciseDecimal(value)
  }
}

const getSuffix = value => {
  const suffixes = ['', 'k', 'm', 'b']
  let suffix = suffixes[0]

  if (value >= 1000000000 || value <= -1000000000) {
    suffix = suffixes[3]
  } else if (value >= 1000000 || value <= -1000000) {
    suffix = suffixes[2]
  } else if (value >= 1000 || value <= -1000) {
    suffix = suffixes[1]
  } else {
    suffix = suffixes[0]
  }

  return suffix
}

const insertCommas = value => {
  if (value >= 1000 || value <= -1000) {
    return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  } else {
    return value.toString()
  }
}

const getPreciseDecimal = value => {
  // show tenths and hundredths place after decimal for nonwhole numbers
  if (value % 1 !== 0) return value.toFixed(2)

  return value
}

const isNegative = value => (value < 0)
const percent = value => (Math.round(100 * value))
const roundNumber = value => (getPreciseDecimal(Math.round(value * 100) / 100))
