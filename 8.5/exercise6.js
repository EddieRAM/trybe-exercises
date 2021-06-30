/* 6 - Suponha que você esteja lidando com carros e, da forma como o problema lhe foi entregue, cada carro é modelado como um array. Porém, essa modelagem está baixo nível. Cria uma função toObject que, dada uma lista, retorna um objeto representando o carro:
Dica: use array destructuring e abbreviation object literal . */


const assert = require('assert');
const { NOMEM } = require('dns');

const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// escreva toObject abaixo

/* O object destructuring prepara as chaves para receber os valores dos arrays e retorná-los em forma de objetos. */

/* const toObject = ((list) => {
  const [modelo, marca, ano] = list;
  const car = {
    name: modelo,
    brand: marca,
    year: ano
  }
  return car;)
} */

// De forma abreviada basta escrever assim:

const toObject = ([name, brand, year]) => ({ name, brand, year});

assert.deepStrictEqual(toObject(palio), { name: 'Palio', brand: 'Fiat', year: 2019 });
assert.deepStrictEqual(toObject(shelbyCobra), { name: 'Shelby Cobra', brand: 'Ford', year: 1963 });
assert.deepStrictEqual(toObject(chiron), { name: 'Chiron', brand: 'Bugatti', year: 2016 });