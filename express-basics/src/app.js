`use strict`;

const express = require(`express`);
const posts = require(`./mock/posts.json`);

const app = express();

app.get(`/`, function(req, res) {
  res.send(`<h1>Hello World!</h1>`)
})

app.get(`/blog/:title?`, function(req, res) {
  const title = req.params.title
  if(title === undefined) {
    res.status(503);
    res.send(`This page is under construction`)
  } else {
    const post = posts[title]
    res.send(post)
  }
})

app.listen(3000, function () {
  console.log(`Frontend server running on port 3000`)
})
