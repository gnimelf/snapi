const mongoose = require('mongoose')
const User = require('./User')

const reactionSchema = new mongoose.Schema({
    reactionBody: {
        type: String,
        require: true
    },
    username: User
})

module.exports = reactionSchema