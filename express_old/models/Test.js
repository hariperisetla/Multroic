const mongoose = require("mongoose");

const quizTestSchema = new mongoose.Schema({
  quizName: {
    type: String,
  },
  quizCreaterName: {
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

const QuizTest = mongoose.model("QuizTest", quizTestSchema);

/* */
const testingSchemaValidity = async (userInput) => {
  console.log("validation checking");
  // const newQuiz = new QuizTest({
  //     quizName: "This is fisad",
  //     quizCreaterName: "Umakanth",
  //     questions: [
  //         {name: "q1", options: ["op1", "op2"], correctOption: "op1"},
  //         {name: "q2", options: ["op1", "op2"], correctOption: "op1"},
  //         {name: "q3", options: ["op1", "op2"], correctOption: "op1"}
  //     ]
  // })
  console.log(userInput);
  const newQuiz = newQuiz({ userInput });
  try {
    const saveQuiz = await newQuiz.save();
    return true;
  } catch (e) {
    return false;
  }
};

const addQusetionIntoQuiz = () => {
  console.log("This is question add method");
};

module.exports = QuizTest;

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
