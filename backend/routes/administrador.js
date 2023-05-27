const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Video = require("../models/Videos");

router.get("/users", async function (req, res) {
  
    console.log("LLEGA HASTA AQUI");

    const users = await User.find(); 

    return res.json(users);

});

router.get("/movies", async function (req, res) {
  
    console.log("LLEGA HASTA AQUI MOVIES");

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

module.exports = router;
