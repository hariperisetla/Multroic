const Quiz = require("../models/Quiz");
const LeaderBoard = require("../models/LeaderBoard");
const { json } = require("body-parser");

module.exports.quiz_get = (req, res) => {
  res.render("quiz", { title: " - Games", theme: "light nav-active" });
};

module.exports.quiz_create_get = (req, res) => {
  res.render("quiz-create", { title: " - Create Quiz", theme: "light nav-active" });
};

module.exports.quiz_create_post = async (req, res) => {
  const mainBuffer = JSON.parse(req.body.mainBuffer);
  // console.log(mainBuffer)
  try {
    const newQuiz = Quiz(mainBuffer);
    const saveResults = newQuiz.save().then((doc) => {
      console.log(doc._id);
    });

    console.log("Insertion successfull");

    res.redirect('/profile/' + res.locals.user.username)

  } catch (err) {
    console.log(err);
  }
};

// initialize variables
var questions = [];
var answers = [];
var i = 0;
var user = "";
var quizId = 0;
var quizName = "";
var quizCreatorName = "";

// Get All Questions
module.exports.quiz_play_get = (req, res) => {
  // quizModel.aggregate([{ $match: { _id: ObjectId(req.params.quizId) }},{$sample: {size: 10}}])
  Quiz.findById(req.params.quizId, function (err, data) {
    if (err) {
      console.log(err);
      // res.render('500');
    } else {
      if (res.locals.user != null) {
        // console.log(res.locals);
        user = res.locals.user.username;
        // console.log(user);
      } else {
        user = "";
      }
      // res.cookie('player', res.locals.user.username)

      
      quizName = data.quizName
      quizCreatorName = data.quizCreatorName
      // console.log(quizName)
      questions = data.questions;

      // console.log(questions);

      if (questions.length) {
        // console.log(i);
        answers = [];
        res.render("play", {
          quizId: req.params.quizId,
          username: user,
          quizName,
          quizCreatorName,
          question: questions[0].questionName,
          options: questions[0].options,
          title: ' - ' + quizName + ' Quiz',
          theme: "dark",
        });
      }
    }
  });
};

/*
 * Render Next Question of the quiz
 * match the  answers user selected and the correct answers
 */
// console.log(questions);
var score = 0;

module.exports.quiz_play_post = (req, res) => {
  i = i + 1;
  if (req.body.optradio) {
    if (res.locals.user != null) {
      //   console.log(res.locals);
      user = res.locals.user.username;
      //   console.log(user);
    } else {
      user = "";
    }
    if (i <= questions.length) {
      answers.push(req.body.optradio);
    }
    if (i < questions.length) {
      res.render("next", {
        user: req.params.user,
        quizId: req.params.quizId,
        username: user,
        quizName,
          quizCreatorName,
        question: questions[i].questionName,
        options: questions[i].options,
        title: questions[i].quizName + ' - Quiz',
        theme: "dark",
      });
    } else {
      i = 0;
      score = 0;
      for (let j = 0; j < questions.length; j++) {
        // console.log(questions[j].correctOption);

        if (questions[j].correctOption == answers[j]) {
          score = score + 1;
        }
      }

      if (user != "") {
        LeaderBoard.findOne(
          { quizId: req.params.quizId, username: user },
          function (err, result) {
            if (!result) {
              result = new LeaderBoard({
                username: user,
                score,
                quizName,
          quizCreatorName,
                quizId: req.params.quizId,
              });
              result.save();
            } else {
              LeaderBoard.findOne(
                { quizId: req.params.quizId, username: user },
                function (err, result) {
                  var presentScore = score;
                  // console.log(typeof(result.score))
                  if (err) {
                    console.log("user not found");
                  } else if (parseInt(result.score) < presentScore) {
                    console.log(result.score + "<" + presentScore);
                    console.log("Found");

                    LeaderBoard.updateOne(
                      { quizId: req.params.quizId, username: user },
                      {
                        $set: {
                          score: presentScore,
                        },
                      }
                    )
                      .then((result) => {
                        console.log("updated");
                      })
                      .catch((err) => {
                        console.log(err);
                        console.log("cant update");
                      });
                  } else {
                    console.log("score is low");
                  }
                }
              );
            }
          }
        );
      }

      res.render("score", {
        user: req.params.user,
        score: score,
        total: questions.length,
        quizId: req.params.quizId,
        quizName,
          quizCreatorName,
        username: user,
        title: ' - Quiz',
        theme: "dark",
      });
    }
  }
};

module.exports.leaderboard_get = (req, res) => {
  // var leader = 0;

  var resources = {
    quizId: "quizId",
    username: "username",
    score: "score",
  };

  LeaderBoard.aggregate([
    {

      

      $lookup: {
        from: "avatars", // collection to join
        localField: "username", //field from the input documents
        foreignField: "username", //field from the documents of the "from" collection
        as: "avatars", // output array field
      },
    },
    {
      $match: { 
        quizId: req.params.quizId
      },
    },

    {
      $sort: { score: -1 },
    },
  ]).then((result) => {
    // res.send(result)
    console.log(result);
    res.render("leaderboard", {
      
      title: " - LeaderBoard",
      theme: "dark",
      leaderboard: result,
    });
  });
};
