'use strict'

let Reindeer = require('./reindeer.js')

let sleigh = []
sleigh.push(new Reindeer('vixen', 8, 8, 53))
sleigh.push(new Reindeer('blitzen', 13, 4, 49))
sleigh.push(new Reindeer('rudolph', 20, 7, 132))
sleigh.push(new Reindeer('cupid', 12, 4, 43))
sleigh.push(new Reindeer('donner', 9, 5, 38))
sleigh.push(new Reindeer('dasher', 10, 4, 37))
sleigh.push(new Reindeer('comet', 3, 37, 76))
sleigh.push(new Reindeer('prancer', 9, 12, 97))
sleigh.push(new Reindeer('dancer', 37, 1, 36))

let t = 0
let tmax = 2503

while (t <= tmax) {
  for (let i = 0; i < sleigh.length; i++) {
    sleigh[i].update()
  }

  let first = sleigh[0].position
  for (let i = 1; i < sleigh.length; i++) {
    if (sleigh[i].position > first) {
      first = sleigh[i].position
    }
  }
  for (let i = 0; i < sleigh.length; i++) {
    if (sleigh[i].position === first) {
      sleigh[i].points++
    }
  }

  t++
}

for (let i = 0; i < sleigh.length; i++) {
  console.log(sleigh[i].points)
}
