const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Avatar = require("../models/Avatar");

const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;

  // check json web token exists & is verified
  if (token) {
    jwt.verify(token, process.env.SECRET, (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.redirect("/login");
      } else {
        // console.log(decodedToken);
        next();
      }
    });
  } else {
    res.redirect("/login");
  }
};

// check current user
const checkUser = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, process.env.SECRET, async (err, decodedToken) => {
      if (err) {
        res.locals.user = null;
        next();
      } else {
        let user = await User.findById(decodedToken.id);
        let avatar = await Avatar.findById(decodedToken.id);
        res.locals.avatar = avatar;
        res.locals.user = user;
        // console.log(user, avatar );
        next();
      }
    });
  } else {
    res.locals.user = null;
    next();
  }
};

const userAvatar = (req, res, next) => {
  let avatar = Avatar.find().catch((err) => {
    console.log(err);
  });
  res.locals.avatar = avatar;
  next();
};

module.exports = { requireAuth, checkUser, userAvatar };
