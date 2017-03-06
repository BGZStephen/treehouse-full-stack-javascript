`use strict`;

const express = require(`express`);
const posts = require(`./mock/posts.json`);
const pug = require(`pug`);

const app = express();

app.use(`/static`, express.static(__dirname + `/public`))

app.set(`view engine`, `pug`)
app.set(`views`, __dirname + `/templates`)

app.get(`/`, function(req, res) {
  res.render(`index`)
})


app.get(`/blog/:title?`, function(req, res) {
  const title = req.params.title
  if(title === undefined) {
    res.status(503);
    res.send(`This page is under construction`)
  } else {
    const post = posts[title] || {}
    res.render(`post`, {post: post})
  }
})

app.listen(3000, function () {
  console.log(`Frontend server running on port 3000`)
})
