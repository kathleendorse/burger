var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");


// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    //burger comes from our model
    burger.all(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });


///MAY NEED TO ADDRESS REQ.BODY.NAME??  

router.post("/api/burgers", function(req, res) {
    burger.create(["burger_name", "devoured"], [req.body.name, false], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
}); 

//IN ACTIVITY CONDITION WAS SLEEPY/AWAKE- WE'RE TRYING TO USE THIS FOR DEVOURED
router.put("/api/cats/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burger.update(
      {
        devoured: true
      },
      condition,
      function(result) {
        if (result.changedRows === 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        }
        res.status(200).end();
  
      }
    );
});  







// Export routes for server.js to use.
module.exports = router;