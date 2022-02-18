const findKeyByValue = function(obj, val) {
  // AQUIRES ALL KEYS OF obj AND PUTS THEM IN AN ARRAY
  const keys = Object.keys(obj);
  for (const key of keys) {
    if (obj[key] === val) {
      return key;
    }
  }
};
module.exports = findKeyByValue;

