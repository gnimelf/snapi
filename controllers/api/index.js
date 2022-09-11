const router = require('express').Router()

const userRoutes = require('./users')
const friendsRoutes = require('./friends')

router.use('/users', userRoutes)
router.use('/friends', friendsRoutes)

module.exports = router