const router = require('express').Router()
const {
    getUsers,
    getSingleUser,
    createUser,
    addFriend,
    deleteFriend,
    changeUser,
    deleteUser
} = require('../../controllers/userController')

// Get all users
router.route('/').get(getUsers).post(createUser)

// Get a single user
router.route('/:userId').get(getSingleUser)

// Update a user
router.route('/:userId/').put(changeUser)

// Delete a user
router.route('/:userId/').delete(deleteUser)

// add a friend
router.route('/:userId/friends/:friendId').post(addFriend)

// delete a friend
router.route('/:userId/friends/:friendId').delete(deleteFriend)

module.exports = router