const { Schema, model } = require('mongoose')

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

const Reaction = model('reaction', reactionSchema)

module.exports = Reaction