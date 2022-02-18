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

module.exports = countLetters;
