const { Schema } = require('mongoose')

const reactionSchema = new Schema({
    reactionBody: {
        type: String,
        require: true
    },
    username: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
})

module.exports = reactionSchema