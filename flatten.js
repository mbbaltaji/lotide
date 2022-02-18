/*TASK:
Create a function flatten which will take in an array containing 
elements including nested arrays of elements, and return a "flattened" 
version of the array.*/

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

module.exports = flatten;
