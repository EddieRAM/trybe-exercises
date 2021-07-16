/* 3 - Reescreva o teste do exercício anterior, desta vez utilizando a
sintaxe de async/await .

Dica : Utilize o try/catch para o caso de erro. */

const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
  };
  
const findUserById = (id) => {
  return new Promise((resolve, reject) => {
      if (users[id]) {
        return resolve(users[id]);
      };
  
      return reject({ error: 'User with ' + id + ' not found.' });
  });
};
  
const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
};

// Testes

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
