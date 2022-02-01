const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  //REMOVE WHITE SPACE
  sentence = sentence.replace(/\s/g, '');
  let letterCount = {};

  for (const letter of sentence) {
    if (letterCount[letter]) {
      letterCount[letter]++;
    } else {
      letterCount[letter] = 1;
    }
  }
  return letterCount;
};

let actual = countLetters("lighthouse in the house");
let expected = { l: 1, i: 2, g: 1, h: 4,
  t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 };

assertEqual(actual.toString(), expected.toString());
assertEqual(actual.l, 1);
assertEqual(actual.u, 2);
