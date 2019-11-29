const router = require('express').Router()

router.use('/users', require('./router'))

module.exports = router