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

// app
const app = express();

const corsOptions = {
  origin : "http://localhost:8081",
  methods: ["GET", "POST", "PUT", "DELETE"]
  
}

app.use(cors(corsOptions))
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

// app.get("/hi", (req, res) => {
//   return res.send("<h1>Hello World!</h1>");
// });

// create endpoint to store user in db

app.use(express.json());

// setup server

app.listen(process.env.PORT, () => {
  console.log("Server is running on port 5001");
});

// auRuIyueQEau4XCH
