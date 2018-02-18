  var express = require("express");

  var router = express.Router();

  // Import the model (cat.js) to use its database functions.
  var burgers = require("../models/burger.js");

  router.get('/', function(req, res) {
    burgers.all(function(data) {

      var hbsObject = {
        burgers: data
      };

      res.render("index", hbsObject);

    });
  });



  router.post("/api/newburgers", function(req, res) {
    burgers.create(["burger_name"], [req.body.newBurger], function(result) {
      res.redirect('/');
    });
  });



  router.post('/api/burgers/:id', function (req, res) {
    burgers.updateOne(req.params.id, function() {
      res.redirect('/');
    });
  });

  module.exports = router;
