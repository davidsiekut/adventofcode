'use strict'

let rl = require('readline').createInterface({
  input: require('fs').createReadStream('./src/day12/input.txt')
})

let sum = 0
rl.on('line', function (line) {
  sum += unwrap(JSON.parse(line))
})

rl.on('close', function () {
  rl.close()
  console.log(sum)
})

function unwrap (d) {
  if (typeof (d) === 'number') {
    return d
  }
  if (typeof (d) === 'object') {
    let s = 0
    for (var i in d) {
      if (!(d instanceof Array)) {
        if (d[i] === 'red') {
          return 0
        }
      }
      s += unwrap(d[i])
    }
    return s
  }
  return 0
}
