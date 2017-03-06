`use strict`;

const express = require(`express`);
const posts = require(`./mock/posts.json`);
const pug = require(`pug`);
const postsLists = Object.keys(posts).map(function(value) {
  return posts[value]
})

const app = express();

app.use(`/static`, express.static(__dirname + `/public`))

app.set(`view engine`, `pug`)
app.set(`views`, __dirname + `/templates`)

app.get(`/`, function(req, res) {
  const path = req.path;
  res.locals.path = path;
  res.render(`index`)
})

app.get(`/blog/:title?`, function(req, res) {
  const title = req.params.title
  if(title === undefined) {
    res.render(`blog`, {posts: postsLists})
  } else {
    const post = posts[title] || {}
    res.render(`post`, {post: post})
  }
})

app.get(`/posts`, function(req, res) {
  if (req.query.raw) {
    res.json(posts)
  } else {
    res.json(postsLists)
  }
})

app.listen(3000, function () {
  console.log(`Frontend server running on port 3000`)
})
