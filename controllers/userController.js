const { User } = require("../models");

module.exports = {
    // Find all users
    getUsers(req, res) {
        User.find()
            .then((users) => res.json(users))
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    // Find a user
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
            .select("-__v")
            .then((user) =>
                !user
                    ? res.status(404).json({ message: "No user with that ID" })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },
    // create a new user
    createUser(req, res) {
        User.create(req.body)
            .then((dbUserData) => res.json(dbUserData))
            .catch((err) => res.status(500).json(err));
    },

    // delete a user
    deleteUser(req, res) {
        User.findOneAndRemove({ _id: req.params.userId })
            .then((user) =>
                !user
                    ? res.status(404).json({ message: "No user with that ID" })
                    : res.json({ message: `${user.username} has been removed` })
            )
            .catch((err) => res.status(500).json(err));
    },

    // Add a friend
    addFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $addToSet: { friends: req.params.friendId } },
            { runValidators: true, new: true }
        )
            .then((user) =>
                !user
                    ? res
                          .status(404)
                          .json({ message: "No user found with that ID :(" })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },

    // Update a User
    changeUser(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: { username: req.body.username } },
            { runValidators: true, new: true }
        )
            .then((user) =>
                !user
                    ? res
                          .status(404)
                          .json({ message: "No user found with that ID " })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },

    // Delete a friend
    deleteFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: { friends: req.params.friendId } },
            { runValidators: true, new: true }
        )
            .then((user) =>
                !user
                    ? res
                          .status(404)
                          .json({ message: "No user found with that ID " })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },
};
