/* 1.No código abaixo você tem a função getUser , que retorna uma pessoa qualquer. 
Complete a função getUser de forma que ela receba uma outra função como parâmetro 
para que possa realizar as operações abaixo sobre a pessoa retornada. */

const assert = require('assert');

const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const getUser = callback => { // a função "getUser" recebe a função "callback" passada por parâmetro
  const userToReturn = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
  };
  return callback(userToReturn); // e retorna a função callback com o objeto "userToReturn" passado por parâmetro
};

assert.strictEqual(getUser(userFullName), "Hello! My name is Ivan Ivanovich"); // tudo isso receberá a função "userFullName", que retornará o template literals.
assert.strictEqual(getUser(userNationality), "Ivan is Russian"); // da mesma forma, a função "userNationality"

/* 2. No código abaixo você tem a função getUser modificada, que agora funciona de modo 
assíncrono e imprime dados de uma pessoa qualquer depois de um certo tempo. Complete a 
função getUser de forma que ela receba um callback para que possa realizar as operações 
abaixo sobre a pessoa. */
