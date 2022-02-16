/* Create a function tail which returns the "tail"
of an array: everything except for the first item
(head) of the provided array.*/

const tail = function(array) {
  // holds tail of the old array to not modify orginal
  let tailArray;
  tailArray = array.slice(1);
  return tailArray;
};

module.exports = tail;