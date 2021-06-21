 // Função que retorna a soma de dois números ou erro, se as entradas não forem números;

const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

  // Teste se o retorno de sum(4, 5) é 9

assert.strictEqual(9, sum(4, 5), "errou feiom errou rude!");

  // Teste se o retorno de sum(0, 0) é 0

assert.strictEqual(0, sum(0, 0), "fail");

  // Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)

assert.strictEqual(5, sum(4, "5"), "só number, retardado!");

  // Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")

  // Sim ====> throw new Error('parameters must be numbers');
  