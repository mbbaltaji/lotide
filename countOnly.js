
const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const key of allItems) {
    if (itemsToCount[key]) {
      if (results[key]) {
        results[key] += 1;
      } else {
        results[key] = 1;
      }
    }
  }
  return results;
};

module.exports = countOnly;

