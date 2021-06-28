const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const flatten = () => arrays.reduce((accumulator, array) => accumulator.concat(array));
/* o método concat() cria um novo array contendo todos os arrays passados como parâmetro.
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/concat */

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);