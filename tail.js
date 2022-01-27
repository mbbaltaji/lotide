/* Create a function tail which returns the "tail"
of an array: everything except for the first item
(head) of the provided array.*/

const tail = function(array) {
  // holds tail of the old array to not modify orginal
  let tailArray;
  tailArray = array.slice(1);
  return tailArray;
};

const assertEqual = function(actual, expected) {
  // Arrays are converted to Strings Since we cannot compare two arrays using ===
  if (actual.toString() === expected.toString()) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

 
assertEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
assertEqual(tail([1, 2, 3, 4]), [2, 3, 4]);
assertEqual(tail(["One"]), []);
assertEqual(tail([1,2,3]), [1,2,3]); //false

//checking if orignal array is not modified
const words = ["Yo Yo", "Lighthouse", "Labs"];
assertEqual(words.length, 3);
