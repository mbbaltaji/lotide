const assertEqual = require('../assertEqual');
const head = require('../head.js');

//TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head[null], undefined);
assertEqual(head([5]), 6);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Lighthouse");
assertEqual(head[null], 0);