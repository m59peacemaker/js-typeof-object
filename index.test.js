var test = require('tape')
var typeofObject = require('./')

var X = {}
Object.defineProperty(X, Symbol.toStringTag, { value: 'X' })

test('typeofObject', function (t) {
  t.equal(typeofObject({}), 'Object')
  t.equal(typeofObject([]), 'Array')
  t.equal(typeofObject('abc'), 'String')
  t.equal(typeofObject(123), 'Number')
  t.equal(typeofObject(false), 'Boolean')
  t.equal(typeofObject(function () {}), 'Function')
  t.equal(typeofObject(null), 'Null')
  t.equal(typeofObject(undefined), 'Undefined')
  t.equal(typeofObject({ toString: function () { return '[object Foo]' } }), 'Foo')
  t.equal(typeofObject(X), 'X')

  t.end()
})
