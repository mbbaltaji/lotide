const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

//1 OR 2 ELEMENTS
assertArraysEqual(middle([1]), []); // => []
assertArraysEqual(middle([1, 2]), []); // => []
//ODD
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
//EVEN
assertArraysEqual(middle([1, 2, 3, 4]), [2,3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]);