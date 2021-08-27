'use strict'

module.exports = class Dice {
  constructor(upperBound = 6) {
    if (!Number.isInteger(upperBound)) throw 'Upper bound must be an integer'
    if (upperBound < 2) throw 'Upper bound too small'
    if (upperBound > 20) throw 'Upper bound too large'
    this.upperBound = upperBound
    this.dotCount = 0
  }
  get dots() {
    return this.dotCount
  }
  get maximumValue() {
    return this.upperBound
  }
  get minimumValue() {
    return 1
  }
  roll() {
    this.dotCount = Math.ceil(Math.random() * this.upperBound)
  }
  toString() {
    if (this.dotCount === 0) return 'not rolled yet'
    return this.dots + ''
  }
}