const { obj1, obj2, obj3 } = require('./compareObjects.js');

describe('if any of the following objects matches exactly', () => {
  it('obj1 and obj3', () => {
    expect(obj1).not.toMatchObject(obj3);
  })
  it('obj2 and obj1', () => {
    expect(obj2).toMatchObject(obj1);
  })

  it('obj2 and obj3', () => {
    expect(obj2).not.toMatchObject(obj3);
  })
})