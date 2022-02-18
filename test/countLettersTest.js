const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe('#countLetters', () => {

  it("should retunr { m: 1} for 'm'", () => {
    assert.deepEqual(countLetters('m'), {m: 1});
  });

  it("should return { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 } for 'lighthouse in the house'", () => {
    assert.deepEqual(countLetters("lighthouse in the house"), { l: 1, i: 2, g: 1, h: 4,t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 })
  });

  it("should retunr {1: 1, 2: 2, 3: 1, 4: 1} for '12234' ", () => {
    assert.deepEqual(countLetters('12234'), {1: 1, 2: 2, 3: 1, 4: 1});
  });
});












// assertEqual(actual.l, 1);
// assertEqual(actual.u, 2);