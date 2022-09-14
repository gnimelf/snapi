const router = require('express').Router()

const userRoutes = require('./users')
const friendsRoutes = require('./friends')
const thoughtsRoutes = require('./thoughts')
const reactionsRoutes = require('./reactions')


router.use('/users', userRoutes)
router.use('/friends', friendsRoutes)
router.use('/thoughts', thoughtsRoutes)
router.use('/reactions', reactionsRoutes)


module.exports = router