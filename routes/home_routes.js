const router = require('express').Router()
// const { Department } = require('./models');

router.get("/", (req, res) => {
    try {
        res.send("Hello world! This routes works!")
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router