const express = require("express");
const cors = require('cors');
const connectDB = require ("./config/db");

const Profile = require("./models/Profile");
const User = require("./models/User");

connectDB ();

var app = express();
app.use(express.json());
app.use(cors());

/*
const user = new User({username: "1", password: "0"});

const p1 = new Profile({name: "ali", user: user});
const p2 = new Profile({name: "ppaner", user: user});
//const p3 = new Profile({name: "la Otaku", user: user});

user.save()
.then(() => {
    console.log('Usuario añadida correctamente');
})
.catch((err) => {
    console.error(err);
})


p1.save()
.then(() => {
    console.log('Perfil añadida correctamente');
})
.catch((err) => {
    console.error(err);
})

p2.save()
.then(() => {
    console.log('Perfil añadida correctamente');
})
.catch((err) => {
    console.error(err);
})
/*
p3.save()
.then(() => {
    console.log('Perfil añadida correctamente');
})
.catch((err) => {
    console.error(err);
})
*/

app.use("/login", require("./routes/login"));
//app.use("/", require("./routes/cards"));
app.use("/", require("./routes/profiles"));
app.listen(5000, function () {
  console.log("Servidor arrancado en el puerto 5000!");
});