const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const video = new Schema({
    title: {
        type: String,
    },
    description: {
        type: String
    },
    thumbnailUrl: {
        type: String
    },
    videoUrl: {
        type: String,
        required: true
    },
    likes: {
        type: Number
    },
    categorie:{
        type: String,
    }
});

module.exports = mongoose.model('Video', video);