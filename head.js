//FUNCTION HEAD RETURNS THE FIRST ELEMENT OF A GIVEN ARRAY
const head = function(array) {
  if (array.length === 0) {
    return undefined;
  } else {
    return array[0];
  }
};

//FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head[null], undefined);
assertEqual(head([5]), 6);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Lighthouse");
assertEqual(head[null], 0);


