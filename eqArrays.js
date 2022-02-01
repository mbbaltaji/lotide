// CHECK IF TWO ARRAYS ARE EQUAL
const eqArrays = function(arr1, arr2) {
  if (arr1.every((element, index) => element === arr2[index])){
    return true
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

//FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); // => FAIL
assertEqual(eqArrays(['1', '2', '3'], ['1', '2', '3']), true); // => PASS
assertEqual(eqArrays(['1', '2', '3'], ['1', '2', 3]), true); // => FAIL
assertEqual(eqArrays([1, 2, 3], [1, 2]), true); // => FAIL 

