const fs = require(`fs`);

const mergeValues = (values, content) => {
  // cycle over value keys
  // replace all {{keys}} with the values from the values object
  // return merged Content-Type
  for(var key in values) {
    content = content.toString().replace("{{" + key + "}}", values[key]);
  }
  return content
}

const view = (templateName, values, response) => {
  // read from the template files

  let fileContents = fs.readFileSync('./views/' + templateName + `.html`, {encoding: `utf-8`});
  fileContents = mergeValues(values, fileContents)
  response.write(fileContents);
}

module.exports.view = view;
