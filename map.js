// CHECK IF TWO ARRAYS ARE EQUAL
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length)
    return false;
  
  else if (arr1.every((element, index) => element === arr2[index])) {
    return true;
  }
  return false;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log("✅ Assertion Passed: Arrays are equal! " + arr1 + ' === ' + arr2);
  } else {
    console.log("⛔️ Assertion Failed: Arrays are NOT equal! " + arr1 + ' !==' + arr2);
  }
};
const map = function(array, callBack) {
  const results = [];

  for (const item of array) {
    results.push(callBack(item));
  }  
  return results;
}

const words = ["ground", "control", "to", "major", "tom"];

const result1 = map(words, word => word[0]);
const result2 = map(words, word => word.length);
const result3 = map(words, word => word.toUpperCase());

assertArraysEqual(result1,[ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(result2, [6, 7, 2, 5, 3]);
assertArraysEqual(result3,['GROUND', 'CONTROL', 'TO', 'MAJOR', 'TOM']);


