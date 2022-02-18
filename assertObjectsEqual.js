const eqObjects = require('./eqObjects');

// TAKES IN TWO OBJECTS AND DISPLAYS APPROPRIATE MSG TO CONSOLE
const assertObjectsEqual = function (actual, expected) {
  //util.inspect() RETURNS STRING REPRESENTATION OF OBJECT
  const inspect = require('util').inspect;
  console.log(`Example label: ${inspect(actual)}`);
  if (eqObjects(actual, expected)) {
    console.log("✅ Assertion Passed: Objects are equal! " + inspect(actual) + ' === ' + inspect(expected));
  } else {
    console.log("⛔️ Assertion Failed: Objects are NOT equal! " + inspect(actual) + ' !== ' + inspect(actual));
  }
}

module.exports = assertObjectsEqual;

 
//TEST CODE
// const ab = { a: "1", b: "2"};
// const ba = { b: "2", a: "1" };
// const abc = { a: "1", b: "2", c: "3" };
// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// const cd2 = { c: "1", d: ["2", 3, 4] };

//assertObjectsEqual(ab, ba);
// assertObjectsEqual(ab, abc);
