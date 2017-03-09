`use strict`

var jsonParser = require(`body-parser`).json;
var routes = require(`./routes`)
var express = require(`express`)
var app = express();

var jsonCheck = function(req, res, next) {
  if(req.body) {
    console.log(`The sky is`, req.body.color)
  } else {
    console.log(`There is no body property on the request`)
  }
  next()
};

app.use(jsonParser());

app.use("/questions", routes)

var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log(`Server running on port ${port}`)
});

// Ask a Question
// Read the Question
// Answer a Question
// Read the Answers
// Edit an Answer
// Delete an Answer
// Vote on Answers
