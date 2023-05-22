const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let profile = new Schema({

    name: {
        type: String,
        required: true,
        unique: true,
        index: true,
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },

    likeList: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Video',
    }],
    
    vistoList: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Video',
    }],
});

module.exports = mongoose.model("Profile", profile);