const router = require('express').Router()

router.use('/users', require('./routes/users'))

module.exports = router