const mongoose = require("mongoose");
// tweet model
/*
3 fields 
content
numberOflIkes,
comments, -> ignore
likedByUsers,
author
*/
const tweetSchema = new mongoose.Schema({
   content : {
    type : String,
    required : true
   },

   numberOfLikes : {
    type : Number,
    default: 0
   },

   likedByUsers : {
    type : [mongoose.Schema.Types.ObjectId],
    ref : "User",
    default : []
   },

   author : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "User"
   }
}, 
{
    timestamps: true
})

// model


const Tweet = mongoose.model("Tweet", tweetSchema);
module.exports = Tweet