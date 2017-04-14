'use strict'

var typeofObject = function (x) {
  if (typeof x === 'string') { return 'String' }
  var type = x && x.toString ? x.toString() : ''
  return (
    type.slice(0, 8) === '[object ' && type.slice(-1) === ']' ?
    type :
    Object.prototype.toString.call(x)
  ).slice(8, -1)
}

module.exports = typeofObject
