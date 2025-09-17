// require express
const express = require("express");

const { signup } = require("../controllers/auth.controller");

// router

const router = express.Router();

// apis

router.post("/signup", signup);

module.exports = router;
