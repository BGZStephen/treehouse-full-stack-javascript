'use strict';

function myFunction(name, ...params) {
  console.log(name, params);
}

// rest parameters are denoted by ... preceding characters, they must be the last parameter in a function.
// they can be used to create arrays quickly

myFunction(`Stephen`, 1, 2, 3)
