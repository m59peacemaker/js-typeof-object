# typeof-object

All values in JavaScript are objects. `typeofObject` gets a value's object type, including custom types.

## install

```sh
$ npm instal typeof-object
```

## example

```js
const typeofObject = require('typeof-object')

typeofObject([]) // => 'Array'
typeofObject(Immutable.List()) // => 'List'
```
