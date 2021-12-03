const { expect } = require('chai');

const whichNumberSign = require('./numberSign');

describe('if the number is positive, negative or neuter' , () => {
  describe('if the number is positive', () => {
    const result = whichNumberSign();

    it('must be higher than 0', () => {
      expect(result).to.be.above(0);
    });

    it('must be lower than 0', () => {
      expect(result).to.be.below(0);
    });

    it('must be equal 0', () => {
      expect(result).to.be.equal(0);
    });
  });
});

