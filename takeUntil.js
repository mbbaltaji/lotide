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

//PUSHES ITEMS TO NEW ARRAY UNTIL callback === TRUE
const takeUntil = function(array, callback){
  let results = [];
  for (const item of array) {
    if (!callback(item)) {
      results.push(item);
    } 
    else break; 
  }
  return results;
}


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(results2, [ "I've", 'been', 'to', 'Hollywood' ]);