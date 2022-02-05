const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// RETURNS FIRST KEY THAT MATCHES callBack
const findKey = function(obj, callBack) {
  let foundKey = '';
  for (const key in obj) {
    if (callBack(obj[key])){
      foundKey = key;
      break;
    }
  }
  return foundKey;
};

assertEqual (findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), 'noma');