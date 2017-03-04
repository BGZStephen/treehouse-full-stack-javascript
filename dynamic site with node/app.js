// problem: we need a simple way to look at a users badge count, JavaScript points count and profile picture
// solution: use node.js to perform the profile lookups and serve our templates via http

// 1 create a web server

const router = require(`./router.js`)
const http = require('http');

const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((request, response) => {
  router.home(request, response);
  router.user(request, response);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
})
