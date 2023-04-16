const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
  quizName: {
    type: String,
  },
  quizCreatorName: {
    type: String,
  },
  quizExpiry: {
    type: String,
    default: Date.now(),
  },
  questions: [
    {
      questionName: String,
      options: [String],
      correctOption: Number,
    },
  ],
});

const Quiz = mongoose.model("Quiz", quizSchema);

module.exports = Quiz;

/* 
  collection for quiz:
  id: ****
  quizName: ****
  quizCreaterName: *****
  quizExpiry: *****
  questions: [
      {
          name: "This is my first question"
          options:[op1, op2, op3]
          correctOption: op1
      }
      {
          name: "This is my first question"
          options:[op1, op2, op3]
          correctOption: op1
      }
  ]
  
  */
