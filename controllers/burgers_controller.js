var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");


//Get all entries from the burger table
router.get("/", function(req, res) {
    burger.all(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

//Add a new entry to the burgers table
router.post("/api/burgers", function(req, res) {
    burger.create(["burger_name", "devoured"], [req.body.name, req.body.devoured], function(result) {
      res.json({ id: result.insertId });
    });
}); 

//Change status of burger entry from false to true
 router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);
    burger.update(
      {
        devoured: true
      },
      condition,
      function(result) {
        if (result.changedRows === 0) {
          return res.status(404).end();
        }
        res.status(200).end();
      }
    );
});  


module.exports = router;