//FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

const eqObjects = function(obj1, obj2) {
  // CHECK IF LENGTH MATCHES
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  for (const key of Object.keys(obj1)) {
    // CHECK IF KEY VALUES IS ARRAY
    if (Array.isArray(Object.keys(obj1[key])) &&
    Array.isArray(Object.keys(obj2[key]))) {
      //COMAPRE THE TWO ARRAYS OF EACH KEY
      if (!eqArrays(Object.keys(obj1[key]), Object.keys(obj2[key]))) {
        return false;
      }
    }
    // IF NOT ARRAY COMAPRE THE PRIMITIVE VALUES
    else if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};

//COMAPRING PRIMITVE KEY VALUES
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab,ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

//COMPARING ARRAY KEY VALUES
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false

