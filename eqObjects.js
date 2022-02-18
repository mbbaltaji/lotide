const eqArrays = require('./eqArrays');

const eqObjects = function(obj1, obj2) {
  // CHECK IF OBJECTS HAVE SAME NUMBER OF KEYS
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  // CHECK IF VALUES OF BOTH OBJECTS ARE EQUAL
  for (const key of Object.keys(obj1)) {
    // IF VALUES ARE ARRAYS, CHECK IF ARRAYS ARE EQUAL
    if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
      // RETURN TRUE IF ARRAYS ARE EQUAL
      return eqArrays(obj1[key], obj2[key]);
    } else {
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
  }
  return true;
};

module.exports = eqObjects;