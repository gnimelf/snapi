const router = require('express').Router()

const userRoutes = require('./users')
const friendsRoutes = require('./friends')
const thoughtsRoutes = require('./thoughts')

router.use('/users', userRoutes)
router.use('/friends', friendsRoutes)
router.use('/thoughts', thoughtsRoutes)

module.exports = router