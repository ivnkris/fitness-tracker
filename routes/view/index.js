const { Router } = require("express");

const {
  renderStatsPage,
  renderExercisePage,
  renderHomePage,
} = require("../../controllers/view");

const router = Router();

router.get("/stats", renderStatsPage);
router.get("/exercise", renderExercisePage);
router.get("/", renderHomePage);

module.exports = router;
