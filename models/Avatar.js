const mongoose = require("mongoose");

const avatarSchema = new mongoose.Schema({
  // _id: {
  //     type: Object,
  // },
  username: {
    type: String,
  },
  avatar: {
    type: String,
  },
});

const Avatar = mongoose.model("Avatar", avatarSchema);

module.exports = Avatar;
