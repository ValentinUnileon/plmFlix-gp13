const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Profile = require("../models/Profile");

router.post("/", async function (req, res) {
        
    const newUser = new User({
        username: req.body.user,
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

    const user = await User.findOne({ username: req.body.user });

    if (!user) {
        console.error('Error al buscar el usuario');
        return;
    } else {

        const newProfile = new Profile({
            user: user._id,
            name: req.body.user,
        });
    
        await newProfile.save();
    
        console.log('Perfil creado correctamente');

    }


    return res.status(200).json({ message: 'Usuario registrado correctamente' });

});

module.exports = router;
