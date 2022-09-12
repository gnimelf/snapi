const { Schema, model } = require('mongoose')

const friendsSchema = new Schema({
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
    reactionCount: {
        type: Number,
        require: true,
        default: 0
    }
  });

  const Friend = model('friend', friendsSchema) 

  module.exports = Friend