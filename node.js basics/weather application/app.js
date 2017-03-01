const weather = require(`./weather`);
const location = process.argv.slice(2).join(`_`).replace(` `, `_`)

weather.get(location)
