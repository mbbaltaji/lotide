const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe('#countOnly', () => {

  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];
  const result = countOnly(firstNames, 
    { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

  it("should return undefined for result['Karima']", () => {
    assert.deepEqual(result['Karima'], undefined);
  });

  it("should return 1 for result['Jason']", () => {
    assert.deepEqual(result['Jason'], 1);
  });

  it("should return 2 for result['Fang']", () => {
    assert.deepEqual(result['Fang'], 2);
  });

  it("should return {Jason: 1, Fang: 2} for { 'Jason': true, 'Karima': true, 'Fang': true, 'Agouhanna': false } ", () => {
    assert.deepEqual(countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }), {Jason: 1, Fang: 2});
  });
});