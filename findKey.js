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

module.exports = findKey;