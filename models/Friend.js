const mongoose = require('mongoose')
const Reaction = require('./Reaction');
const userSchema = require('./User');

const friendsSchema = new mongoose.Schema({
    thoughtText: { 
        type: String, 
        required: true 
    },
    username: {
        type: String,
        require: true
    },
    reactions: [Reaction],
    reactionCount: {
        type: Number,
        require: true,
        default: 0
    }
  });

  const Friend = mongoose.model('Friend', friendsSchema) 

  module.exports = Friend