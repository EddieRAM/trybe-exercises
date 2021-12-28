/* Crie um script que exiba o valor dos n primeiros elementos da sequência de fibonacci.

A sequência de fibonacci começa com 0 e 1 e os números seguintes são sempre a soma dos dois
 números anteriores.

Utilize o readline-sync para realizar o input de dados.

O script deve ser acionado através do comando npm run fibonacci

Não imprima o valor 0 , uma vez que ele não está incluso na sequência;

Quando n = 10 , exatamente 10 elementos devem ser exibidos;

Adicione validações para garantir que o valor informado é um inteiro maior que 0. */

const readline = require('readline-sync');

function firstFibonacci (userNumber) {
  userNumber = readline.questionInt('Insert a positive integer number');
  // preciso retornar um array com userNumber números de uma sequência fibonacci
  // uma sequência fibonacci é uma PA cujo último número é sempre a soma do penúltimo com o antepenúltimo

  // ex: caso o userNumber seja 10 o array será [1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
  
  if (userNumber < 0 || userNumber === 0) {
    console.log(`Please, insert a number above 0`);
    return;
  }

  let fibonacciArray = [];

  let n1 = 0, n2 = 1, nextTerm;

  nextTerm = n1 + n2;
 
  while (fibonacciArray.length <= userNumber-1) {
    fibonacciArray.push(nextTerm);
    n1 = n2;
    n2 = nextTerm;
    nextTerm = n1 + n2;
  }
console.log(`Your fibonacci sequence is ${fibonacciArray}`);  
  
}

firstFibonacci();

module.exports = {
  firstFibonacci
}