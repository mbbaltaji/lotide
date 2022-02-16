// commonJS
const assertEqual = require('./assertEqual');

// ES
//import assertEqual from './assertEqual';



//FUNCTION HEAD RETURNS THE FIRST ELEMENT OF A GIVEN ARRAY
const head = function(array) {
  if (array.length === 0) {
    return undefined;
  } 
    return array[0];
};

//TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head[null], undefined);
assertEqual(head([5]), 6);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Lighthouse");
assertEqual(head[null], 0);


