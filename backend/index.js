const express = require("express");
const cors = require('cors');
//const connectDB = require ("./config/db");

//connectDB ();

var app = express();
app.use(express.json());
app.use(cors());

//app.use("/login", require("./routes/login"));
//app.use("/", require("./routes/cards"));

app.listen(5000, function () {
  console.log("Servidor arrancado en el puerto 5000!");
});