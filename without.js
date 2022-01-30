// Checks if two arrays are equal 
const eqArrays = function(arr1, arr2) {
  if (arr1.every((element, index) => element === arr2[index])){
    return true
  }
  return false;
};

// fitlers itemsToRemove from array
const without = function(array, itemsToRemove){
  let newArr = array;
  let result;
  for (const element of itemsToRemove) {
    for (const val of newArr) {
      result = newArr.filter(val => val !== element)
    }
  }
  return result;
}

//DRIVER 
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)){
    console.log("✅ Arrays are equal! " + arr1 + ' === ' + arr2);
  } else{
    console.log("🛑 Arrays are not equal! " + arr1 + ' !==' + arr2)
  }
}

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);





