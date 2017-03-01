const http = require(`http`);
const api = require(`./api.json`);

function printError(error) {
  console.error(error.message)
}

function printMessage(location, temperature) {
  const message = `The temperature in ${location} is ${temperature}.`;
  console.log(message);
}

function get(location) {
  try {
    const request = http.get(`http://api.wunderground.com/api/${api.key}/q/${location}.json`, response => {
      if (response.statusCode === 200) {
        let body = ``;
        response.on(`data`, data => {
          body += data.toString();
        })
        response.on(`end`, () => {
          try {
            const output = JSON.parse(body)
            printMessage(output.current_observation.display_location.city, output.current_observation.temperature_string)
          } catch(error) {
            const inputError = `There was an error getting the temperature, location ${location} was not found.`
            const statusCodeError = new Error(inputError);
            printError(statusCodeError)
          }
        })
      }
      else {const errorMessage = `There was an error getting the temperature for ${location} (${http.STATUS_CODES[response.statusCode]})`
        const statusCodeError = new Error(errorMessage);
        printError(statusCodeError)
      }
    })
    request.on(`error`, error => {
      console.error(`Problem with request ${error.message}`)
    })
  } catch(error) {
    printError(error)
  }
}

module.exports.get = get;
