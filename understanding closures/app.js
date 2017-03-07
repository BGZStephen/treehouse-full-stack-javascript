// function returnBirdCounter() {
//   var count = 0;
//   return function() {
//     count += 1;
//     return count + ' birds';
//   }
// }
//
// function returnDogCounter() {
//   var count = 0;
//   return function() {
//     count += 1;
//     return count + ' dogs';
//   }
// }

function makeCounter(animal) {
  var count = 0;
  return function() {
    count += 1
    return count + ` ` + animal;
  }
}
