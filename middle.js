// RETURN MIDDLE OF ARRAY
const middle = function(array) {
  let res = [];
  let middle = array.length / 2;

  //IF ARRAY HAS ONE OR TWO ELEMENT RETURN EMPTY ARRAY
  if (array.length <= 2) {
    return res;
  }

  // IF ARRAY LENGTH IS ODD
  if (array.length % 2 !== 0 && array.length > 2) {
    middle = parseInt(middle); 
    res.push(array[middle]); 
  } else {
    res.push(array[middle - 1]);
    res.push(array[middle]);
  }
  return res;
};

module.exports = middle;

