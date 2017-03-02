// problem: we need a simple way to look at a users badge count, JavaScript points count and profile picture
// solution: use node.js to perform the profile lookups and serve our templates via http

// 1 create a web server

const http = require('http');

const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// 2 handle the http route GET and POST
  // if url = "/" and GET
    // show search field
  // if url = `/` and POST
    //redirect to username

//3 handle the HTTP route for GET /:username
  //if url = /*
    //get JSON from Treehouse
      //on.end
        //show profile
      //on.error
        //show error

//4 function that handles the reading of files and merge in values from the http request
  // read from file and get a string
    //merge values in to string
