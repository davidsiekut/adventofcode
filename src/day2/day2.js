'use strict'

var rl = require('readline').createInterface({
  input: require('fs').createReadStream('./src/day2/day2.txt')
})

let wrapping = 0

rl.on('line', function (line) {
  let s = line.split('x')
  let l = +s[0]
  let w = +s[1]
  let h = +s[2]
  wrapping += 2 * l * w + 2 * w * h + 2 * h * l
  wrapping += Math.min(l * w, w * h, h * l)
})

rl.on('close', function () {
  console.log(wrapping)
})
