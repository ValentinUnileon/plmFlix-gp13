const mongoose = require("mongoose");
const config = require("config");

const db = process.env.MONGO_URI;

const connectDB = async () => {

   return mongoose.connect(db, {
   useNewUrlParser: true ,
   useUnifiedTopology: true ,
   });

};

 module.exports = connectDB;