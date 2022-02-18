
const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

console.log('\nTESTING eqArrays: ')
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => PASS
assertEqual(eqArrays(['1', '2', '3'], ['1', '2', '3']), true); // => PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); // => FAIL
assertEqual(eqArrays(['1', '2', '3'], ['1', '2', 3]), true); // => FAIL