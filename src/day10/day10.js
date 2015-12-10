'use strict'

let input = '1113222113'
let loops = 40

for (let a = 0; a < loops; a++) {
  input = lookandsay(input.match(/(.)\1*/g))
}
console.log(input.length)

function lookandsay (input) {
  let s = ''
  for (let i = 0; i < input.length; i++) {
    s += input[i].length + input[i][0]
  }
  return s
}
