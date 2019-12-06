const crypto = require('crypto')

module.exports = text => crypto.createHash('sha512').update(text).digest('base64')