const myFizzBuzz = require('./myFizzBuzz.js');

describe('if the function myFizzBuzz()', () => {
  it('returns the expected array', () => {
    expect(myFizzBuzz(15)).toMatch('fizzbuzz');
  });

  it('returns the expected array', () => {
    expect(myFizzBuzz(6)).toMatch('fizz');
  });

  it('returns the expected array', () => {
    expect(myFizzBuzz(10)).toMatch('buzz');
  });

  it('returns the expected array', () => {
    expect(myFizzBuzz('ablubleblé')).toEqual(false);
  });
});