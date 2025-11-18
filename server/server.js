// require/import express

const express = require("express");

// require dotenv

const dotenv = require("dotenv");
dotenv.config();

// require/import mongoose

const mongoose = require("mongoose");

// cors
const cors = require("cors")
// require router
const authRouter = require("./routes/auth.routes");
const tweetRouter = require("./routes/tweet.routes")

// app
const app = express();

// const corsOptions = {
//   origin: "*", // During development, allow all origins
//   methods: ["GET", "POST", "PUT", "DELETE"]
// }

app.use(cors())
app.use(express.json());

// connect to db

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.log(err));

// middleware
app.use("/api", authRouter);
app.use("/api/tweets", tweetRouter)

// app.get("/hi", (req, res) => {
//   return res.send("<h1>Hello World!</h1>");
// });

// create endpoint to store user in db
// setup server

app.listen(process.env.PORT, () => {
  console.log("Server is running on port 5001");
});


