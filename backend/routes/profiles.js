const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Profile = require("../models/Profile");

router.get("/:user/profiles", async function(req, res){

    return res.json("ola");

});

module.exports = router;
