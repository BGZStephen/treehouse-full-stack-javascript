const plainTextPassword = `password`

var colors = require('colors');
var bcrypt = require('bcrypt');
const saltRounds = 10;

bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(plainTextPassword, salt, function(err, hash) {
        console.log(hash.green)
    });
});
