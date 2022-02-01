const letterPositions = function(sentence) {
  const results = {};
  sentence = sentence.replace(/\s/g, '');

  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i];
    if (!results[letter]) {
      results[letter] = [];
    }
    results[letter].push(i);
  }
  return results;
};

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

console.log(letterPositions("hello"));
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);
