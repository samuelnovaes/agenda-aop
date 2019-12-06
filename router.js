const router = require('express').Router()

router.use('/users', require('./routes/users'))
router.use('/contacts', require('./routes/contacts'))

module.exports = router