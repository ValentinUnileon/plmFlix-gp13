const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let profile = new Schema({

    name: {
        type: String,
        required : true,
        unique: true,
        index: true,
    },
     
 });
    
 module.exports = mongoose.model("Profile", profile);