// CHECK IF TWO ARRAYS ARE EQUAL
const eqArrays = function(arr1, arr2) {
  if (arr1.every((element, index) => element === arr2[index])){
    return true
  }
  return false;
};

// FILTERS itemsToRemove FROM ARRAY
const without = function(array, itemsToRemove){
  let newArr = array;
  let result;
  for (const element of itemsToRemove) {
    for (const val of newArr) {
      result = newArr.filter(val => val !== element);
    }
  }
  return result;
}


const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)){
    console.log("✅ Assertion Passed: Arrays are equal! " + arr1 + ' === ' + arr2);
  } else{
    console.log("🛑 Assertion Failed: Arrays are not equal! " + arr1 + ' !== ' + arr2)
  }
}

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

// CHECK IF ORIGINAL ARRAY IS ALTERED
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); 
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

// DRIVER CODE
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"] );
assertArraysEqual(without(["hello", "world", "lighthouse"], 
["lighthouse"]), ["hello", "world"] );
assertArraysEqual(without([1, 2, 3], [1]), [2]);





