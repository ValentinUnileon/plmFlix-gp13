const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/", async function (req, res) {
  
  
    const users = await User.find(); 

    return res.json(users);

});

module.exports = router;
