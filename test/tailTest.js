const assertEqual = require('../assertEqual');
const tail = require('../tail');

assertEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
assertEqual(tail([1, 2, 3, 4]), [2, 3, 4]);
assertEqual(tail(["One"]), []);

//checking if orignal array is not modified
const words = ["Yo Yo", "Lighthouse", "Labs"];
assertEqual(words.length, 3);