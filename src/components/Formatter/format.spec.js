import format from './format'
import { expect } from 'chai'

describe('Core - Utils:format', () => {
  let number

  it('Should format a number', () => {
    number = format('number', 1234)

    expect(number).to.equal('1,234')
  })

  it('Should format numbers with the correct number of places after the decimal', () => {
    number = format('number', 8.9)

    expect(number).to.equal('8.90')
  })

  it('Should format an abbreviated number', () => {
    number = format('number-abbr', 1234)

    expect(number).to.equal('1.23k')
  })

  it('Should format a nonwhole abbreviated number', () => {
    number = format('number-abbr', 8.9)

    expect(number).to.equal('8.90')
  })

  it('Should format a currency number', () => {
    number = format('currency', 1234)

    expect(number).to.equal('$1,234')
  })

  it('Should format a nonwhole currency number', () => {
    number = format('currency', 8.9)

    expect(number).to.equal('$8.90')
  })

  it('Should format an abbreviated currency number', () => {
    number = format('currency-abbr', 1234)

    expect(number).to.equal('$1.23k')
  })

  it('Should format a nonwhole abbreviated currency number', () => {
    number = format('currency-abbr', 8.9)

    expect(number).to.equal('$8.90')
  })

  it('Should format a percent', () => {
    number = format('percent', 0.57)

    expect(number).to.equal('57%')
  })

  it('Should format a negative number', () => {
    number = format('number', -1234)

    expect(number).to.equal('(1,234)')
  })

  it('Should format a nonwhole negative number', () => {
    number = format('number', -8.9)

    expect(number).to.equal('(8.90)')
  })

  it('Should format a negative abbreviated number', () => {
    number = format('number-abbr', -1234)

    expect(number).to.equal('(1.23k)')
  })

  it('Should format a nonwhole negative abbreviated number', () => {
    number = format('number-abbr', -8.9)

    expect(number).to.equal('(8.90)')
  })

  it('Should format a negative currency number', () => {
    number = format('currency', -1234)

    expect(number).to.equal('($1,234)')
  })

  it('Should format a nonwhole negative currency number', () => {
    number = format('currency', -8.9)

    expect(number).to.equal('($8.90)')
  })

  it('Should format a negative abbreviated currency number', () => {
    number = format('currency-abbr', -1234)

    expect(number).to.equal('($1.23k)')
  })

  it('Should format a nonwhole negative abbreviated currency number', () => {
    number = format('currency-abbr', -8.9)

    expect(number).to.equal('($8.90)')
  })

  it('Should format a negative percent', () => {
    number = format('percent', -0.57)

    expect(number).to.equal('-57%')
  })

  it('Should not format a string', () => {
    number = format('number', '1234')

    expect(number).to.equal('1234')
  })

  it('Should not fail on null values', () => {
    number = format('number', null)

    expect(number).to.equal('')
  })
})
