const { ObjectId } = require("mongoose").Types;
const { User, Thought, reactionSchema } = require("../models");

module.exports = {
    // Get all thoughts
    getThoughts(req, res) {
        Thought.find()
            .then(async (thoughts) => {
                const thoughtObj = {
                    thoughts,
                };
                return res.json(thoughtObj);
            })
            .catch((err) => {
                return res.status(500).json(err);
            });
    },
    // Get a single thought
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
            .select("-__v")
            .then((thought) =>
                !thought
                    ? res
                          .status(404)
                          .json({ message: "No thought with that ID" })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },
    // Create a new thought and push the created thought's _id to the associated user's thoughts array field
    createThought(req, res) {
        Thought.create(req.body)
            .then((thought) => {
                return User.findOneAndUpdate(
                    { _id: req.body.userId },
                    { $addToSet: { thoughts: thought._id } },
                    { new: true }
                );
            })
            .then((user) =>
                !user
                    ? res.status(404).json({
                          message:
                              "Thought created, but foudn no user with that username",
                      })
                    : res.json("Created the thought")
            )
            .catch((err) => res.status(500).json(err));
    },
    // remove a thought by its _id
    deleteThought(req, res) {
        Thought.findOneAndDelete({ _id: req.params.thoughtId }).then(
            (thought) => {
                !thought
                    ? res.status(404).json({ message: "No thought with that ID" })
                    : res.json({ message: `${thought}` });
            }
        );
    },
    createReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $addToSet: { reactions: req.body } },
            { runValidators: true, new: true }
        )
            .then((thought) =>
                !thought
                    ? res.status(404).json({
                          message:
                              "Reaction created, but found no user with that username",
                      })
                    : res.json("Created the reaction")
            )
            .catch((err) => res.status(500).json(err));
    },
    createReaction(req, res) {
        console.log('You are adding an reaction');
        console.log(req.body);
        Thought.findOneAndUpdate(
          { _id: req.params.thoughtId },
          { $addToSet: {reactions: req.body} },
          { runValidators: true, new: true }
        )
          .then((thought) =>
            !thought
              ? res
                  .status(404)
                  .json({ message: 'No thought found with that ID' })
              : res.json(thought)
          )
          .catch((err) => res.status(500).json(err));
      },
      removeReaction(req, res) {
        Thought.findOneAndUpdate(
          { _id: req.params.thoughtId },
          { $pull: { reactions: { reactionId: req.params.reactionId } } },
          { runValidators: true, new: true }
        )
          .then((thought) =>
            !thought
              ? res
                  .status(404)
                  .json({ message: 'No thought found with that ID' })
              : res.json(thought)
          )
          .catch((err) => res.status(500).json(err));
      },
};
