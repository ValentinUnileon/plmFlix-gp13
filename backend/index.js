const express = require("express");
const cors = require('cors');
const connectDB = require ("./config/db");

const User = require("./models/User");

connectDB ();

var app = express();
app.use(express.json());
app.use(cors());


const user = new User({username: "hola", password: "hola"});

user.save()
.then(() => {
    console.log('Carta añadida correctamente');
})
.catch((err) => {
    console.error(err);
})




app.use("/login", require("./routes/login"));
//app.use("/", require("./routes/cards"));

app.listen(5000, function () {
  console.log("Servidor arrancado en el puerto 5000!");
});