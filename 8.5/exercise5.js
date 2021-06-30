const assert = require('assert');

const myList = [1, 2, 3];

// escreva swap abaixo

/* Foi passado uma instrução de reordenação de array para a myList;
O swap retorna um molde que recebe e reordena cada elemento do array. */

const swap = ([a, b, c]) => [c, b, a];

const swappedList = swap(myList);

assert.strictEqual(swappedList[0], 3);
assert.strictEqual(swappedList[1], 2);
assert.strictEqual(swappedList[2], 1);