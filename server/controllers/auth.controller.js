// controller functions

// require User model
const User = require("../models/user.model");
const bcrypt = require("bcryptjs");

// signup function

const signup = async (req, res) => {
  try {
    // logic

    const { username, email, password } = req.body;
    // validate

    // check whether user exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    // new resource

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User({
      username,
      email,
      password: hashedPassword,
    });
    // save
    await newUser.save();

    return res.json({ message: "new user created", user: newUser });
  } catch (err) {
    console.log("err", err);
  }
};

module.exports = { signup };
