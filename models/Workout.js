const mongoose = require("mongoose");

const schema = {
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      duration: {
        type: Number,
        required: true,
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      distance: {
        type: Number,
      },
    },
  ],
};

const WorkoutSchema = new mongoose.Schema(schema);

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
