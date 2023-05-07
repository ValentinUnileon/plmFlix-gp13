const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Profile = require("../models/Profile");

router.get("/:user/profiles", async function(req, res){
    let query = {username: req.params.user};
    const usuario = await User.findOne(query, "_id");
    const perfiles = await Profile.find({ user: usuario._id });

    if(!perfiles)
        return res.status(400)
    return res.json(perfiles);
});

module.exports = router;
