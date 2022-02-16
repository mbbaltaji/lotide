//FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

//common JS
module.exports = assertEqual;

// ES JS
//export default assertEqual;