const { Schema, model} = require('mongoose')
const reactionSchema = require('./Reaction')

const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        min: 1,
        max: 280
    },
    createdAt:{
        type: Date, 
        default: Date.now
    },
    username: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    reactions: [reactionSchema],
})

const Thought = model('thought', thoughtSchema)

module.exports = Thought