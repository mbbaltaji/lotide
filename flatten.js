/*TASK:
Create a function flatten which will take in an array containing 
elements including nested arrays of elements, and return a "flattened" 
version of the array.*/

// CHECK IF TWO ARRAYS ARE EQUAL
const eqArrays = function(arr1, arr2) {
  if (arr1.every((element, index) => element === arr2[index])) {
    return true;
  }
  return false;
};

// COMBINES ARRAY CONTAINING OTHER ARRAYS INTO ONE ARRAY
const flatten = function(array) {
  let flattenedArray = [];

  for (const element of array) {
    if (!Array.isArray(element)) {
      flattenedArray.push(element);
    } else {
      for (const val of element) {
        flattenedArray.push(val);
      }
    }
  }
  return flattenedArray;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log("✅ Assertion Passed: Arrays are equal! " + arr1 + ' === ' + arr2);
  } else {
    console.log("🛑 Assertion Failed: Arrays are not equal! " + arr1 + ' !== ' + arr2);
  }
};


// TESTER
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); // => [1, 2, 3, 4, 5, 6]
assertArraysEqual(flatten([['Moose'], 'Marketa', ['Czech', 'Lebanon'],
  'Bella', ]),['Moose', 'Marketa', 'Czech', 'Lebanon', 'Bella', ]); // => [1, 2, 3, 4, 5, 6]
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 5, 6]); // => [1, 2, 3, 4, 5, 6]