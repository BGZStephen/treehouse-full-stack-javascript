const Profile = require("./profile.js");
const render = require("./render.js");
const querystring = require(`querystring`)

// 2 handle the http route GET and POST
function home(request, response) {
  if(request.url === "/") {
    if(request.method.toLowerCase() == `get`) {
      // if url = "/" and GET
      // show search field
      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/html');
      render.view(`header`, {}, response)
      render.view(`search`, {}, response)
      render.view(`footer`, {}, response)
      response.end();
    } else {
      // if url = `/` and POST
      request.on(`data`, function(postBody) {
        let query = querystring.parse(postBody.toString())
        response.statusCode = 303;
        response.setHeader(`Location`, `/` + query.username)
        response.end()
      })
      // get the post data from body
      // extract to username, then redirect to username
    }
  }
}

//3 handle the HTTP route for GET /:username
function user(request, response) {
  let username = request.url.replace(`/`, ``)
  console.log(username)
  if(username.length > 0 && username != "favicon.ico") {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');
    render.view(`header`, {}, response)
    //get JSON from Treehouse
    var studentProfile = new Profile(username);
    studentProfile.on("end", function(profileJSON) {
      var values = {
        avatarUrl: profileJSON.gravatar_url,
        username: profileJSON.profile_name,
        badgeCount: profileJSON.badges.length,
        jsPoints: profileJSON.points.JavaScript
      }
      render.view(`profile`, values, response)
      render.view(`footer`, {}, response)
      response.end();
    });
    studentProfile.on("error", function(error){
      render.view(`error`, {errorMessage: error.message}, response)
      render.view(`search`, {}, response)
      render.view(`footer`, {}, response)
      response.end();
    });
  }
}

module.exports.home = home;
module.exports.user = user;
