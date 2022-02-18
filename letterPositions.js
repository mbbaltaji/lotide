const letterPositions = function(sentence) {
  const results = {};
  sentence = sentence.replace(/\s/g, '');

  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i];
    if (!results[letter]) {
      results[letter] = [];
    }
    results[letter].push(i);
  }
  return results;
};

module.exports = letterPositions;
