var bufKeyMaybe = require('.')

var keys = [
  {type: 'valid', key: 'a6848dd4f5515f70b4c20c484d7b348ce71f711d8f94b07d919f0acc068d165d'},
  {type: 'valid', key: 'dweb://a6848dd4f5515f70b4c20c484d7b348ce71f711d8f94b07d919f0acc068d165d'},
  {type: 'valid', key: 'dwebs.io/a6848dd4f5515f70b4c20c484d7b348ce71f711d8f94b07d919f0acc068d165d'},
  {type: 'invalid', key: 'key-me-maybe'},
  {type: 'null', key: null}
]

keys.forEach(function (key) {
  try {
    console.log(key.type, bufKeyMaybe(key.key))
  } catch (e) {
    console.log(key.type, 'dWeb key not valid')
  }
})
