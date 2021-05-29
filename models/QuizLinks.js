const mongoose = require("mongoose");

const quizLinkSchema = new mongoose.Schema({
  quizId: {
    type: String,
    required: true,
  },
  quizName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
});

const QuizLink = mongoose.model("QuizLink", quizLinkSchema);

module.exports = QuizLink;
