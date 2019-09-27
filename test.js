require('chai').should();

const products = require('./index.js');

const tests = [
  // test case, solution, description

  ['123456', '214365', 'should work for any string'],
  ['hTsii  s aimex dpus rtni.g', 'This is a mixed up string.', 'should include punctuation']
];

describe('Tests', () => tests.map(testCase => {
  it(testCase[2], () => {
    console.log(products(testCase[0]),'result');

    products(testCase[0]).should.eql(testCase[1])
  })
}
));


