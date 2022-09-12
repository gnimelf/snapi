const mongoose = require('mongoose')
const Friend = require('./Friend')
const Thought = require('./Thought')

const userSchema = new mongoose.Schema({
    user: {
        type: String,
        require: true
    },
    friends: [Friend],
    thoughts: [Thought]

})

module.exports = userSchema