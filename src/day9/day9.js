'use strict'

let rl = require('readline').createInterface({
  input: require('fs').createReadStream('./src/day9/input.txt')
})

let lookups = []
let places = []

rl.on('line', function (line) {
  let split = line.split(' ')
  let from = split[0]
  let to = split[2]
  let delta = split[4]

  lookups[from + to] = +delta
  lookups[to + from] = +delta

  if (places.indexOf(from) === -1) {
    places.push(from)
  }
  if (places.indexOf(to) === -1) {
    places.push(to)
  }
})

rl.on('close', function () {
  rl.close()

  var p = permutate(places)
  let min = 69420

  for (let i = 0; i < p.length; i++) {
    let dist = 0

    for (let j = 0; j < p[i].length - 1; j++) {
      dist += lookups[p[i][j] + p[i][j + 1]]
    }

    if (dist < min) {
      min = dist
    }
  }

  console.log(min)
})

function permutate (list) {
  if (list.length === 0) {
    return [[]]
  }
  var result = []
  for (var i = 0; i < list.length; i++) {
    var copy = Object.create(list)
    var head = copy.splice(i, 1)
    var rest = permutate(copy)
    for (var j = 0; j < rest.length; j++) {
      var next = head.concat(rest[j])
      result.push(next)
    }
  }
  return result
}
