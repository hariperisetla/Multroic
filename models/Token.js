const mongoose = require("mongoose");

const tokenSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "user",
  },
  token: {
    type: String,
    required: true,
  },
  // createdAt: Date.now
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 3600, // this is the expiry time in seconds
  },
});

// forgotSchema.index({ createdAt: 1 }, { expireAfterSeconds: 3600 });

const Token = mongoose.model("Token", tokenSchema);

module.exports = Token;
