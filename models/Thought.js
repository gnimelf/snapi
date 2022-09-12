const mongoose = require('mongoose')
const Reaction = require('./Reaction')
const User = require('./User')

const thoughtSchema = new mongoose.Schema({
    thoughtText: {
        type: String,
        required: true
    },
    username: User,
    reactions: [Reaction]
})

module.exports = thoughtSchema