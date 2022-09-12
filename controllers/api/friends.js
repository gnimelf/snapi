const router = require('express').Router()
// const { Friends } = require('./models');

router.get("/", (req, res) => {
    try {
        res.status(200).json(
            {
                message: "The is the friends route"
            }
        )
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router