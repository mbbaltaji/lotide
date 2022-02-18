const assert = require('chai').assert;
const map = require('../map');

describe('#map', () => { 
  
  const words = ["ground", "control", "to", "major", "tom"];
  
  it("should return [ 'g', 'c', 't', 'm', 't' ] for callBack word => word[0]", () => {
    assert.deepEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);
  });

  it("should return [6, 7, 2, 5, 3] for callBack word => word.length", () => {
    assert.deepEqual(map(words, word => word.length), [6, 7, 2, 5, 3]);
  });

  it("should return ['GROUND', 'CONTROL', 'TO', 'MAJOR', 'TOM'] for callBack word => word.toUpperCase()", () => {
    assert.deepEqual(map(words, word => word.toUpperCase()), ['GROUND', 'CONTROL', 'TO', 'MAJOR', 'TOM']);
  });

  
  


});





// const result1 = map(words, word => word[0]);
// const result2 = map(words, word => word.length);
// const result3 = map(words, word => word.toUpperCase());

// assertArraysEqual(result1,[ 'g', 'c', 't', 'm', 't' ]);
// assertArraysEqual(result2, [6, 7, 2, 5, 3]);
// assertArraysEqual(result3,['GROUND', 'CONTROL', 'TO', 'MAJOR', 'TOM']);