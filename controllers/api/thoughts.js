const router = require('express').Router()
// const { Thoughts } = require('./models');

router.get("/", (req, res) => {
    try {
        res.send("This is the thoughts route!")
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router