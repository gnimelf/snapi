const router = require('express').Router()
const {
    getThoughts, 
    createThought,
    deleteThought,
    getSingleThought,
    createReaction,
    removeReaction,
    changeThought
} = require ('../../controllers/thoughtController')

router.route('/').get(getThoughts).post(createThought)

router.route('/:thoughtId').delete(deleteThought)

router.route('/:thoughtId').get(getSingleThought)

router.route('/:thoughtId').put(changeThought)

router.route('/:thoughtId/reactions').post(createReaction)

router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router