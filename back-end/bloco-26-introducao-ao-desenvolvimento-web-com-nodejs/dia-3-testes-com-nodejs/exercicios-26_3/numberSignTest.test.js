const { expect } = require('chai');

const whichNumberSign = require('./numberSign');
describe('if the function whichNumberSign is working', () => {
  describe('if the number is positive, negative or neuter' , () => {
    describe('if the number is above 0', () => {
      it('must return POSITIVE', () => {
        const result = whichNumberSign(1);
        expect(result).to.be.equals('POSITIVE');
      });    
    });
    describe('if the number is below 0', () => {
      it('must return NEGATIVE', () => {
        const result = whichNumberSign(-1);
        expect(result).to.be.equals('NEGATIVE');
      }); 
    });
    describe('if the number is 0', () => {
      it('must return NEUTER', () => {
        const result = whichNumberSign(0);
        expect(result).to.be.equals('NEUTER');
      }); 
    })
  });
});

