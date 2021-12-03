const { expect } = require('chai');

const whichNumberSign = require('./numberSign');

describe('if the number is positive, negative or neuter' , () => {
  const result = whichNumberSign(n);
  describe('if the number is positive', () => {
    it('must return POSITIVE', () => {
      expect(result).to.be('POSITIVE');
    });    
  });
  describe('if the number is negative', () => {
    it('must return NEGATIVE', () => {
      expect(result).to.be('NEGATIVE');
    }); 
  });
  describe('if the number is neuter', () => {
    it('must return NEUTER', () => {
      expect(result).to.be('NEUTER');
    }); 
  })
});

