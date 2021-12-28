/* Crie um script que realize o fatorial de um número n.

O fatorial é a multiplicação de um número por todos os seus antecessores até chegar ao número 1.

Utilize o readline-sync para realizar o input de dados.

O script deve ser acionado através do comando npm run fatorial

Adicione validações para garantir que o valor informado seja um inteiro maior que 0.
 */

const readline = require('readline-sync');

function getFactorial(userNumber) {
  userNumber = readline.questionInt('Insert a positive integer number');
  const userInput = userNumber;
  let factorial = userNumber;
 
  if (userNumber < 0) {
    console.log(`Please, insert a number above 0`);
    return;
  }
  if (userNumber === 0 || userNumber === 1) {
    console.log(`The factorial of ${userInput} is 1`);
    return;
  }  
  while (userNumber > 1) {
    userNumber--;
    factorial = factorial * userNumber;
  }
  console.log(`The factorial of ${userInput} is ${factorial}`);
}

getFactorial();

module.exports = {
  getFactorial
}