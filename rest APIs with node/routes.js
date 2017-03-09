`use strict`

var express = require(`express`)
var router = express.Router();

// GET /questions/
// route for displaying questions
router.get(`/`, function(req, res) {
  res.json({
    response: `you sent me a GET request`
  });
})

// POST /questions/
// route for creating questions
router.post(`/`, function(req, res) {
  res.json({
    response: `you sent me a POST request`,
    body: req.body
  });
})

// GET /questions/:qID
// route for displaying specific question
router.get(`/:qID`, function(req, res) {
  res.json({
    response: `you sent me a GET request for a specific ID ` + req.params.qID
  });
})

// GET /questions/:qID

// GET /questions/

// POST /questions/:qID/answers/:aID

// POST /questions/:qID/answers/aID/vote-up

// POST /questions/:qID/answers/aID/vote-down

module.exports = router;
