const assertEqual = require('../assertEqual');
const tail = require('../tail');

const test1 = tail(["Yo Yo", "Lighthouse", "Labs"]);
assertEqual(test1.length, 2); // ensure we get back 2 elements

//ensure first and second elements are the same
assertEqual(test1[0], 'Lighthouse');
assertEqual(test1[1], 'Labs');

