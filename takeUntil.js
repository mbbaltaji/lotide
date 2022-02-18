//PUSHES ITEMS TO NEW ARRAY UNTIL callback === TRUE
const takeUntil = function(array, callback){
  let results = [];
  for (const item of array) {
    if (!callback(item)) {
      results.push(item);
    } 
    else break; 
  }
  return results;
}

module.exports = takeUntil;


