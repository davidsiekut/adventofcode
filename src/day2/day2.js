'use strict'

var rl = require('readline').createInterface({
  input: require('fs').createReadStream('./src/day2/input.txt')
})

let wrapping = 0
let ribbon = 0

rl.on('line', function (line) {
  let split = line.split('x')
  let l = +split[0]
  let w = +split[1]
  let h = +split[2]

  wrapping += 2 * l * w + 2 * w * h + 2 * h * l
  wrapping += Math.min(l * w, w * h, h * l)

  let s = smallest(l, w, h)
  let a = s[0]
  let b = s[1]

  ribbon += a + a + b + b
  ribbon += l * w * h
})

rl.on('close', function () {
  console.log(wrapping)
  console.log(ribbon)

  rl.close()
})

function smallest (l, w, h) {
  if (h < Math.max(l, w)) {
    return [Math.min(l, w), h]
  }
  return [l, w]
}
