// CHECK IF TWO ARRAYS ARE EQUAL
const eqArrays = function(arr1, arr2) {
  // ALTERNATIVE SOLUTION USING EVERY()
  // Checks every element in arr1 and compares it with the rest preceding =>
  // in this case, if the element from arr1 === arr2, return true
  if (arr1.every((element, index) => element === arr2[index])) {
    return true;
  }
  return false;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log("✅ Arrays are equal! " + arr1 + ' === ' + arr2);
  } else {
    console.log("🛑 Arrays are no equal! " + arr1 + ' !==' + arr2);
  }
};

// RETURN MIDDLE OF ARRAY
const middle = function(array) {
  let res = [];
  let middle = array.length / 2;

  //IF ARRAY HAS ONE OR TWO ELEMENT RETURN EMPTY ARRAY
  if (array.length <= 2) {
    return res;
  }

  // IF ARRAY LENGTH IS ODD
  if (array.length % 2 !== 0 && array.length > 2) {
    middle = parseInt(middle); //drop decimal
    res.push(array[middle]); // res = arra[2]
  } else {
    res.push(array[middle - 1]);
    res.push(array[middle]);
  }
  return res;
};

//1 OR 2 ELEMENTS
assertArraysEqual(middle([1]), []); // => []
assertArraysEqual(middle([1, 2], [])); // => []
//ODD
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
//EVEN
assertArraysEqual(middle([1, 2, 3, 4]), [2,3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]);