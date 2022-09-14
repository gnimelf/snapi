const router = require('express').Router()
// const {Reaction} = require('../../models')

router.get("/", (req, res) => {
    try {
        res.send("This is the reactions route!")
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router