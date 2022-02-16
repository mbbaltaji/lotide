//FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

//TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual("Moose", "Moose");
// assertEqual("Moose", "Marketa");
// assertEqual(1, 2);

//common JS
module.exports = assertEqual;

// ES JS
//export default assertEqual;