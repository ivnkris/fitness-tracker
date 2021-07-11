const { Router } = require("express");

const {
  getAllWorkouts,
  changeWorkout,
  createWorkout,
  getWorkoutRange,
  createWorkoutRange,
} = require("../../controllers/api");

const router = Router();

router.get("/workouts/range", getWorkoutRange);
router.post("/workouts/range", createWorkoutRange);
router.put("/workouts/:id", changeWorkout);
router.get("/workouts", getAllWorkouts);
router.post("/workouts", createWorkout);

module.exports = router;
