const router = require('express').Router()
const {
    getUsers,
    getSingleUser,
    createUser,

} = require('../../controllers/userController')

// Get all users
router.route('/').get(getUsers).post(createUser)

// Get a single user
router.route('/:userId').get(getSingleUser)

// Update a user
router.route('/:userId/').put(changeUser)


module.exports = router