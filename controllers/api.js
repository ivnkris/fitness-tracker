const { Workout } = require("../models");

const getAllWorkouts = async (req, res) => {
  try {
    const allWorkoutsData = await Workout.find();
    return res.status(200).json(allWorkoutsData);
  } catch (error) {
    console.info(error.message);
    return res.status(500).json({ error: "Failed to get workouts." });
  }
};

const changeWorkout = async (req, res) => {
  try {
    const workoutData = await Workout.findByIdAndUpdate(req.params.id, {
      $push: { exercises: req.body },
    });
    return res.status(200).json(workoutData);
  } catch (error) {
    console.info(error.message);
    return res.status(500).json({ error: "Failed to update workout." });
  }
};

const createWorkout = async (req, res) => {
  try {
    const workoutData = await Workout.create({});
    return res.status(200).json(workoutData);
  } catch (error) {
    console.info(error.message);
    return res.status(500).json({ error: "Failed to create workout." });
  }
};

const getWorkoutRange = async (req, res) => {
  try {
    const workoutData = await Workout.find();
    return res.status(200).json(workoutData);
  } catch (error) {
    console.info(error.message);
    return res.status(500).json({ error: "Failed to get workout." });
  }
};

module.exports = {
  getAllWorkouts,
  changeWorkout,
  createWorkout,
  getWorkoutRange,
};
