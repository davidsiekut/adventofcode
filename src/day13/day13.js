'use strict'

let rl = require('readline').createInterface({
  input: require('fs').createReadStream('./src/day13/input.txt')
})

let lookups = []
let people = []

rl.on('line', function (line) {
  line = line.replace('.', '')
  let split = line.split(' ')
  let who = split[0]
  let gain = split[2]
  let amount = split[3]
  let next = split[10]

  if (gain === 'gain') {
    lookups[who + next] = +amount
  } else {
    lookups[who + next] = -amount
  }

  if (people.indexOf(who) === -1) {
    people.push(who)
  }
})

rl.on('close', function () {
  rl.close()

  var p = permutate(people)
  let max = 0
  for (let i = 0; i < p.length; i++) {
    let happy = 0

    happy += lookups[p[i][0] + p[i][people.length - 1]]
    for (let j = 0; j < people.length - 1; j++) {
      happy += lookups[p[i][j] + p[i][j + 1]]
      happy += lookups[p[i][j + 1] + p[i][j]]
    }
    happy += lookups[p[i][people.length - 1] + p[i][0]]

    if (happy > max) {
      max = happy
    }
  }

  console.log(max)
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
