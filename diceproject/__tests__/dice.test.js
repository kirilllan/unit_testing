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