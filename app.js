require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const cookieParser = require("cookie-parser");
const { use } = require("./routes/authRoutes");
const favicon = require("serve-favicon");
const path = require("path");
const {
  requireAuth,
  checkUser,
  userAvatar,
} = require("./middleware/authMiddleware");
const Avatar = require("./models/Avatar");
const { reset } = require("nodemon");
const User = require("./models/User");
const forgotRoutes = require("./routes/forgotRoutes");
const Quiz = require("./models/Quiz");
const LeaderBoard = require("./models/LeaderBoard");
const bodyParser = require("body-parser");
const quizModel = require("./models/Test");
// require("express-async-errors");
const cors = require("cors");
const QuizLink = require("./models/QuizLinks");
const { response } = require("express");
const ObjectId = require("mongoose/lib/schema/objectid");
const quizRoutes = require("./routes/quizRoutes");

// google auth
const {OAuth2Client} = require('google-auth-library');

const CLIENT_ID = '1007848847577-c35t8r9ddlmv8hdbspc9cko57o91eg7o.apps.googleusercontent.com'

const client = new OAuth2Client(CLIENT_ID);

const app = express();

const port = process.env.PORT || 3000;

if (process.env.NODE_ENV === "production") {
  app.use((req, res, next) => {
    if (req.header("x-forwarded-proto") !== "https")
      res.redirect(`https://${req.header("host")}${req.url}`);
    else next();
  });
}

// middleware & static files
app.use(express.static("public"));
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(express.json());
// app.use("/api/v1", require("./routes/forgotRoutes.js"));
app.use((error, req, res, next) => {
  res.status(500).json({ error: error.message });
});
app.use(forgotRoutes);

// register view engine
app.set("view engine", "ejs");

// connect to mongodb & listen for requests
const dbURI = process.env.DBURL;

mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((result) => app.listen(port))
  .catch((err) => console.log(err));

// routes
app.get("*", checkUser);

app.get("/", checkUser, (req, res) => {
  Avatar.find()
    .then((result) => {
      res.render("index", { title: " - Home", theme: "dark" });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/games", requireAuth, (req, res) => {
  res.render("games", { title: " - Games", theme: "light nav-active" });
});

app.use(authRoutes);

app.use("/quiz", quizRoutes);

app.get("/google", (req, res) => {
  res.render("google");
})

app.post("/google", (req, res) => {
  let token = req.body.token;
  
  console.log(token)


  async function verify() {
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
        // Or, if multiple clients access the backend:
        //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
    });
    const payload = ticket.getPayload();
    const userid = payload['sub'];
    console.log(payload.sub)


    // If request specified a G Suite domain:
    // const domain = payload['hd'];
  }
  verify().then(()=> {
    res.cookie('session-token', token);
    res.send('success');
  }).catch(console.error);

})

app.get('/google-logout', (req, res) => {
  res.clearCookie('session-token');
  res.redirect('/google');
})

app.get("/profile/:user", checkUser, (req, res) => {

  var result; 
  Quiz.find({ quizCreatorName: res.locals.user.username }).then((result) => {
    // console.log(result)
    res.render("profile", { title: "test", theme: "light nav-active", data: result });
  }).catch(err => {
    console.log(err);
  });
  
});

app.get("/temp", (req, res) => {
  res.render("temp");
});

app.use((req, res) => {
  res.status(404).render("404", { title: " - 404", theme: "light nav-active" });
});
