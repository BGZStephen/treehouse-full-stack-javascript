var Profile = require("./profile.js");

// 2 handle the http route GET and POST
function home(request, response) {
  if(request.url === "/") {
    // if url = "/" and GET
      // show search field
      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/plain');
      response.write(`Header here \n`)
      response.write(`Search here \n`)
      response.end(`Footer here \n`)
  }
    // if url = `/` and POST
      //redirect to username
}

//3 handle the HTTP route for GET /:username
function user(request, response) {
  let username = request.url.replace(`/`, ``)
  console.log(username)
  if(username.length > 0 && username != "favicon.ico") {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.write(`Header here \n`)
    //get JSON from Treehouse
    var studentProfile = new Profile(username);
    studentProfile.on("end", function(profileJSON) {
      let values = {
        avatarUrl: profileJSON.gravatar_url,
        username: profileJSON.profile_name,
        badgeCount: profileJSON.badges.length,
        jsPoints: profileJSON.points.JavaScript
      }
      response.write(values.username + ` has ` + values.badgeCount + ` badges` + `\n`)
      response.end(`Footer here \n`)
    });
    studentProfile.on("error", function(error){
      response.write(error.message + `\n`);
      response.end(`Footer here \n`)
    });
  }
}

module.exports.home = home;
module.exports.user = user;
