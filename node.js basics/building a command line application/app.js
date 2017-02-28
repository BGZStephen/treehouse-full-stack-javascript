// Problem: We need a simple way to look at a user's badge count and JavaScript points
// Solution: Use Node.js to connect to Treehouse's API to get profile information to print out

const https = require(`https`);
// const username = `stephenwright2`;


function printMessage(username, badgeCount, points) {
  const message = `${username} has ${badgeCount} badges and ${points} points in JavaScript.`;
  console.log(message);
}

function getProfile(username) {
  // connect to the API url https://teamtreehouse.com/username.json
  const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {
    let body = ``;
    console.dir(response.statusCode)
    // read the data
    response.on(`data`, data => {
      body += data.toString();
    });

    response.on(`end`, () => {
      const profile = JSON.parse(body)
      printMessage(username, profile.badges.length, profile.points.JavaScript)
    })
    // parse the data
    // print the data
  })
}
const users = process.argv.slice(2)

console.log(process.argv);

users.forEach(getProfile)
