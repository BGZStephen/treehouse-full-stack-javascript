`use strict`

var mongoose = require(`mongoose`);
var jsonParser = require(`body-parser`).json;
var logger = require(`morgan`);
var routes = require(`./routes`);
var express = require(`express`);
var app = express();

var jsonCheck = function(req, res, next) {
  if(req.body) {
    console.log(`The sky is`, req.body.color)
  } else {
    console.log(`There is no body property on the request`)
  }
  next()
};

app.use(logger(`dev`))
app.use(jsonParser());

mongoose.connect(`mongodb://localhost:27017/qa`)

var db = mongoose.connection;

db.on("error", function() {
  console.error(`connection error:`, err);
})

db.once(`open`, function() {
  console.log(`database connection successful`)
});

app.use("/questions", routes)

// catch 404 amd fprward tp errpr jamd;er
app.use(function(req, res, next) {
  var err = new Error(`Not Found`)
  err.status = 404
  next(err)
})

// error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message
    }
  })
});

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
