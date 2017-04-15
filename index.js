'use strict'

var typeofObject = function (x) {
  if (typeof x === 'string') { return 'String' }
  var ownString = x && x.toString ? x.toString() : ''
  var typeString = ownString.slice(0, 8) === '[object ' && ownString.slice(-1) === ']'
    ? ownString
    : Object.prototype.toString.call(x)

  return typeString.slice(8, -1)
}

module.exports = typeofObject
