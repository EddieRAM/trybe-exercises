const myRemove = require('./myRemove')

describe('if the function myRemove()', () => {
  it('returns the expected array', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  it('does not outputs the described array', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  it('returns the same array given as parameter', () => {
    expect(myRemove([1, 15, 0, 7])).toEqual([1, 15, 0, 7]);
  });

  it('returns the expected array', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});