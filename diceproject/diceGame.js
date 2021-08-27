'use strict'

const Dice = require('./dice')
const diceA = new Dice(); diceA.roll()
const diceB = new Dice(); diceB.roll()

if (diceA.dots === diceB.dots) console.log('tie')
else console.log(diceA.dots > diceB.dots ? 'diceA wins' : 'diceB wins')