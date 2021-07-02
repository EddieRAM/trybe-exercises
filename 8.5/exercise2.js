/* 2 - Crie uma função sum que dado um número variável de 
elementos retorna a soma desses elementos. Ou seja: 

Dica: use parâmetro rest. */

const assert = require('assert');

// escreva sum abaixo

/* Inseri um parâmetro rest para capturar qualquer valor passado 
pelo assert à função e usei o reduce para a soma. */

const sum = (...numbers) => numbers.reduce((a, b) => a + b, 0);

assert.strictEqual(sum(), 0);
assert.strictEqual(sum(1), 1);
assert.strictEqual(sum(1, 2), 3);
assert.strictEqual(sum(1, 2, 3), 6);
assert.strictEqual(sum(1, 2, 3, 4), 10);