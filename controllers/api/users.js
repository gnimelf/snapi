const router = require('express').Router()
// const { Users } = require('./models');

router.get("/", (req, res) => {
    try {
        res.status(200).json(
            {
                message: "This is the user route!"
            }
        )
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router