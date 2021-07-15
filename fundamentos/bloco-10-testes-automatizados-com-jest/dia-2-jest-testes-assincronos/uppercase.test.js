const uppercase = require("./uppercase");

it('should turn word into WORD', (done) => {
  uppercase('word', (str) => {
  expect(str).toBe('WORD');  
  done();
});
});
