const map = function(array, callBack) {
  const results = [];

  for (const item of array) {
    results.push(callBack(item));
  }  
  return results;
}

module.exports = map;