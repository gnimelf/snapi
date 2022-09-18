const { Schema, model} = require('mongoose')


const userSchema = new Schema({
    username: {
        type: String,
        require: true,
        trimmed: true
    },
    email: {
        type: String,
        require: true,
        unique: true,
        match: /.+\@.+\..+/,
    },
    friends: [{
        type: Schema.Types.ObjectId,
        ref:'user'
    }],
    thoughts: [{
        type: Schema.Types.ObjectId,
        ref:'thought'
    }]

})

const User = model('user', userSchema)

module.exports = User