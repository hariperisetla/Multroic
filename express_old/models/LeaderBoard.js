const mongoose = require("mongoose");

const leaderBoardSchema = new mongoose.Schema({
  quizId: {
    type: String,
  },
  quizName: {
    type: String
  },
  quizCreatorName: {
    type: String
  },
  username: {
    type: String,
  },
  score: {
    type: Number,
  },
});

const LeaderBoard = mongoose.model("LeaderBoard", leaderBoardSchema);

module.exports = LeaderBoard;
