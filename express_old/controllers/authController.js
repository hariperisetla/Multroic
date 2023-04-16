const User = require("../models/User");
const jwt = require("jsonwebtoken");
const Avatar = require("../models/Avatar");
const Forgot = require("../models/Token");
const sendEmail = require("../utils/email/sendEmail");
const Token = require("../models/Token.js");
const crypto = require("crypto");
const bcrypt = require("bcrypt");

const {
  requestPasswordReset,
  resetPassword,
  confirmEmail
} = require("../middleware/forgotMiddleware");
const { json } = require("body-parser");

// handle errors
const handleErrors = (err) => {
  console.log(err.message, err.code);
  let errors = { email: "", password: "" };

  // incorrect email
  if (err.message === "incorrect email") {
    errors.email = "That email is not registered";
  }

  // incorrect password
  if (err.message === "incorrect password") {
    errors.password = "That password is incorrect";
  }

  // duplicate email error
  if (err.code == 11000) {
    if (err.message.includes("username_1")) {
      // assuming name is `email_1` & also you can trim msg to get failing input value.
      errors.username = "that username is already taken";
    } else {
      errors.email = "that email is already registered";
      // return res.status(422).send(["Duplicate email address found."]);
    }

    return errors;
  }

 

  // validation errors
  if (err.message.includes("user validation failed")) {
    // console.log(err.message);
    Object.values(err.errors).forEach(({ properties }) => {
      //console.log(val);
      //   console.log(properties);
      errors[properties.path] = properties.message;
    });
  }

  return errors;
};

// create json web token
const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET, {
    expiresIn: maxAge,
  });
};

// controller actions
module.exports.signup_get = (req, res) => {
  res.render("signup", { title: " - Sign Up", theme: "light nav-active" });
};

module.exports.login_get = (req, res) => {
  res.render("login", { title: " - Login", theme: "light nav-active" });
};

module.exports.signup_post = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const user = await User.create({ username, email, password });
    const avatar = await Avatar.create({
      _id: user._id,
      username: user.username,
      avatar: "/assets/img/avatars/SVG/default.svg",
    });
    const token = createToken(user._id);

    const clientURL = "multroic.herokuapp.com";

    let confirmtoken = await Token.findOne({ userId: user._id });
    if (confirmtoken) await confirmtoken.deleteOne();
    let resetToken = crypto.randomBytes(32).toString("hex");
    const hash = await bcrypt.hash(resetToken, Number(10));

    await new Token({
      userId: user._id,
      token: hash,
      createdAt: Date.now(),
    }).save();

    const link = `${clientURL}/auth/confirmEmail/${resetToken}/${user._id}`;
    // console.log('Sending email to: ', user.username);
    // sendEmail(user.email,"Confirm your email",{username: user.username,link: link,},"./template/welcome.handlebars");

    sendEmail(
      user.email,
      "Welcome to Multroic",
      {
        username: user.username, link
      },
      "./template/welcome.handlebars"
    );
    res.cookie("jwt", token, { maxAge: maxAge * 1000 });
    res.status(201).json({ user: user._id });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

module.exports.requestConfirm_get = async (req, res) => {
  // res.render("confirm", { title: " - Confirm Email", theme: "light nav-active", id: req.params.id, token: req.params.token });
  try {

    user = res.locals.user
    
    const clientURL = "multroic.herokuapp.com";

    let confirmtoken = await Token.findOne({ userId: user._id });
    if (confirmtoken) await confirmtoken.deleteOne();
    let resetToken = crypto.randomBytes(32).toString("hex");
    const hash = await bcrypt.hash(resetToken, Number(10));

    await new Token({
      userId: user._id,
      token: hash,
      createdAt: Date.now(),
    }).save();

    const link = `${clientURL}/auth/confirmEmail/${resetToken}/${user._id}`;
    // console.log('Sending email to: ', user.username);
    // sendEmail(user.email,"Confirm your email",{username: user.username,link: link,},"./template/welcome.handlebars");

    sendEmail(
      user.email,
      "Welcome to Multroic",
      {
        username: user.username, link
      },
      "./template/welcome.handlebars"
    );

    res.send("Confirm Email Request sent. Please check your Email.");

  } catch (err) {
    return res.json(err);
  }
};

