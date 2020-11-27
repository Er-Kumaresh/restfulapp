var express = require("express");
var router = express.Router();

// show register form
router.get("/register", function (req, res) {
  res.render("freein");
});

module.exports = router;