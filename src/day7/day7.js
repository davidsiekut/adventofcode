'use strict'

let _ = require('underscore')

let rl = require('readline').createInterface({
  input: require('fs').createReadStream('./src/day7/input.txt')
})

let cmds = {}

rl.on('line', function (line) {
  let split = line.split(' -> ')
  cmds[split[1]] = split[0]
})

rl.on('close', function () {
  rl.close()
  console.log(rec('a'))
})

var rec = _.memoize(recurse)
function recurse (cmd) {
  let instruction = cmds[cmd]
  if (instruction === undefined) {
    return +cmd
  }

  let split = instruction.split(' ')
  let l = split[0]
  if (l === 'NOT') {
    return ~rec(split[1])
  }

  let op = split[1]
  let r = split[2]
  if (op === 'AND') {
    return rec(l) & rec(r)
  }
  if (op === 'OR') {
    return rec(l) | rec(r)
  }
  if (op === 'LSHIFT') {
    return rec(l) << rec(r)
  }
  if (op === 'RSHIFT') {
    return rec(l) >> rec(r)
  }

  return rec(instruction)
}
