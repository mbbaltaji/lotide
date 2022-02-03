// CHECK IF TWO ARRAYS ARE EQUAL
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  if (arr1.every((element, index) => element === arr2[index])) {
    return true;
  }
  return false;
  
  // LONG WAY USING FOOR LOOP
  // if (arr1.length !== arr2.length) {
  //   return false;
  // }
  // for (let i = 0; i < arr1.length; i++) {
  //   if (arr1[i] === arr2[i] && i === arr1.length - 1) {
  //     return true;
  //   }
  // }
  // return false;
  
};

//RETURN TRUE IF TWO OBJECTS ARE EQUAL
const eqObjects = function(obj1, obj2) {
  // CHECK IF OBJECTS HAVE SAME NUMBER OF KEYS
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  // CHECK IF VALUES OF BOTH OBJECTS ARE EQUAL
  for (const key of Object.keys(obj1)) {
    // IF VALUES ARE ARRAYS, CHECK IF ARRAYS ARE EQUAL
    if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
      // RETURN TRUE IF ARRAYS ARE EQUAL
      return eqArrays(obj1[key], obj2[key]);
    } else {
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
  }
  return true;
};

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


//TEST CODE
const ab = { a: "1", b: "2"};
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

assertObjectsEqual(ab, ba);
assertObjectsEqual(ab, abc);
