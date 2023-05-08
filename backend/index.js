const express = require("express");
const cors = require('cors');
const connectDB = require ("./config/db");

const Profile = require("./models/Profile");
const User = require("./models/User");

connectDB ();

var app = express();
app.use(express.json());
app.use(cors());



app.use("/login", require("./routes/login"));
app.use("/", require("./routes/profiles"));
app.listen(5000, function () {
  console.log("Servidor arrancado en el puerto 5000!");
});