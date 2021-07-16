const { users, findUserById, getUserName } = require('./getUserName');

describe('getUserName - async/await', () => {

  describe('if user Id exists', () => {
    it('should return the username', async () => {
      expect.assertions(1);
      const user = await getUserName(4)
      expect(user).toBe('Mark');      
    });
  });

  describe('if user id does not exists', () => {
    it('should return the expected error message', async () => {
      expect.assertions(1);
      try {
        await getUserName(2)
      } catch  (error) {
        expect(error).toEqual({ error: 'User with 2 not found.' });
      };
    });
  })
});
