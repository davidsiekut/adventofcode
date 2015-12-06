'use strict'

var rl = require('readline').createInterface({
  input: require('fs').createReadStream('./src/day5/input.txt')
})

let nice = 0

rl.on('line', function (line) {
  if (!line.match(/(..).*\1/)) {
    return
  }
  if (!line.match(/(.).\1/)) {
    return
  }
  nice++
})

rl.on('close', function () {
  console.log(nice)
  rl.close()
})
