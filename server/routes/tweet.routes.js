const express = require("express");
const Tweet = require("../models/Tweet.model")

// router

const router = express.Router();

// store tweets

router.post("/store-tweets", async(req, res) => {
    try{
       
      const {tweets} = req.body;

      const insertedTweets = await Tweet.insertMany(tweets);

      return res.json({messageb : "Tweets inserted successfully", insertedTweets})

    }catch(err){
        console.log("err", err)
    }
})

router.get("/tweets", async(req, res) => {
    try{
      const tweets = await Tweet.find();

      return res.status(200).json({message : "Tweets fetched successfully", tweets})
    }catch(err){
        console.log("err", err)
    }
})

module.exports = router