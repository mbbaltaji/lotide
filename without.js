// FILTERS itemsToRemove FROM ARRAY
const without = function(array, itemsToRemove){
  let newArr = array;
  let result;
  for (const element of itemsToRemove) {
    for (const val of newArr) {
      result = newArr.filter(val => val !== element);
    }
  }
  return result;
}

module.exports = without;



