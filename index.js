var dWebCodec = require('@dwebs/codec')

module.exports = function (key) {
  return key
    ? typeof key === 'string'
      ? dWebCodec.decode(key)
      : dWebCodec.decode(dWebCodec.encode(key))
    : null
}
