const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

const ab = { a: "1", b: "2"};
const ba = { b: "2", a: "1" };

const abc = { a: "1", b: "2", c: "3"};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

const cd2 = { c: "1", d: ["2", 3, 4] };

describe('#eqObjects', () => {
  it("should return true for {a: '1', b: '2'} and {b: '2', a: '1'}", () => {
    assert.strictEqual(eqObjects(ab, ba), true);
  });

  it("should return false for {a: '1', b: '2'} and {b: '1', a: '2', c: '3'}", () => {
    assert.strictEqual(eqObjects(ab, abc), false);
  });

  it("should return true for {c: '1', d: ['2', 3]} and {d: ['2', 3], c: '1'}", () => {
    assert.deepEqual(eqObjects(cd, dc), true);
  });

  it("should return false for {c: '1', d: ['2', 3]} and { c: '1', d: ['2', 3, 4] }", () => {
    assert.deepEqual(eqObjects(cd, cd2), false);
  });
});