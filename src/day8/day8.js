'use strict'

let rl = require('readline').createInterface({
  input: require('fs').createReadStream('./src/day8/input.txt')
})

let total = 0
let memory = 0

rl.on('line', function (line) {
  total += line.length

  for (let i = 1; i < line.length - 1; i++) {
    let c = line[i]
    if (c === '\\') {
      let d = line[i + 1]
      if (d === 'x') {
        memory++
        i += 3
        continue
      }
      memory++
      i++
      continue
    }
    memory++
  }
})

rl.on('close', function () {
  rl.close()
  console.log(total - memory)
})
