const { Schema, model } = require("mongoose");

const userSchema = new Schema(
    {
        username: {
            type: String,
            require: true,
            trimmed: true,
        },
        email: {
            type: String,
            require: true,
            unique: true,
            match: /.+\@.+\..+/,
        },
        friends: [this],
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: "thought",
            },
        ],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

userSchema.virtual("friendCount").get(function () {
    return this.friends.length;
});

const User = model("user", userSchema);

module.exports = User;
