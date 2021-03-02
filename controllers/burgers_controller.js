const express = require('express');

const router = express.Router();

//access burger.js file
const burger = require('../models/burger.js');

// Create all our routes and set up logic within those routes where required.
router.get('/', (req, res) => {
    burger.selectAll((data) => {
      const hbsObject = {
        burgers: data,
      };
      console.log(hbsObject);
      res.render('index', hbsObject);
    });
});

router.post('/api/burgers', (req, res) => {
    //check this for [] setup
    burger.insertOne(['burger_name'], [req.body.name], (result) => {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
});

router.put('/api/burgers/:id', (req, res) => {
    var id = req.params.id;
    //access devoured column of table
    //this may need []
    burger.updateOne("devoured", true, id, (result) => {
        if (result.changedRows === 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          }
          res.status(200).end();
    });  
});

// Export routes for server.js to use.
module.exports = router;


  
    
  

