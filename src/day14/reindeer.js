var reindeer = Reindeer.prototype

function Reindeer (n, sp, st, r) {
  this.name = n
  this.speed = sp
  this.stamina = st
  this.recovery = r

  this.position = 0
  this.cstamina = st
  this.crecovery = 0
  this.resting = false

  this.points = 0
}

reindeer.update = function () {
  if (!this.resting) {
    this.go()
  } else {
    this.recover()
  }
}

reindeer.go = function () {
  this.position += this.speed
  this.cstamina--
  if (this.cstamina === 0) {
    this.resting = true
  }
}

reindeer.recover = function () {
  this.crecovery++
  if (this.crecovery === this.recovery) {
    this.cstamina = this.stamina
    this.crecovery = 0
    this.resting = false
  }
}

module.exports = Reindeer
