const mongoose = require("mongoose");

// MongoDB schema
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

// schema for virtual properties
const virtuals = {
  toJSON: {
    virtuals: true,
  },
};

const WorkoutSchema = new mongoose.Schema(schema, virtuals);

// function to add aggregate exercise duration as a virtual property to database
function calculateTotalDuration() {
  const callback = (aggregate, exercise) => {
    return aggregate + exercise.duration;
  };

  const totalDuration = this.exercises.reduce(callback, 0);

  return totalDuration;
}

// add schema for virtual properties to database
WorkoutSchema.virtual("totalDuration").get(calculateTotalDuration);

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
