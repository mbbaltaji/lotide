const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\x1b[32m✅ Assertion Passed: Objects are equal! ${actual} === ${expected}`);
  } else {
    console.log(`⛔️ Assertion Failed: Objects are NOT equal ${actual} !== ${expected}`);
  }
};

// CHECK IF TWO ARRAYS ARE EQUAL
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length)
    return false;
  
  else if (arr1.every((element, index) => element === arr2[index])) {
    return true;
  }
  return false;
  //LONG WAY USING FOOR LOOP
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

const ab = { a: "1", b: "2"};
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3"};
assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false