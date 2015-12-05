'use strict'

var md5 = require('md5')
var secret = 'iwrupvqb'
var i = 0
var hash = ''

do {
  hash = md5(secret + i)
  console.log('hash: ' + hash + ' secret: ' + secret + i)
  i++
} while (hash.substr(0, 5) !== '00000')
