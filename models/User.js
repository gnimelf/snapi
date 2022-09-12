const { Schema, model} = require('mongoose')


const userSchema = new Schema({
    user: {
        type: String,
        require: true
    },
    friends: [{
        type: Schema.Types.ObjectId,
        ref:'friend'
    }],
    thoughts: [{
        type: Schema.Types.ObjectId,
        ref:'thought'
    }]

})

const User = model('user', userSchema)

module.exports = User