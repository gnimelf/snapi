const router = require('express').Router()
// const { Department } = require('./models');

router.get("/", (req, res) => {
    try {
        res.send("This is the user route!")
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router