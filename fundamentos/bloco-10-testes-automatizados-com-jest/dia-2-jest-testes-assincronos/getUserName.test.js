const { users, findUserById, getUserName } = require('./getUserName');

describe('getUserName - promise', () => {

  describe('if user Id exists', () => {
    it('should return the username', () => {
      expect.assertions(1);
      return getUserName(4).then(data => expect(data).toEqual('Mark'));      
    })
  });

  describe('if user id does not exists', () => {
    it('should return the expected error message', () => {
      expect.assertions(1);
      return getUserName(2).catch(error =>
        expect(error).toEqual({ error: 'User with 2 not found.' })
      );
    });
  });
});