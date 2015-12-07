'use strict'

let rl = require('readline').createInterface({
  input: require('fs').createReadStream('./src/day6/input.txt')
})

let xmax = 1000
let ymax = 1000

let arr = new Array(xmax)
for (var x = 0; x < xmax; x++) {
  arr[x] = new Array(ymax)
  for (let y = 0; y < ymax; y++) {
    arr[x][y] = 0
  }
}

let x1
let y1
let x2
let y2

rl.on('line', function (line) {
  let split = line.split(' ')
  switch (split[0]) {
    case 'toggle':
      x1 = +split[1].split(',')[0]
      y1 = +split[1].split(',')[1]
      x2 = +split[3].split(',')[0]
      y2 = +split[3].split(',')[1]

      toggle(x1, y1, x2, y2)
      break
    case 'turn':
      x1 = +split[2].split(',')[0]
      y1 = +split[2].split(',')[1]
      x2 = +split[4].split(',')[0]
      y2 = +split[4].split(',')[1]

      if (split[1] === 'on') {
        turnon(x1, y1, x2, y2)
      } else {
        turnoff(x1, y1, x2, y2)
      }
      break
  }
})

rl.on('close', function () {
  rl.close()

  let brightness = 0

  for (let x = 0; x < xmax; x++) {
    for (let y = 0; y < ymax; y++) {
      brightness += arr[x][y]
    }
  }

  console.log(brightness)
})

function turnon (x1, y1, x2, y2) {
  for (let x = x1; x <= x2; x++) {
    for (let y = y1; y <= y2; y++) {
      arr[x][y]++
    }
  }
}

function turnoff (x1, y1, x2, y2) {
  for (let x = x1; x <= x2; x++) {
    for (let y = y1; y <= y2; y++) {
      if (arr[x][y] > 0) arr[x][y]--
    }
  }
}

function toggle (x1, y1, x2, y2) {
  for (let x = x1; x <= x2; x++) {
    for (let y = y1; y <= y2; y++) {
      arr[x][y] += 2
    }
  }
}
