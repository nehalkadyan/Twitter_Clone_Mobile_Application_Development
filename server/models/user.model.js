//  user model

const mongoose = require("mongoose");

// userSchema

const userSchema = new mongoose.Schema(
  {
    // fields

    username: {
      type: String,
    },

    email: {
      type: String,
    },

    password: {
      type: String,
    },
  },
  { timestamps: true }
);

// model

const User = mongoose.model("User", userSchema);

module.exports = User;
