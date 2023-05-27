const express = require("express");
const router = express.Router();
const User = require("../models/User");


router.get("/:user/config", async function (req, res) {
  
    let user = req.params.user;

    const usuario = await User.findOne({
        username: user
    }, "password");

    let response = {password: usuario.password}

    return res.json(response);

});


router.put("/:user/config", async function (req, res){

    const username = req.params.user;

    const updateResult = await User.updateOne({username: username}, req.body); 

    return res.json(updateResult);

});

module.exports = router;