const JWT = require("jsonwebtoken");
const User = require("../models/User.js");
const Token = require("../models/Token.js");
const sendEmail = require("../utils/email/sendEmail");
const crypto = require("crypto");
const bcrypt = require("bcrypt");

const clientURL = "multroic.herokuapp.com";

const requestPasswordReset = async (email) => {
  try {
    const user = await User.findOne({ email });

    if (!user) throw new Error("User does not exist");
    let token = await Token.findOne({ userId: user._id });
    if (token) await token.deleteOne();
    let resetToken = crypto.randomBytes(32).toString("hex");
    const hash = await bcrypt.hash(resetToken, Number(10));

    await new Token({
      userId: user._id,
      token: hash,
      createdAt: Date.now(),
    }).save();

    const link = `${clientURL}/auth/passwordReset/${resetToken}/${user._id}`;
    // console.log('Sending email to: ', user.username);
    sendEmail(
      user.email,
      "Password Reset Request",
      { username: user.username, link: link },
      "./template/requestResetPassword.handlebars"
    );
    return true;
  } catch (err) {
    throw err;
  }
};

const resetPassword = async (userId, token, password) => {
  try {
    let passwordResetToken = await Token.findOne({ userId });
    console.log("Token Found");
    if (!passwordResetToken) {
      throw new Error("Invalid or expired password reset token");
    }

    const isValid = await bcrypt.compare(token, passwordResetToken.token);

    if (!isValid) {
      throw new Error("Invalid or expired password reset token");
    }

    const hash = await bcrypt.hash(password, Number(10));

    await User.updateOne(
      { _id: userId },
      { $set: { password: hash } },
      { new: true }
    );

    const user = await User.findById({ _id: userId });

    sendEmail(
      user.email,
      "Password Reset Successfully",
      {
        username: user.username,
      },
      "./template/resetPassword.handlebars"
    );

    await passwordResetToken.deleteOne();

    return true;
  } catch (err) {
    console.log(err)
    throw err;
  }
};

const confirmEmail = async (userId, token) => {
  try {
    let confirmEmailToken = await Token.findOne({ userId });
    console.log("Token Found");
    if (!confirmEmailToken) {
      throw new Error("Invalid or expired token");
    }

    const isValid = await bcrypt.compare(token, confirmEmailToken.token);

    if (!isValid) {
      throw new Error("Invalid or expired token");
    }

    console.log('updating')
    await User.updateOne(
      { _id: userId },
      { $set: { confirm: true } },
      { new: true }
    );
    console.log('updated')

    const user = await User.findById({ _id: userId });

    sendEmail(
      user.email,
      "Account Confirmation Successfull",
      {
        username: user.username,
      },
      "./template/confirmed.handlebars"
    );

    await confirmEmailToken.deleteOne();
    

    return true;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

module.exports = {
  requestPasswordReset,
  resetPassword,
  confirmEmail
};
