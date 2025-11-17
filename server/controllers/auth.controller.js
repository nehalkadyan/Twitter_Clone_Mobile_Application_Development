// controller functions

// require User model
const User = require("../models/user.model");
const bcrypt = require("bcryptjs");

// require jwt

const jwt = require("jsonwebtoken");

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

// signin


const signin = async (req, res) => {
  try{
     const {email, password} = req.body;
     // verification checks
     // 1) check whether user exists with the email
     const existingUser = await User.findOne({email});

     if(!existingUser){
       return res.status(400).json({message : "User not found!"})
     }
     // 2) check whether the password matches or not

     const isPasswordValid = await bcrypt.compare(password, existingUser.password);
     if(!isPasswordValid){
       throw new Error("Passwords don't match")
     }
     // tokenData

     const tokenData = {
      id: existingUser._id
     }

     const secret = process.env.JWT_SECRET;
     console.log(secret)

     const token = jwt.sign(tokenData, process.env.JWT_SECRET, {expiresIn: "1h"})

     console.log(token)

     const {password :pass, ...rest} = existingUser._doc;

     return res.json({message : "User signed in successfully", user: rest, token})
  }catch(err){
    console.log(err)
  }
}

module.exports = { signup, signin };
