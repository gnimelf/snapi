const { Schema, model} = require('mongoose')

const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true
    },
    username: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    reactions: [{
        type: Schema.Types.ObjectId,
        ref: 'reaction'
    }],
})

const Thought = model('thought', thoughtSchema)

module.exports = Thought