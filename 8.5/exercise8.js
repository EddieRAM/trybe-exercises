const assert = require('assert');

// escreva greet abaixo

// Sem o default parameters eu teria que construir objetos contendo pessoas e saudações.

const greet = (person = `John`, greet = `Hi`) => `${greet} ${person}`;
console.log(greet('Ana', 'Oi'));

assert.strictEqual(greet('John'), 'Hi John');
assert.strictEqual(greet('John', 'Good morning'), 'Good morning John');
assert.strictEqual(greet('Isabela', 'Oi'), 'Oi Isabela');