const eqArrays = function(arr1, arr2) {
  // ALTERNATIVE SOLUTION USING EVERY()
  // Checks every element in arr1 and compares it with the rest preceding =>
  // in this case, if the element from arr1 === arr2, return true
  if (arr1.every((element, index) => element === arr2[index])){
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

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)){
    console.log("✅ Perfect match!");
  } else{
    console.log("🛑 Not a perfect match!")
  }
}
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual(['1', '2', '3'], ['1', '2', '3']);
assertArraysEqual(['1', '2', '3'], ['1', '2', 3]);

