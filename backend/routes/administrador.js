const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Video = require("../models/Videos");

router.get("/users", async function (req, res) {
  
    const users = await User.find(); 
    return res.json(users);

});

router.get("/movies", async function (req, res) {
  
    const videos = await Video.find(); 
    return res.json(videos);

});

router.delete("/movies/:movieId", async function (req, res) {
    
    let idPelicula = req.params.movieId;
    const movie = await Video.findByIdAndRemove(idPelicula);
    return res.json(movie);

});

router.delete("/users/:userId", async function (req, res) {
    
    let idUsuario = req.params.userId;
    const user = await User.findByIdAndRemove(idUsuario);
    return res.json(user);

});

router.post("/users", async function (req, res) {
    
    
    const newUser = new User({
        username: req.body.username,
        password: req.body.password,
    });

    await newUser.save()
        .then(() => {
            console.log("SE HA GUARDADO EL USUARIO", newUser.username);
        })
        .catch((err) => {
        console.error(err);
        res.status(500).send('Error al guardar el usuario');
        });

    return res.json(newUser);

});

module.exports = router;
