// Problem: We need a simple way to look at a user's badge count and JavaScript points
// Solution: Use Node.js to connect to Treehouse's API to get profile information to print out

const https = require(`https`);
const username = `chalkers`;

function printMessage(username, badgeCount, points) {
  const message = `${username} has ${badgeCount} badges and ${points} points in JavaScript.`;
  console.log(message);
}

// connect to the API url https://teamtreehouse.com/username.json
const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {
  console.dir(response.statusCode)
  // read the data
  // parse the data
  // print the data
})
