// require express
const express = require("express");

const { signup, signin } = require("../controllers/auth.controller");

// router

const router = express.Router();

// apis

// signup

router.post("/signup", signup);

// signin

router.post("/signin", signin)

module.exports = router;
