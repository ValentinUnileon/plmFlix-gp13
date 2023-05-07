const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let profile = new Schema({

    name: {
        type: String,
        required : true,
        unique: true,
        index: true,
    },
    
    user: {
        type: mongoose.Schema.Types.ObjectId ,
        ref: "User",
   },
     
 });
    
 module.exports = mongoose.model("Profile", profile);