module.exports.confirmEmail_get = (req, res) => {
  // res.render("confirm", { title: " - Confirm Email", theme: "light nav-active", id: req.params.id, token: req.params.token });
    console.log('test')
    const confirmEmailService = confirmEmail(
      req.params.id,
      req.params.token,
    );

    // console.log(req.params.id,
    //   req.params.token);
    
      res.redirect('/');

  }

// module.exports.confirmEmail_post = async (req, res, next) => {

//   try {
//     console.log('test')
//     const confirmEmailService = await confirmEmail(
//       req.body.id,
//       req.body.token,
//     );

//     // console.log(req.params.id,
//     //   req.params.token);

//     if (res.json(confirmEmailService)) {
//       res.redirect("/");
//     } else {
//       return res.json("Error");
//     }
//   } catch (err) {
//     return res.json(err);
//   }
  
// };

module.exports.login_post = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.cookie("jwt", token, { maxAge: maxAge * 1000 });
    res.status(200).json({ user: user._id });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

module.exports.logout_get = (req, res) => {
  res.cookie("jwt", "", { maxAge: 1 });
  res.redirect("/");
};

module.exports.avatars_get = (req, res) => {
  // console.log("Yes");
  res.render("avatars", { title: " - Avatars", theme: "light nav-active" });
};

module.exports.avatars_post = (req, res) => {
  Avatar.updateOne(
    { _id: req.body._id },
    {
      // $inc: { stock: 5 },
      $set: {
        avatar: req.body.avatar,
        // "info.publisher": "2222",
        // tags: [ "software" ],
        // "ratings.1": { by: "xyz", rating: 3 }
      },
    }
  )
    .then((result) => {
      // console.log(res.locals.user.username)
      res.redirect("/profile/" + res.locals.user.username);
    })
    .catch((err) => {
      console.log(err);
    });

  // }
  // console.log(req.body)
  // const avatar = new Avatar(req.body);
  // avatar.save().then((result) => {
  //     res.redirect('/');
  // })
  // .catch((err) => {
  //     console.log(err);
  // });
};

module.exports.resetPasswordRequestController_get = (req, res, next) => {
  res.render("requestReset", { title: " - Request Reset Password", theme: "light nav-active" });
};

module.exports.resetPasswordController_get = (req, res) => {
  // console.log(req.params.token, req.params.id)
  const token = req.params.token;
  const id = req.params.id;
  res.render("passwordReset", { token, id, title: " - Reset Password", theme: "light nav-active" });
};

module.exports.resetPasswordRequestController = async (req, res, next) => {
  try {
    const requestPasswordResetService = await requestPasswordReset(
      req.body.email
    );

    // res.json(requestPasswordResetService);
    
    console.log(requestPasswordResetService)

    
    if(requestPasswordResetService)
    {
      res.json({ request: "Your password reset email has been sent" });
    }

  } catch (err) {
    res.json({ request: err.toString() })
  }
};

module.exports.resetPasswordController = async (req, res, next) => {
  try {
    // console.log(req.params.id,
    //   req.params.token)
    const resetPasswordService = await resetPassword(
      req.body.id,
      req.body.token,
      req.body.password
    );

    // console.log(req.params.id,
    //   req.params.token);

    if (resetPasswordService) {
        res.json({ request: "Your password has been changed successfully."})
    }
  } catch (err) {
    res.json({ request: err.toString() })
  }
};

// module.exports = {
//   // signUpController,
//   resetPasswordRequestController,
//   resetPasswordController,
// };
