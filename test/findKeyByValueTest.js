const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe('#findKeyByValue', () => {
  
  const bestTVShowsByGenre = {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };

  it("should return 'drama' for 'the wire", () =>{
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
  
  it("should return undefined for 'the 70s show", () =>{
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "the 70s show"), undefined);
  });
});