const myRemoveWithoutCopy = require('./myRemoveWithoutCopy.js');

describe('if the function MyRemoveWithoytCopy()', () => {
  it('returns the expected array', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  it('does not outputs the described array', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  it('returns the same array given as parameter', () => {
    expect(myRemoveWithoutCopy([1, 15, 0, 7])).toEqual([1, 15, 0, 7]);
  });

  it('returns the expected array', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
})