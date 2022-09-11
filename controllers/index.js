const router = require('express').Router()

const homeRoutes = require('./home_routes')

router.use('/', homeRoutes)

module.exports = router