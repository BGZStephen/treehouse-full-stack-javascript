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

// POST /questions/:qID/answers
// route for creating questions
router.post(`/:qID/answers`, function(req, res) {
  res.json({
    response: `you sent me a POST request to: /answers`,
    questionID: req.params.qID,
    body: req.body
  });
})

// PUT /question/:qID/answers/:aID
// put a specific answer
router.put(`/:qID/answers/:aID`, function(req, res) {
  res.json({
    response: `you sent me a PUT request to: /answers`,
    questionID: req.params.qID,
    answerID: req.params.aID,
    body: req.body
  });
})

// DELETE /question/:qID/answers/:aID
// delete a specific answer
router.delete(`/:qID/answers/:aID`, function(req, res) {
  res.json({
    response: `you sent me a DELETE request to: /answers`,
    questionID: req.params.qID,
    answerID: req.params.aID
  });
})

// POST /question/:qID/answers/:aID/vote-up
// POST /question/:qID/answers/:aID/vote-down
// vote on a specific answer
router.post(`/:qID/answers/:aID/vote-:dir`, function(req, res, next) {
  if(req.params.dir.search(/^(up|down)$/) === -1) {
    var err = new Error(`Not Found`)
    err.status = 404
    next(err)
  } else {
    next()
  }
}, function(req, res) {
  res.json({
    response: `you sent me a POST request to: /vote-` + req.params.dir,
    questionID: req.params.qID,
    answerID: req.params.aID,
    vote: req.params.dir
  });
})


module.exports = router;
