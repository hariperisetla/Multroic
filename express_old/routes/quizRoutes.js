const { Router } = require("express");
const quizController = require("../controllers/quizController");
const { requireAuth, checkUser } = require("../middleware/authMiddleware");

const router = Router();

router.get("/", requireAuth, quizController.quiz_get);
router.get("/create", requireAuth, quizController.quiz_create_get);
router.post("/", requireAuth, checkUser, quizController.quiz_create_post);
router.get("/play/:quizId", checkUser, quizController.quiz_play_get);
router.post("/play/:quizId/next", checkUser, quizController.quiz_play_post);
router.get("/:quizId/leaderboard", checkUser, quizController.leaderboard_get);

module.exports = router;