'use strict'

const Dice = require('../dice.js')

describe('Create a dice with no upper bound given', () => {
  const dice = new Dice()

  test('maximum dot count is 6', () => {
    expect(dice.maximumValue).toBe(6)
  })
  test('minimum dot count is 1', () => {
    expect(dice.minimumValue).toBe(1)
  })
  test('dots is 0', () => {
    expect(dice.dots).toBe(0)
  })
})

describe('Create a dice with given upper bound', () => {
  const testCases = [...Array(21).keys()].slice(1)
  test.each(testCases)('test upper bound %s', upperBound => {
    const dice = new Dice(upperBound)
    expect(dice.maximumValue).toBe(upperBound)
  })
})

describe('Test exceptions', () => {
  const testCases = [
    [1, 'Upper bound too small'],
    [21, 'Upper bound too large'],
    [' ', 'Upper bound must be an integer'],
    [2.5, 'Upper bound must be an integer']
  ]
  test.each(testCases)('upper bound %s throws an exception %s', (unbound, expected) => {
    expect(() => new Dice(unbound)).toThrow(expected)
  })
})