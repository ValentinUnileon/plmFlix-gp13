const express = require("express");
const cors = require('cors');
const connectDB = require ("./db");
const crearDB = require ("./datos/datosDb");
const path = require('path');


//connectDB ();
//crearDB();

var app = express();
app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV === "production") {
  app.use(express.static ("../frontend/build"));
  app.get("/", (req , res) => {
    res.sendFile(path.resolve(__dirname , "../frontend", "build", "index.html")
);
 });
}

app.use("/api/login", require("./routes/login"));
app.use("/api", require("./routes/profiles"));


connectDB().then((result) => {

  app.listen(5000, function () {
    console.log("Servidor arrancado en el puerto 5000!");
  });

}).catch((error)=> {console.log("error al arrancar servidor", error.message)})