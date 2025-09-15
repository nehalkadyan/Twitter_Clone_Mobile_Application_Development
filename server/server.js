// require/import express

const express = require("express");

// require dotenv

const dotenv = require("dotenv");
dotenv.config();

// require/import mongoose

const mongoose = require("mongoose");
// app
const app = express();

// connect to db

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.log(err));

// endpoint

app.get("/hi", (req, res) => {
  return res.send("<h1>Hello World!</h1>");
});

// setup server

app.listen(process.env.PORT, () => {
  console.log("Server is running on port 5000");
});

// auRuIyueQEau4XCH
