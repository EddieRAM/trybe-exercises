/* eslint-disable no-undef */
//1, 2

const { expect } = require('chai');

const whichNumberSign = require('./numberSign');

describe('runs function numberSign', () => {
  describe('if number is above 0' , () => {
    describe('the result', () => {
      it('must be a string', () => {
        const result = whichNumberSign(1);
        expect(result).to.be.a('string');
      });
        it('must return "POSITIVO', () => {
          const result = whichNumberSign(1);
          expect(result).to.be.equals('POSITIVE');
        });
      });
    });

  describe('if the number is below 0', () => {
    describe('the result', () => {
      it('must be a string', () => {
        const result = whichNumberSign(-1);
        expect(result).to.be.a('string');
      });
      it('must return NEGATIVE', () => {
        const result = whichNumberSign(-1);
        expect(result).to.be.equals('NEGATIVE');
      }); 
    });
  });

  describe('if the number is 0', () => {
    describe('the result', () => {
      it('must be a string', () => {
        const result = whichNumberSign(0);
        expect(result).to.be.a('string');
      });
      it('must return NEUTER', () => {
        const result = whichNumberSign(0);
        expect(result).to.be.equals('NEUTER');
      });
    });
  })

});

//3

describe('when parameter is not a number', () => {
  describe('the result', () => {
    it('is a string', () => {
      const result = whichNumberSign('ablubleblé')
      expect(result).to.be.a('string');
    });
    it('must return a warning', () => {
      const result = whichNumberSign('ablubleblé')
      expect(result).to.be.equals('The parameter must be a number')
    });
  });
});
