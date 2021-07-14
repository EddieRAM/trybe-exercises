const { sum } = require('./sumAB.js');

describe("if function sum()", () => {
  it("verify if sum() returns the sum of the two numbers depending on the user's input", () => {
    expect(sum(4, 5)).toBe(9);
  });

  it("verify if sum() returns 0 when the user's input is 0 and 0", () => {
    expect(sum(0, 0)).toBe(0);
  });

  it("verify if sum() returns an error when there's a string on the input ", () => {
    expect(() => { sum(4, "5") }).toThrow();
  });

  it("verify if the the error's message is 'paramaters must be numbers'", () => {
    expect(() => { sum(4, "5") }).toThrow(/parameters must be numbers/);
  });
});
