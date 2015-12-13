'use strict'

let pw = 'hepxcrrq'

while (!pw.match(/(abc|bcd|cde|def|efg|fgh|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz)/) ||
        pw.match(/[ilo]/) ||
       !pw.match(/(.)\1.*(.)\2/)) {
  pw = go(pw, pw.length - 1)
}

console.log(pw)

function go (s, i) {
  if (s[i] === 'z') {
    s = s.substr(0, s.length - 1)
    if (i > 0) {
      s = go(s, i - 1) + 'a'
    }
  } else {
    s = s.substr(0, i) + next(s[i])
  }
  return s
}

function next (s) {
  let c = s.charCodeAt(0)
  if (c === 122) {
    return 'a'
  }
  return String.fromCharCode(++c)
}
