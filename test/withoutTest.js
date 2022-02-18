const assert = require('chai').assert;
const without = require('../without');

describe('#without', () => { 
  
  it("should return [2, 3] for without([1, 2, 3], [1]) ", () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });

  it("should return ['1', '2'] for without(['1', '2', '3'], [1, 2, '3'])", () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });

  it("should return ['hello', 'world'] for without(['hello', 'world', 'lighthouse'], ['lighthouse'])", () => {
    assert.deepEqual(without(["hello", "world", "lighthouse"], ["lighthouse"]),
    ["hello", "world"]);
  });
});